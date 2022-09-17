import { useMutableValue } from './useMutableValue';
import { useObservable } from './useObservable';

export function useObservableValue<T>(
  resolve: () => T,
  mutate: (value: T) => void
): [T, (value: T) => void] {
  const observableValue = useMutableValue(resolve, mutate);
  const value = useObservable(observableValue);
  return [value, (value) => observableValue.change(value)];
}
