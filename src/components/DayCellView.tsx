import classNames from 'classnames';

type DayCellViewProps = {
  lunarDay: number;
  solarDay: number;
  isToday?: boolean;
  isVegetarian?: boolean;
  faded?: boolean;
  'aria-label'?: string;
};

export function DayCellView({ lunarDay, solarDay, isToday, isVegetarian, faded, 'aria-label': ariaLabel }: DayCellViewProps) {
  return (
    <div className={classNames('flex justify-center', faded && 'opacity-[0.5]')}>
      <div
        aria-label={ariaLabel}
        className={classNames(
          'relative flex flex-col justify-center items-center w-[2.2em] h-[2.2em]',
          isToday && !isVegetarian && 'bg-(--foreground) rounded-full font-bold text-(--background)',
          isToday && isVegetarian && 'bg-(--vegetarian) rounded-full font-bold text-(--background)',
          isVegetarian && !isToday && 'text-(--vegetarian) font-bold',
        )}
      >
        {isVegetarian && <span aria-hidden="true" className="absolute top-[0.3em] text-[0.3em] leading-none">•</span>}
        <span className="text-[0.5em] leading-none">{lunarDay}</span>
        <span className="leading-none">{solarDay}</span>
      </div>
    </div>
  );
}
