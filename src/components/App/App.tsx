import React from 'react';

import Calendar from 'components/Calendar';
import 'assets/sass/main.scss';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Calendar />
    </div>
  );
}

export default App;
