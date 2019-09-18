import { useContext } from 'react';

import DateContext from 'contexts/DateContext';
import MessageContext, { Message } from 'contexts/MessageContext';
import StoreContext from 'contexts/StoreContext';
import { useMutableContext } from 'utils/helpers';
import { Store } from 'store';

export const useDate = () => useContext(DateContext);
export const useMessages = () => useMutableContext<Message[]>(MessageContext);
export const useStore = () => useMutableContext<Store>(StoreContext);
