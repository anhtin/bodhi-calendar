import { migrate_from_0_to_1 } from './migrate_from_0_to_1';

beforeEach(() => {
  localStorage = createFakeLocalStorage();
});

it("removes the 'version' item", () => {
  localStorage.setItem('version', '0.0.0');

  migrate_from_0_to_1();

  expect(localStorage.getItem('version')).toBeNull();
});

it("removes the 'schedule' item", () => {
  localStorage.setItem('schedule', '{}');

  migrate_from_0_to_1();

  expect(localStorage.getItem('schedule')).toBeNull();
});

describe("adds 'settings' item with correct schedule ID", () => {
  it("when schedule name is '2 days a month'", () => {
    setupSchedule('2 days a month');

    migrate_from_0_to_1();

    assertScheduleId(0);
  });

  it("when schedule name is '4 days a month'", () => {
    setupSchedule('4 days a month');

    migrate_from_0_to_1();

    assertScheduleId(1);
  });

  it("when schedule name is '6 days a month'", () => {
    setupSchedule('6 days a month');

    migrate_from_0_to_1();

    assertScheduleId(2);
  });

  it("when schedule name is '8 days a month'", () => {
    setupSchedule('8 days a month');

    migrate_from_0_to_1();

    assertScheduleId(3);
  });

  it("when schedule name is '10 days a month'", () => {
    setupSchedule('10 days a month');

    migrate_from_0_to_1();

    assertScheduleId(4);
  });
});

function setupSchedule(name: string) {
  localStorage.setItem('schedule', JSON.stringify({ name }));
}

function assertScheduleId(id: number) {
  expect(JSON.parse(localStorage.getItem('settings')!)).toEqual(
    expect.objectContaining({
      vegetarian: { scheduleId: id },
    })
  );
}

function createFakeLocalStorage(): Storage {
  const store = new Map();
  return {
    get length(): number {
      return store.size;
    },
    getItem(key: string): string {
      return store.get(key);
    },
    setItem(key: string, value: string): void {
      store.set(key, value);
    },
    removeItem(key: string): void {
      store.delete(key);
    },
    clear(): void {
      store.clear();
    },
    key(index: number): string {
      return Array.from(store.keys())[index];
    },
  };
}
