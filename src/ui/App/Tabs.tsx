import { ReactElement, useState } from 'react';
import styled from 'styled-components';

import { colors } from '../constants';

type TabsProps = {
  tabs: Array<{
    name: string;
    component: () => ReactElement | null;
  }>;
};

export function Tabs({ tabs }: TabsProps) {
  const [pageIndex, setPageIndex] = useState(0);

  const Page = tabs[pageIndex].component;

  return (
    <>
      <Page />
      <TabContainer>
        {tabs.map(({ name }, i) => (
          <Tab
            key={name}
            active={i === pageIndex}
            onClick={() => setPageIndex(i)}
          >
            {name}
          </Tab>
        ))}
      </TabContainer>
    </>
  );
}

export const TabContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100vw;
`;

export const Tab = styled.button<{ active?: boolean }>`
  flex: 1;
  padding: 0;
  margin: 0;
  height: min(80px, max(15vw, 15vh));
  border: 1px solid #dbdbdb;
  background: ${({ active }) => (active ? colors.GRAY_LIGHT : 'white')};
  font-size: 1rem;
  color: #363636;

  &:hover {
    background: ${colors.GRAY_LIGHT};
  }
`;
