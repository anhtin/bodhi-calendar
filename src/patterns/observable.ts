export type Observer<T> = (value: T) => void;

export class Observable<T> {
  private readonly observers: Set<Observer<T>> = new Set();

  constructor(private value: T) {}

  getValue(): T {
    return this.value;
  }

  change(value: T): void {
    this.value = value;
    this.observers.forEach((observer) => observer(this.value));
  }

  subscribe(observer: Observer<T>): void {
    this.observers.add(observer);
  }

  unsubscribe(observer: Observer<T>): void {
    this.observers.delete(observer);
  }
}
