import "../css/Lectorium.css"
import Axios from "axios";
import { useEffect, useState } from "react";

function Lectorium() {

    const [articles, setArticles] = useState()

    useEffect(() => {
        Axios.post("/user/getLectorium")
        .then((result) => {
            let res = (result.data).map((item) => {
                return(
                    <div key={item.id}>
                        
                        {item.header}
                    </div>
                )
            })
            console.log(res)
            setArticles(res) 
        })
    }, [])

    if(articles === undefined){return}

    return (
        <div className="Lectorium">
            
        </div>
    );
};

export default Lectorium;
