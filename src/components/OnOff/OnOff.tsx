import React from 'react';

type OnOffPropsType = {
    status: "on" | "off"
}

export const OnOff = (props: OnOffPropsType) => {
    return (
        <div>
            <br/>
            {props.status === "on" ? <On/> : <Off/>}
        </div>
    );
};

const On = () => {
    return (
        <div className={"status-block"}>
            <span className={"square on"}>on</span>
            <span className={"square"}>off</span>
            <span className={"circle on"}>on</span>
        </div>
    )
}

const Off = () => {
    return (
        <div className={"status-block"}>
            <span className={"square"}>on</span>
            <span className={"square off"}>off</span>
            <span className={"circle off"}>off</span>
        </div>
    )
}