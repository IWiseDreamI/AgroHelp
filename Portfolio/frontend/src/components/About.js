import './about.css';
import data from "../data/about.json";
import { useEffect, useState } from "react";

import react from "../data/images/react.svg"
import nodeJS from "../data/images/nodeJS.svg"
import cpp from "../data/images/cpp.svg"
import mySQL from "../data/images/mySQL.svg"
import js from "../data/images/js.svg"
import python from "../data/images/python.svg"
import figma from "../data/images/figma.svg"
import html from "../data/images/html.svg"
import css from "../data/images/css.svg"

function About() {
    const [contentHeader, setContentHeader] = useState();
    const [contentText, setContentText] = useState();

    const changeContent = (event) => {
        const item = event.target
        const content = item.parentNode.parentNode.firstChild
        
        for(let sibling of item.parentNode.childNodes){
            if(sibling !== item){
                sibling.classList.remove("active")
            }
        }

        if(item.classList.contains("active")){
            content.classList.add("hidden-content")
            setTimeout(() => {
                setContentHeader("About")
                setContentText(data.about.text)
                item.classList.remove("active")
                content.classList.remove("hidden-content")    
            }, 500)
        }
        else{
            content.classList.add("hidden-content")
            item.classList.add("active")
            setTimeout(() => {
                setContentHeader(item.id)
                setContentText(data[item.id].text)    
                content.classList.remove("hidden-content")    
            }, 500)
        }
    }

    useEffect(() => {
        if (contentHeader === undefined) setContentHeader("About")
        if (contentText === undefined) setContentText(data.about.text)
    }, [contentHeader, contentText, setContentHeader, setContentText])

    return (
        <div className="about screen">
            <div className="about__content">
                <h2>{contentHeader}</h2>
                <div>{contentText}</div>
            </div>
            <div className="about__interactive">
                <img src={react}    onClick={changeContent} id="React"  alt="React logo" />
                <img src={nodeJS}   onClick={changeContent} id="NodeJS" alt="NodeJS logo" />
                <img src={js}       onClick={changeContent} id="JavaScript"     alt="JS logo" />
                <img src={cpp}      onClick={changeContent} id="C++"    alt="CPP logo" />
                <img src={mySQL}    onClick={changeContent} id="MySQL"  alt="MySQL logo" />
                <img src={python}   onClick={changeContent} id="Python" alt="Python logo" />
                <img src={figma}    onClick={changeContent} id="Figma"  alt="Figma logo" />
                <img src={html}     onClick={changeContent} id="HTML"   alt="HTML logo" />
                <img src={css}      onClick={changeContent} id="CSS"    alt="CSS logo" />
            </div>
        </div>
    );
}

export default About;
