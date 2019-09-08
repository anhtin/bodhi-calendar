import React, { HTMLProps, ReactType } from 'react';

type Props = {
  direction?: 'row' | 'column';
  flex?: number;
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between';
  tag?: ReactType;
} & HTMLProps<HTMLDivElement>;

function Flex({
  direction,
  flex,
  justifyContent,
  alignItems,
  style,
  tag = 'div',
  ...htmlProps
}: Props): JSX.Element {
  return React.createElement(tag, {
    style: {
      display: 'flex',
      flexDirection: direction,
      flex,
      justifyContent,
      alignItems,
      ...style
    },
    ...htmlProps
  });
}

export default Flex;
