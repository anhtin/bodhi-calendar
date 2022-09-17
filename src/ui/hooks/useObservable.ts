import { useEffect, useState } from 'react';

import { Observable } from '../../patterns';

export function useObservable<T>(observable: Observable<T>): T {
  const [value, setValue] = useState<T>(observable.getValue());

  useEffect(() => {
    observable.subscribe(setValue);
    return () => observable.unsubscribe(setValue);
  }, [observable, setValue]);

  return value;
}
