import { z } from 'zod';

const STORAGE_KEY = 'settings';

const settingsSchemaV1 = z.object({
  vegetarian: z.object({
    scheduleId: z.number(),
  }),
  version: z.number(),
});

export type Settings = z.infer<typeof settingsSchemaV1>;

const DEFAULT_SETTINGS: Settings = {
  vegetarian: {
    scheduleId: 4,
  },
  version: 1,
};

export function updateSettings(settings: Settings): void {
  const settingsJson = JSON.stringify(settings);
  localStorage.setItem(STORAGE_KEY, settingsJson);
}

export function resolveSettings(): Settings {
  const settingsJson = localStorage.getItem(STORAGE_KEY);
  if (settingsJson == null) return DEFAULT_SETTINGS;

  const settings = JSON.parse(settingsJson);
  const migratedSettings = migrateSettings(settings);
  return migratedSettings;
}

function migrateSettings(settings: unknown): Settings {
  const result = settingsSchemaV1.safeParse(settings);
  if (result.success) return result.data;

  return DEFAULT_SETTINGS;
}
