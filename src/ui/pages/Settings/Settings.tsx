import { useMemo } from 'react';

import { VegetarianScheduleId } from '../../../domain';
import { settingsService } from '../../../services';
import { useObservableValue } from '../../hooks';
import Select from './Select';
import { Container, Form, Label } from './styled';

export function Settings() {
  const {
    data: { settings, availableSchedules },
    actions: { changeSchedule },
  } = useViewModel();

  const scheduleOptions = availableSchedules.map(({ name, value }) => ({
    name,
    value: value.value,
  }));

  const onScheduleChange = (id: string) => {
    changeSchedule(new VegetarianScheduleId(+id));
  };

  if (settings == null) return null;

  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Settings</h1>
      <Form>
        <Label>Schedule</Label>
        <Select
          current={settings.vegetarian.scheduleId.value}
          options={scheduleOptions}
          onSelect={onScheduleChange}
        />
      </Form>
    </Container>
  );
}

function useViewModel() {
  const [settings, setSettings] = useObservableValue(
    () => settingsService.getCurrent(),
    (value) => settingsService.update(value)
  );

  const availableSchedules = useMemo(
    () => settingsService.getOptions().vegetarian.scheduleId,
    []
  );

  return {
    data: {
      settings,
      availableSchedules,
    },
    actions: {
      changeSchedule: (id: VegetarianScheduleId) =>
        setSettings({ ...settings, vegetarian: { scheduleId: id } }),
    },
  };
}
