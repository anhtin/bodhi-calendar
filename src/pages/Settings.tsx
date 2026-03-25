import useSWR from 'swr';

import { resolveTranslations } from '@/data/i18n';
import { LOCALE_NAMES, LocaleTag, resolveLocale } from '@/data/locale';
import { resolveSettings, updateSettings } from '@/data/settings';
import { getAllVegetarianPractices } from '@/data/vegetarian';

export function Settings() {
  const {
    data: settings,
    error: settingsError,
    mutate: mutateSettings,
  } = useSWR('settings', resolveSettings);
  const { data: locale, error: localeError } = useSWR(
    settings != null ? ['locale', settings.locale] : null,
    ([, override]) => resolveLocale(override),
  );

  if (settingsError) throw settingsError;
  if (localeError) throw localeError;

  if (settings == null || locale == null) {
    return <p className="text-center">{resolveTranslations('en-US').loading}</p>;
  }

  const t = resolveTranslations(locale.tag);

  const handlePracticeSelect = (practiceId: number) => {
    const newSettings = { ...settings, vegetarian: { ...settings.vegetarian, practiceId } };
    updateSettings(newSettings);
    mutateSettings(newSettings);
  };

  const handleLocaleSelect = (locale: LocaleTag | null) => {
    const newSettings = { ...settings, locale };
    updateSettings(newSettings);
    mutateSettings(newSettings);
  };

  return (
    <div className="w-[300px] m-auto">
      <h1 className="text-4xl text-center font-bold mb-2">{t.settings.heading}</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-lg font-bold mb-[0.25em]">{t.settings.language}</label>
          <select
            className="bg-white p-[0.5em] border border-(--border) rounded-sm"
            value={settings.locale ?? ''}
            onChange={(e) => handleLocaleSelect((e.target.value as LocaleTag) || null)}
          >
            <option value="">{t.settings.auto}</option>
            <option disabled>──────────</option>
            {(Object.entries(LOCALE_NAMES) as [LocaleTag, string][]).map(([tag, name]) => (
              <option key={tag} value={tag}>{name}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-bold mb-[0.25em]">{t.settings.vegetarianPractice}</label>
          <select
            className="bg-white p-[0.5em] border border-(--border) rounded-sm"
            value={settings.vegetarian.practiceId}
            onChange={(e) => handlePracticeSelect(+e.target.value)}
          >
            {getAllVegetarianPractices().map((_, i) => (
              <option key={i} value={i}>
                {t.practices[i]}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}
