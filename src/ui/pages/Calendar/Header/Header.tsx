import { Button, Container, Month, TitleContainer, Year } from './styled';

type Props = {
  year: number;
  monthName: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
};

export function Header({ year, monthName, onPrevMonth, onNextMonth }: Props) {
  return (
    <Container>
      <Button onClick={onPrevMonth}>&lt;</Button>
      <TitleContainer>
        <Year>{year}</Year>
        <Month>{monthName}</Month>
      </TitleContainer>
      <Button onClick={onNextMonth}>&gt;</Button>
    </Container>
  );
}

export default Header;
