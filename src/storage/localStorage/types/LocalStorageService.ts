export type LocalStorageService = {
  getLocalStorageItem: <T>(key: string) => Promise<T | undefined>;
  getNamespacedKey: (key: string) => string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setLocalStorageItem: (key: string, value: any) => Promise<void>;
  removeLocalStorageItem: (key: string) => Promise<void>;
};
