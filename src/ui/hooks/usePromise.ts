import { useEffect, useState } from 'react';

export function usePromise<T, E>(
  provider: () => Promise<T>,
  deps: Array<unknown>
): [T?, E?] {
  const [value, setValue] = useState<T | undefined>();
  const [error, setError] = useState<E | undefined>();

  useEffect(
    () => {
      provider()
        .then((value) => {
          setError(undefined);
          setValue(value);
        })
        .catch((error) => {
          setValue(undefined);
          setError(error);
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );

  return [value, error];
}
