const NewsSlider = () => {

    // slides = результат запроса к серверу

    let slides = [
        {
            id: 0,
            header: "",
            hashtag: "",
            image: "img1.jpg"
        }, 
        {
            id: 1,
            header: "",
            hashtag: "",
            image: "img2.jpg"
        }, 
        {
            id: 2,
            header: "",
            hashtag: "",
            image: "img3.jpg"
        }, 
    ]

    slides = slides.map((item) => {
        
        const {id, header, hashtag} = item;
        let {image} = item;
        image = "/images/news/" +  image;

        return (
            <div className="newsSlide" key={id}>
                <h3>{header}</h3>
                <p>{hashtag}</p>
                <img src={image} alt="Изображение слайдера новостей" />
            </div>
        )
    })


    return (
        <div id="newsSlider">
            {slides}
        </div>
    );
}

export default NewsSlider;