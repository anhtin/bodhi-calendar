import { SolarLunarDate } from 'solarlunar';
import { Dispatch, SetStateAction } from 'react';

export type MutableContextUpdate<A> = Dispatch<SetStateAction<A>>;
export type MutableContextValue<A> = [A, MutableContextUpdate<A>];

export interface Settings {
  schedule: VegetarianSchedule;
}

export interface VegetarianSchedule {
  name: string;
  pred: VegetarianDayPredicate;
};

type VegetarianDayPredicate = (date: SolarLunarDate) => boolean;
