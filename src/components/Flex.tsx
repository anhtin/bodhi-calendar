import React, { HTMLProps } from 'react';

type Props = {
  direction?: 'row' | 'column';
  flex?: number,
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between';
} & HTMLProps<HTMLDivElement>;

function Flex({
  direction,
  flex,
  justifyContent,
  alignItems,
  style,
  ...htmlProps
}: Props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        flex,
        justifyContent,
        alignItems,
        ...style
      }}
      {...htmlProps}
    />
  );
}

export default Flex;
