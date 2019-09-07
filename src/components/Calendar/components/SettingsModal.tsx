import React, { ChangeEvent } from 'react';
import { Modal, ModalBackground, Select } from 'bloomer';
import { ModalCard } from 'bloomer/lib/components/Modal/Card/ModalCard';
import { ModalCardHeader } from 'bloomer/lib/components/Modal/Card/ModalCardHeader';
import { ModalCardTitle } from 'bloomer/lib/components/Modal/Card/ModalCardTitle';
import { ModalCardBody } from 'bloomer/lib/components/Modal/Card/ModalCardBody';
import { Delete } from 'bloomer/lib/elements/Delete';
import { Field } from 'bloomer/lib/elements/Form/Field/Field';
import { Label } from 'bloomer/lib/elements/Form/Label';
import { Control } from 'bloomer/lib/elements/Form/Control';

import { getVegetarianSchedules, setVegetarianSchedule } from 'utils/store';
import { findScheduleByName } from 'utils/helpers';
import { Settings, VegetarianSchedule } from 'types';

interface Props {
  settings: Settings;
  visible: boolean;
  onHide: () => void;
  onUpdate: (newConfig: Settings) => void;
}

function SettingsModal({ settings, visible, onHide, onUpdate, }: Props) {
  return (
    <Modal isActive={visible}>
      <ModalBackground />
      <ModalCard>
        <ModalCardHeader>
          <ModalCardTitle>Configuration</ModalCardTitle>
          <Delete onClick={onHide} />
        </ModalCardHeader>
        <ModalCardBody>
          <Field>
            <Label>Schedule</Label>
            <Control>
              <Select
                value={settings.schedule.name}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => (
                  onUpdate(
                    newSettingsFromSchedule(
                      findScheduleByName(e.target.value),
                      settings
                    )
                  )
                )
                }>
                {getVegetarianSchedules().map(({ name }, i) => (
                  <option key={i}>{name}</option>
                ))}
              </Select>
            </Control>
          </Field>
        </ModalCardBody>
      </ModalCard>
    </Modal>
  );
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
