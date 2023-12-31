import React from 'react';

type OnOffPropsType = {
    buttonStatus: boolean
    setButtonStatus: (value: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {

    const on = {
        background: props.buttonStatus ? "green" : "black",
        display: "inline-block",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "20px",
        border: "1px solid #fff",
        verticalAlign: "top"
    }
    const off = {
        background: props.buttonStatus ? "black" : "red",
        display: "inline-block",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "20px",
        border: "1px solid #fff",
        verticalAlign: "top"
    }
    const circle = {
        background: props.buttonStatus ? "green" : "red",
        display: "inline-block",
        width: "20px",
        height: "20px",
        border: "1px solid #fff",
        borderRadius: "50%",
        verticalAlign: "top"
    }

    const setOn = () => {
        props.setButtonStatus(true)
    }

    const setOff = () => {
        props.setButtonStatus(false)
    }

    return (
        <div>
            <span onClick={setOn} style={on}>On</span>
            <span onClick={setOff} style={off}>Off</span>
            <span style={circle}></span>
        </div>
    );
};