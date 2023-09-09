import React, {useState} from 'react';

export const UncontrollableOnOff = () => {

    let [buttonStatus, setButtonStatus] = useState(false);

    const on = {
        background: buttonStatus ? "green" : "black",
        display: "inline-block",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "20px",
        border: "1px solid #fff",
        verticalAlign: "top"
    }
    const off = {
        background: buttonStatus ? "black" : "red",
        display: "inline-block",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "20px",
        border: "1px solid #fff",
        verticalAlign: "top"
    }
    const circle = {
        background: buttonStatus ? "green" : "red",
        display: "inline-block",
        width: "20px",
        height: "20px",
        border: "1px solid #fff",
        borderRadius: "50%",
        verticalAlign: "top"
    }

    const setOn = () => {
        setButtonStatus(true)
    }

    const setOff = () => {
        setButtonStatus(false)
    }

    return (
        <div>
            <span onClick={setOn} style={on}>On</span>
            <span onClick={setOff} style={off}>Off</span>
            <span style={circle}></span>
        </div>
    );
};