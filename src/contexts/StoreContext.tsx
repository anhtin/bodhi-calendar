import React, { useEffect } from 'react';
import { useState, HTMLProps } from 'react';

import { createMutableContext } from 'utils/helpers';
import { initializeStore, saveStore, Store } from 'store';

const StoreContext = createMutableContext<Store>();

export function StoreProvider({ children }: HTMLProps<HTMLElement>) {
  const [store, setStore] = useState(initializeStore);

  useEffect(() => {
    saveStore(store);
  }, [store]);

  return (
    <StoreContext.Provider value={[store, setStore]}>
      {children}
    </StoreContext.Provider>
  );
}

export const StoreConsumer = StoreContext.Consumer;

export default StoreContext;
