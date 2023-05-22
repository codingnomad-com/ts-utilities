import { LocalStorageService } from './types/LocalStorageService';

export const LocalStorage = (namespace: string): LocalStorageService => ({
  getLocalStorageItem: async <T>(key: string): Promise<T | undefined> => {
    try {
      return (JSON.parse(
        window.localStorage.getItem(
          LocalStorage(namespace).getNamespacedKey(key),
        ) ?? 'null',
      ) ?? undefined) as T | undefined;
    } catch {
      return undefined;
    }
  },

  getNamespacedKey: (key: string): string => [namespace, key].join(':'),

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setLocalStorageItem: async (key: string, value: any): Promise<void> => {
    try {
      return window.localStorage.setItem(
        LocalStorage(namespace).getNamespacedKey(key),
        value,
      );
    } catch {
      return undefined;
    }
  },

  removeLocalStorageItem: async (key: string): Promise<void> => {
    try {
      return window.localStorage.removeItem(
        LocalStorage(namespace).getNamespacedKey(key),
      );
    } catch {
      return undefined;
    }
  },
});
