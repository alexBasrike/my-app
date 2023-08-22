import React from 'react';
import './App.css';
import AppTitle from './components/AppTitle/AppTitle';
import Rating from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    console.log('APP rendering');
    return (
        <div className="App">
            <AppTitle title={"This is APP component"}/>
            <Accordion titleValue={"Menu"} collapsedValue={true}/>
            <Accordion titleValue={"Users"} collapsedValue={false}/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <OnOff status={"on"}/>
            <OnOff status={"off"}/>
        </div>
    );
}

export default App;
