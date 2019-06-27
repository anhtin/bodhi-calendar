import React from 'react';
import { DateTime } from 'luxon';

import CalendarView from './CalendarView';
import { Configuration } from 'utils/types';
import { initializeStore, getVegetarianSchedule } from 'utils/store';

export interface CalendarContainerState {
  currentDate: DateTime;
  displayDate: DateTime;
  config: Configuration;
  showConfig: boolean;
}

class CalendarContainer extends React.Component<{}, CalendarContainerState> {
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
    return (
      <CalendarView
        onPrevMonth={this.onPrevMonth}
        onNextMonth={this.onNextMonth}
        onShowConfiguration={this.onShowConfiguration}
        onHideConfiguration={this.onHideConfiguration}
        onUpdateConfiguration={this.onUpdateConfiguration}
        {...this.state}
      />
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

  onShowConfiguration = () => {
    this.setState({ ...this.state, showConfig: !this.state.showConfig });
  }

  onHideConfiguration = () => {
    this.setState({ ...this.state, showConfig: false });
  }

  onUpdateConfiguration = (config: Configuration) => {
    this.setState({ ...this.state, config });
  }
}

export default CalendarContainer;
