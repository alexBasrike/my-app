import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsedValue: boolean
}
function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody collapsed={props.collapsedValue}/>
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
    collapsed: boolean
}

function AccordionBody(props: AccordionBodyPropsType) {

    if ( props.collapsed === false ) {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        );
    }

    return (
        <ul className="collapsed">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );

}

export default Accordion;