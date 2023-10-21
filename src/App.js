import React from 'react';
import CustomButton from './Components/Custom-Button/Custom-button.component';
import MainDashboard from './Components/Main-Dashboard/Main-dashboard.component';
import DynamicTable from './Components/DynamicTable/DynamicTable.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomButton>Connect</CustomButton>
      <MainDashboard></MainDashboard>
      <DynamicTable></DynamicTable>
    </div>
  );
}

export default App;
