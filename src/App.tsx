import React from 'react';
import './App.css';
import AppTitle from './components/AppTitle/AppTitle';
import Rating from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import {OnOff} from "./components/OnOff/OnOff";
import UncontrollableRating from "./components/UncontrollableRating/UncontrollableRating";

function App() {
    console.log('APP rendering');
    return (
        <div className="App">
            <AppTitle title={"This is APP component"}/>

            {/*<Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}

            <Accordion titleValue={"Menu"}/>

            <OnOff/>

            <UncontrollableRating/>
        </div>
    );
}

export default App;
