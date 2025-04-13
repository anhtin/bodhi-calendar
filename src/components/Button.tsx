import classNames from 'classnames';
import { ComponentProps } from 'react';

export function Button({
  children,
  className,
  ...rest
}: ComponentProps<'button'>) {
  return (
    <button
      className={classNames(
        'bg-white hover:bg-[#f6f6ff] border border-[#dbdbdb] rounded-sm px-[1em] py-[0.75em] h-fit',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
