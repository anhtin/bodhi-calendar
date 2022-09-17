import { useEffect, useMemo } from 'react';

import { Observable } from '../../patterns/observable';

export function useMutableValue<T>(
  resolve: () => T,
  mutate: (value: T) => void
): Observable<T> {
  const observableValue = useMemo(() => new Observable(resolve()), [resolve]);

  useEffect(() => {
    observableValue.subscribe(mutate);
    return () => observableValue.unsubscribe(mutate);
  }, [observableValue, mutate]);

  return observableValue;
}
