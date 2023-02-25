export type SessionStorageService = {
  getSessionStorageItem: <T>(key: string) => Promise<T | undefined>;
  getNamespacedKey: (key: string) => string;
  setSessionStorageItem: (key: string, value: string) => Promise<void>;
  removeSessionStorageItem: (key: string) => Promise<void>;
};
