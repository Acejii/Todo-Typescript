import React, {useState} from 'react';
import './App.css';
import InputForm from './components/InputForm/InputForm';
import List from './components/List/List';

export interface IState {
  people: {
    id?: string | number;
    name: string;
    age: number | string;
    description: string
  }
}

function App() {
  const [peopleList, setPeopleList] = useState<IState['people'][]>([]) 
  
  return (
    <div className="container">
    <InputForm setPeopleList={setPeopleList}/>
    <List peopleList = {peopleList} setPeopleList= {setPeopleList}/>
    </div>
  );
}

export default App;
