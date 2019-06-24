import React from 'react';
import 'bulma/css/bulma.min.css';

import Calendar from 'components/Calendar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Calendar />
    </div>
  );
}

export default App;
