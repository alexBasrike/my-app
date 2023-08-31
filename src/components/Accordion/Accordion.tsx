import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    title: string
}

function Accordion(props: AccordionPropsType) {

    let [collapsedValue, setCollapsedValue] = useState(false);

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {collapsedValue
                ? <button onClick={ () => setCollapsedValue(false) }>-</button>
                : <button onClick={ () => setCollapsedValue(true) }>+</button>
            }
            {collapsedValue && <AccordionBody/>}
        </div>
    );
}

function AccordionTitle(props: AccordionTitlePropsType) {

    const titleCss = {
        display: "inline-block"
    }

    return (
        <h3 style={titleCss}>{props.title}</h3>
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