import React, { ReactElement, CSSProperties } from 'react';

export interface FlexProps {
  direction?: 'row' | 'column';
  flex?: number,
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between';
  children: ReactElement | ReactElement[];
  style?: CSSProperties;
}

const Flex = ({
  direction,
  flex,
  justifyContent,
  alignItems,
  children,
  style,
}: FlexProps) => (
  <div style={{
    display: 'flex',
    flexDirection: direction,
    flex,
    justifyContent,
    alignItems,
    ...style
  }}>
    {children}
  </div>
)

export default Flex;