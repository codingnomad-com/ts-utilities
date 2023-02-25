export type SessionStorageService = {
  getSessionStorageItem: <T>(key: string) => Promise<T | undefined>;
  getNamespacedKey: (key: string) => string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSessionStorageItem: (key: string, value: any) => Promise<void>;
  removeSessionStorageItem: (key: string) => Promise<void>;
};
