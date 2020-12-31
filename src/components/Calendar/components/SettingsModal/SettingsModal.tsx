import React from 'react';

import Modal from 'components/Modal';
import { useStore } from 'hooks';
import {
  getVegetarianScheduleByName,
  getVegetarianSchedules,
  setVegetarianSchedule,
  Settings,
  VegetarianSchedule,
} from 'store';
import { Form, Label, Select } from './styled';

interface Props {
  visible: boolean;
  onHide: () => void;
}

function SettingsModal({ visible, onHide }: Props) {
  const [store, setStore] = useStore();
  return (
    <Modal isOpen={visible} onClose={onHide} heading="Settings">
      <Form>
        <Label>Schedule</Label>
        <VegetarianScheduleSelect
          settings={store.settings}
          onUpdate={(settings) => setStore({ ...store, settings })}
        />
      </Form>
    </Modal>
  );
}

interface VegetarianScheduleSelectProps {
  settings: Settings;
  onUpdate: (settings: Settings) => void;
}

function VegetarianScheduleSelect({
  settings,
  onUpdate,
}: VegetarianScheduleSelectProps) {
  return (
    <Select
      value={settings.schedule.name}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        onUpdate(
          newSettingsFromSchedule(
            getVegetarianScheduleByName(e.target.value),
            settings
          )
        )
      }
    >
      {getVegetarianSchedules().map(({ name }, i) => (
        <option key={i}>{name}</option>
      ))}
    </Select>
  );
}

function newSettingsFromSchedule(
  schedule: VegetarianSchedule | undefined,
  currentSettings: Settings
): Settings {
  if (schedule) {
    setVegetarianSchedule(schedule);
    return {
      ...currentSettings,
      schedule: schedule,
    };
  }
  return currentSettings;
}

export default SettingsModal;
