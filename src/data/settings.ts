import { z } from 'zod';

import { LocaleTag } from './locale';

const STORAGE_KEY = 'settings';

const settingsSchemaV1 = z.object({
  vegetarian: z.object({
    scheduleId: z.number(),
  }),
  version: z.literal(1),
});

const settingsSchemaV2 = z.object({
  vegetarian: z.object({
    practiceId: z.number(),
  }),
  locale: z.enum(['en-US', 'nb', 'vi'] as [LocaleTag, ...LocaleTag[]]).nullable().catch(null),
  version: z.literal(2),
});

export type Settings = z.infer<typeof settingsSchemaV2>;

const DEFAULT_SETTINGS: Settings = {
  vegetarian: {
    practiceId: 4,
  },
  locale: null,
  version: 2,
};

export function updateSettings(settings: Settings): void {
  const settingsJson = JSON.stringify(settings);
  localStorage.setItem(STORAGE_KEY, settingsJson);
}

export function resolveSettings(): Settings {
  const settingsJson = localStorage.getItem(STORAGE_KEY);
  if (settingsJson == null) return DEFAULT_SETTINGS;

  const settings = JSON.parse(settingsJson);
  return migrateSettings(settings);
}

function migrateSettings(settings: unknown): Settings {
  const v2 = settingsSchemaV2.safeParse(settings);
  if (v2.success) return v2.data;

  const v1 = settingsSchemaV1.safeParse(settings);
  if (v1.success) {
    return {
      vegetarian: { practiceId: v1.data.vegetarian.scheduleId },
      locale: null,
      version: 2,
    };
  }

  return DEFAULT_SETTINGS;
}
