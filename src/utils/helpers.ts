import {
  useContext,
  createContext,
  Context,
  Dispatch,
  SetStateAction,
} from 'react';

type MutableContext<T> = Context<(T | MutableContextUpdate<T>)[]>;
type MutableContextValue<T> = [T, MutableContextUpdate<T>];
type MutableContextUpdate<T> = Dispatch<SetStateAction<T>>;

export function createMutableContext<T>(defaultValue: T | null = null) {
  return createContext([
    defaultValue as T,
    (() => null) as MutableContextUpdate<T>,
  ]);
}

export function useMutableContext<T>(context: MutableContext<T>) {
  return useContext(context) as MutableContextValue<T>;
}

export function composeCssClasses(classes: (string | false)[]): string {
  return classes.filter((cls): boolean => cls !== false).join(' ');
}
