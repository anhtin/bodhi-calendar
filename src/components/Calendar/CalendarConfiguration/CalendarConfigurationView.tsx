import React from 'react';
import { Modal, ModalBackground, Select } from 'bloomer';

import { getVegetarianSchedules, setVegetarianSchedule } from 'utils/store';
import { ModalCard } from 'bloomer/lib/components/Modal/Card/ModalCard';
import { ModalCardHeader } from 'bloomer/lib/components/Modal/Card/ModalCardHeader';
import { ModalCardTitle } from 'bloomer/lib/components/Modal/Card/ModalCardTitle';
import { ModalCardBody } from 'bloomer/lib/components/Modal/Card/ModalCardBody';
import { Delete } from 'bloomer/lib/elements/Delete';
import { Field } from 'bloomer/lib/elements/Form/Field/Field';
import { Label } from 'bloomer/lib/elements/Form/Label';
import { Control } from 'bloomer/lib/elements/Form/Control';
import { Configuration, VegetarianSchedule } from 'utils/types';
import { findScheduleByName } from 'utils/helpers';

export interface CalendarConfigurationViewProps {
  config: Configuration;
  visible: boolean;
  onHide: () => void;
  onUpdate: (newConfig: Configuration) => void;
}

export const CalendarConfigurationView = ({
  config,
  visible,
  onHide,
  onUpdate,
}: CalendarConfigurationViewProps) => (
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
            <Select onChange={(e: any) => (
              onUpdate(newConfigFromSchedule(
                config,
                findScheduleByName(e.target.value)
              ))
            )}>
              {getVegetarianSchedules().map(({ name }) => (
                name === config.schedule.name
                  ? <option selected={true}>{ name }</option>
                  : <option>{ name }</option>
              ))}
            </Select>
          </Control>
        </Field>
      </ModalCardBody>
    </ModalCard>
  </Modal>
);

function newConfigFromSchedule(
  currentConfig: Configuration,
  schedule?: VegetarianSchedule,
): Configuration {
  if (schedule) {
    setVegetarianSchedule(schedule);
    return {
      ...currentConfig,
      schedule: schedule,
    };
  }
  return currentConfig;
}