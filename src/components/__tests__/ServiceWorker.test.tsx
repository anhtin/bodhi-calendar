import React from 'react';
import TestRenderer from 'react-test-renderer';

import ServiceWorker from '../ServiceWorker';
import { ServiceWorkerRegistrationConfig } from 'utils/serviceWorker';

jest.mock('utils/serviceWorker', () => ({ register: jest.fn() }));
jest.mock('hooks', () => ({ useMessages: jest.fn() }));

import { register } from 'utils/serviceWorker';
import { useMessages } from 'hooks';

describe('ServiceWorker', () => {
  it('does not add message when no update', () => {
    const mockSetMessages = jest.fn();
    (useMessages as jest.Mock).mockImplementation(() => [[], mockSetMessages]);

    TestRenderer.create(
      <ServiceWorker>
      </ServiceWorker>
    );

    expect(mockSetMessages).not.toHaveBeenCalled();
  });

  it('add message when update', (done) => {
    const mockSetMessages = jest.fn(() => {
      done();
    });
    (useMessages as jest.Mock).mockImplementation(() => [[], mockSetMessages]);
    (register as jest.Mock).mockImplementation((config?: ServiceWorkerRegistrationConfig) => {
      if (config && config.onUpdate) {
        config.onUpdate({} as any);
      }
    });

    TestRenderer.create(
      <ServiceWorker>
      </ServiceWorker>
    );
  });
})
