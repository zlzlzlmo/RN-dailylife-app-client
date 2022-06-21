type LocalStorage = typeof window.localStorage;

abstract class AbstractStorage<T> {
  constructor(private readonly stroage: LocalStorage = window.localStorage) {}

  set(key: keyof T, value: string) {
    if (typeof key !== "string") return;
    this.stroage.setItem(key, value);
  }

  get(key: keyof T) {
    if (typeof key !== "string") return;
    return this.stroage.getItem(key);
  }
}

export default AbstractStorage;
