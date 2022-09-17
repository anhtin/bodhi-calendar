export abstract class ValueObject {
  public equals(other: any): boolean {
    return (
      other instanceof ValueObject &&
      Object.entries(this).every(([key, value]) => {
        const otherValue = (other as any)[key];
        return value instanceof ValueObject
          ? value.equals(otherValue)
          : value === otherValue;
      })
    );
  }
}

export abstract class SingleValueObject<T> extends ValueObject {
  constructor(readonly value: T) {
    super();
  }
}

export abstract class Entity<T> {
  constructor(readonly id: T) {}
}

// Polyfill Array.prototype.includes to work with ValueObject
(function polyfillArrayIncludes() {
  const oldIncludes = Array.prototype.includes;

  // eslint-disable-next-line no-extend-native
  Array.prototype.includes = function (
    searchElement: unknown,
    fromIndex?: number
  ): boolean {
    return searchElement instanceof ValueObject
      ? this.slice(fromIndex).some((element: unknown) =>
          searchElement.equals(element)
        )
      : oldIncludes.bind(this)(searchElement);
  };
})();
