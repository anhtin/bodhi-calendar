import React from 'react';
import { Modal, ModalBackground, Select } from 'bloomer';
import { ModalCard } from 'bloomer/lib/components/Modal/Card/ModalCard';
import { ModalCardHeader } from 'bloomer/lib/components/Modal/Card/ModalCardHeader';
import { ModalCardTitle } from 'bloomer/lib/components/Modal/Card/ModalCardTitle';
import { ModalCardBody } from 'bloomer/lib/components/Modal/Card/ModalCardBody';
import { Delete } from 'bloomer/lib/elements/Delete';
import { Field } from 'bloomer/lib/elements/Form/Field/Field';
import { Label } from 'bloomer/lib/elements/Form/Label';
import { Control } from 'bloomer/lib/elements/Form/Control';

import { useStore } from 'hooks';
import { getVegetarianScheduleByName, getVegetarianSchedules, setVegetarianSchedule, Settings, VegetarianSchedule } from 'store';

interface Props {
  visible: boolean;
  onHide: () => void;
}

function SettingsModal({ visible, onHide }: Props) {
  return (
    <Modal isActive={visible}>
      <ModalBackground />
      <ModalCard>
        <ModalHeader title="Settings" onClose={onHide} />
        <ModalBody />
      </ModalCard>
    </Modal>
  );
}

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

function ModalHeader({ title, onClose }: ModalHeaderProps) {
  return (
    <ModalCardHeader>
      <ModalCardTitle>{title}</ModalCardTitle>
      <Delete onClick={onClose} />
    </ModalCardHeader>
  );
}

function ModalBody() {
  const [store, setStore] = useStore();
  return (
    <ModalCardBody>
      <Field>
        <Label>Schedule</Label>
        <Control>
          <VegetarianScheduleSelect
            settings={store.settings}
            onUpdate={(settings) => setStore({ ...store, settings })}
          />
        </Control>
      </Field>
    </ModalCardBody>
  );
}

interface VegetarianScheduleSelectProps {
  settings: Settings;
  onUpdate: (settings: Settings) => void;
}

function VegetarianScheduleSelect({
  settings,
  onUpdate
}: VegetarianScheduleSelectProps) {
  return (
    <Select
      value={settings.schedule.name}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => (
        onUpdate(
          newSettingsFromSchedule(
            getVegetarianScheduleByName(e.target.value),
            settings
          )
        )
      )
      }>
      {getVegetarianSchedules().map(({ name }, i) => (
        <option key={i}>{name}</option>
      ))}
    </Select>
  )
}

function newSettingsFromSchedule(
  schedule: VegetarianSchedule | undefined,
  currentSettings: Settings,
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
