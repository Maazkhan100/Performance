import React from 'react';

import CustomButton from './Components/Custom-Button/Custom-button.component';
import Header from './Components/Header/Header.component';
import MainDashboard from './Components/Main-Dashboard/Main-dashboard.component';
import DynamicTable from './Components/DynamicTable/DynamicTable.component';
import TextArea from './Components/Text-Area/Text-Area.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainDashboard></MainDashboard>
      <CustomButton>Connect wallet (Metamask)</CustomButton>
      <TextArea></TextArea>
      <DynamicTable></DynamicTable>
    </div>
  );
}

export default App;
