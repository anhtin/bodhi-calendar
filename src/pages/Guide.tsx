import { DayCellView } from '@/components/DayCellView';
import { Translations } from '@/data/i18n';

type GuideProps = {
  t: Translations;
};

export function Guide({ t }: GuideProps) {
  const g = t.guide;

  return (
    <div className="max-w-[420px] m-auto">
      <h1 className="text-4xl text-center font-bold mb-4">{g.heading}</h1>
      <p className="mb-6 leading-relaxed">{g.description}</p>

      <h2 className="text-xl font-bold mb-4">{g.howToRead}</h2>

      <div className="flex flex-col gap-6">
        <ExampleRow label={g.examples.regular} lunarDay={12} solarDay={5} />
        <ExampleRow label={g.examples.vegetarian} lunarDay={15} solarDay={13} isVegetarian />
        <ExampleRow label={g.examples.todayNormal} lunarDay={3} solarDay={21} isToday />
        <ExampleRow label={g.examples.todayVegetarian} lunarDay={1} solarDay={28} isToday isVegetarian />
        <ExampleRow label={g.examples.otherMonth} lunarDay={9} solarDay={31} faded />
      </div>

      <p className="mt-6 leading-relaxed">{g.settingsNote}</p>
    </div>
  );
}

type ExampleRowProps = {
  label: string;
  lunarDay: number;
  solarDay: number;
  isToday?: boolean;
  isVegetarian?: boolean;
  faded?: boolean;
};

function ExampleRow({ label, lunarDay, solarDay, isToday, isVegetarian, faded }: ExampleRowProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0" style={{ fontSize: 'calc(1rem + 1vw)', width: '2.2em' }}>
        <DayCellView lunarDay={lunarDay} solarDay={solarDay} isToday={isToday} isVegetarian={isVegetarian} faded={faded} />
      </div>
      <p className="text-sm leading-snug flex-1">{label}</p>
    </div>
  );
}
