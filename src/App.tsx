import React, {useState} from 'react';
import './App.css';
import AppTitle from './components/AppTitle/AppTitle';
import Rating, {RatingValueType} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrollableOnOff} from "./components/OnOff/UncontrollableOnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [buttonStatus, setButtonStatus] = useState(false);

    return (
        <div className="App">
            <AppTitle title={"This is APP component"}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<UncontrollableRating/>*/}

            <Accordion titleValue={"Menu"} accordionCollapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed}/>

            <OnOff buttonStatus={buttonStatus} setButtonStatus={setButtonStatus}/>
            <UncontrollableOnOff/>
        </div>
    );
}

export default App;
