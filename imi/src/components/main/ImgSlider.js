import { useEffect } from 'react';

const ImgSlider = () => {

    const coldown = 4000;

    let sliderObjects = ["/images/static/KFEN.jpg", 
        "/images/static/YAGU.jpeg",
        "/images/static/GUK.webp", 
        "/images/static/GRF.jpg"]

    sliderObjects = sliderObjects.map((object, index) => {
        return <img src={object} alt="Изображение" key={index}/>;
    })
     
    const slide = (slider) => {
        const wrapper = slider.firstChild;
        slider.scrollBy({left: window.innerWidth, behavior: "smooth"});
        setTimeout(() => {
            wrapper.append(wrapper.firstChild)
            slider.scrollBy({left: -window.innerWidth})
        }, coldown / 2)
    }   

    useEffect(() => {
        const slider = document.querySelector("#svfu-slider");

        const slideInterval = setInterval(() => {
            slide(slider);
        }, coldown);

        return () => clearInterval(slideInterval);
    })

    return (
        <div id="svfu-slider">
            <div className="svfu-slider__wrapper">
                {sliderObjects}
            </div>
        </div>
    );
}

export default ImgSlider;