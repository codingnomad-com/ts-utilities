import { SessionStorageService } from './types/SessionStorageService';

export const SessionStorageServiceFactory = (
  namespace: string,
): SessionStorageService => ({
  getSessionStorageItem: async <T>(key: string): Promise<T | undefined> => {
    try {
      return (JSON.parse(
        window.sessionStorage.getItem(
          SessionStorageServiceFactory(namespace).getNamespacedKey(key),
        ) ?? 'null',
      ) ?? undefined) as T | undefined;
    } catch {
      return undefined;
    }
  },

  getNamespacedKey: (key: string): string => [namespace, key].join(':'),

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSessionStorageItem: async (key: string, value: any): Promise<void> => {
    try {
      return window.sessionStorage.setItem(
        SessionStorageServiceFactory(namespace).getNamespacedKey(key),
        JSON.stringify(value),
      );
    } catch {
      return undefined;
    }
  },

  removeSessionStorageItem: async (key: string): Promise<void> => {
    try {
      return window.sessionStorage.removeItem(
        SessionStorageServiceFactory(namespace).getNamespacedKey(key),
      );
    } catch {
      return undefined;
    }
  },
});
