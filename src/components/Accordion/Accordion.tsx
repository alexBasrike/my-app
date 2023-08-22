import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsedValue: boolean
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsedValue && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    );
}

type AccordionBodyPropsType = {
    collapsed?: boolean
}

function AccordionBody(props: AccordionBodyPropsType) {

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );

}

export default Accordion;