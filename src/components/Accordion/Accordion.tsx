import React from "react";

type AccordionPropsType = {
    titleValue: string
    accordionCollapsed: boolean
    setAccordionCollapsed: (value: boolean) => void
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} accordionCollapsed={props.accordionCollapsed} setAccordionCollapsed={props.setAccordionCollapsed}/>
            {props.accordionCollapsed && <AccordionBody/>}
        </div>
    );
}



type AccordionTitlePropsType = {
    title: string
    accordionCollapsed: boolean
    setAccordionCollapsed: (value: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    const titleCss = {
        display: "inline-block"
    }

    return (
        <h3 style={titleCss} onClick={() => props.setAccordionCollapsed(!props.accordionCollapsed)}>{props.title}</h3>
    );
}

function AccordionBody() {

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );

}

export default Accordion;