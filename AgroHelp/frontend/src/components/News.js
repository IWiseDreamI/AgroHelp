import { useEffect, useState } from "react";
import Axios from "axios";


function News() {
    const [news, setNews] = useState()

    useEffect(() => {
        Axios.post("/user/getNews")
        .then((result) => {
            let res = (result.data).map((item) => {
                return(
                    <div key={item.id}>{item.header}</div>
                )
            })
            console.log(res)
            setNews(res) 
        })
    }, [])

    return (
        <div className="News">
            {news}
        </div>
    );
};

export default News;
