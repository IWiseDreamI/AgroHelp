import { faGithubAlt, faTelegram, faVk, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useCallback, useState } from "react";
import Donut from "./Donut.js"
import './home.css';

function Home() {
    const [interactiveText, setInteractiveText] = useState(); 

    let animationType;
    let animations = ["flip", "bouncing", "shake", "spin", "jump", "fade"]

    const socialAnimation = (object) => {
        const item = object.target
        if(item.classList.contains("home__social") && item.classList.length === 1){
            animationType = animations[Math.floor(Math.random() * animations.length)]
            item.classList.add(animationType)
        }
    }

    const socialAnimationEnd = (object) => {
        let item = object.target
        for (let animation of animations){
            item.classList.remove(animation)
        }
    }

    const animationEnd = useCallback((event) => {
        const item = event.target
        item.classList.remove("bouncing")
    }, [])

    const randomColor = useCallback(() => {
        return "#" + Math.floor(Math.random()*16777215).toString(16)
    }, [])

    const animateItem = useCallback((event) => {
        const item = event.target
        const color = randomColor()
        item.style.color = color;
        item.style.textShadow = color + "80 1px 0 10px";
        item.classList.add("bouncing");
    }, [randomColor])

    const Interactive = useCallback(() => {
        let content = "Hello, I'm Kamil, Web developer".split("")
        content = content.map((item, id) => {
            if(item === " " && content[id-1] === ",") return <br key={"letter-" + id}/>
            else if(item === " ") return <span key={"letter-" + id}> </span>
            const color = randomColor();
            return <div key={"letter-" + id} onMouseOver={animateItem} style={{color: color, textShadow: color + "80 1px 0 10px"}} onAnimationEnd={animationEnd}>{item}</div> 
        })

        setInteractiveText(content)
    }, [animateItem, randomColor, animationEnd])

    useEffect(() => {
        if (interactiveText === undefined) Interactive();
    }, [ Interactive, interactiveText ])

    return (
        <div className="home screen">
            <div className="home__content">
                <div className="home__socials">
                    <div className="home__social" onMouseEnter={socialAnimation} onAnimationEnd={socialAnimationEnd}><FontAwesomeIcon icon={faGithubAlt} className="social"/></div>
                    <div className="home__social" onMouseEnter={socialAnimation} onAnimationEnd={socialAnimationEnd}><FontAwesomeIcon icon={faTelegram} className="social" /></div>
                    <div className="home__social" onMouseEnter={socialAnimation} onAnimationEnd={socialAnimationEnd}><FontAwesomeIcon icon={faVk} className="social" /></div>
                    <div className="home__social" onMouseEnter={socialAnimation} onAnimationEnd={socialAnimationEnd}><FontAwesomeIcon icon={faGoogle} className="social" /></div>
                </div>
                <div className="interactive">
                    {interactiveText}
                    <div className='interactive__p'>Fullstack developer</div><br />
                    <button className="contact-btn">Contact me!</button>
                </div>
            </div>
            <Donut />
        </div>
    );
}

export default Home;
