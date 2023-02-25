export type LocalStorageService = {
  getLocalStorageItem: <T>(key: string) => Promise<T | undefined>;
  getNamespacedKey: (key: string) => string;
  setLocalStorageItem: (key: string, value: string) => Promise<void>;
  removeLocalStorageItem: (key: string) => Promise<void>;
};
