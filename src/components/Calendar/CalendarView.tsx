import React from 'react';
import { DateTime } from 'luxon';

import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';
import Flex from 'components/Flex';
import { CalendarConfigurationButton, CalendarConfigurationView } from './CalendarConfiguration';
import { Configuration } from 'utils/types';
import { initializeStore, getVegetarianSchedule } from 'utils/store';

interface CalenderViewState {
  currentDate: DateTime;
  displayDate: DateTime;
  config: Configuration;
  showConfig: boolean;
}

export class CalendarView extends React.Component<any, CalenderViewState> {
  constructor(props: any) {
    super(props);
    initializeStore();
    const currentDate = DateTime.local();
    this.state = {
      showConfig: false,
      config: {
        schedule: getVegetarianSchedule(),
      },
      displayDate: currentDate.startOf('month'),
      currentDate,
    };
  }

  render() {
    const { currentDate, displayDate, config, showConfig } = this.state;
    return (
      <Flex
        direction="column"
        justifyContent="space-around"
        alignItems="space-around"
      >
          <CalendarHeader
            displayDate={this.state.displayDate}
            onPrevMonth={this.onPrevMonth}
            onNextMonth={this.onNextMonth}
          />
          <CalendarBody
            currentDate={currentDate}
            displayDate={displayDate}
            pred={config.schedule.pred}
          />
        <CalendarConfigurationView
          visible={showConfig}
          onHide={this.onHideConfigurationModal}
          config={config}
          onUpdate={this.onUpdateConfiguration}
        />
        <CalendarConfigurationButton
          onClick={this.onToggleConfigurationModal}
        />
      </Flex>
    );
  }

  onPrevMonth = () => {
    this.setState({
      ...this.state,
      displayDate: this.state.displayDate.minus({ months: 1 }),
    });
  }
  onNextMonth = () => {
    this.setState({
      ...this.state,
      displayDate: this.state.displayDate.plus({ months: 1 }),
    });
  }

  onToggleConfigurationModal = () => {
    this.setState({ ...this.state, showConfig: !this.state.showConfig });
  }

  onHideConfigurationModal = () => {
    this.setState({ ...this.state, showConfig: false });
  }

  onUpdateConfiguration = (config: Configuration) => {
    this.setState({ ...this.state, config });
  }
}