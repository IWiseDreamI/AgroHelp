import "../css/Lectorium.css"
import { useEffect, useState } from "react";
import Axios from "axios"
import Cookies from "js-cookie"

function Lectorium({setMain}) {

    const [articles, setArticles] = useState();

    const updateArticles = () => {
        Axios.post('/user/getArticles').then((result) => {
            const res = result.data.map((item) => {
                return(
                    <div key={item.id} className="article" >
                        <img src={"http://localhost:5000/images/" + item.image} alt="" />
                        <h3>{item.header}</h3>
                    </div>
                )
            })
            setArticles(res)
        })
    }

    useEffect(() => {
        updateArticles()
        
    }, [])


    const addArticle = (event) => {
        event.preventDefault();

        const form = new FormData();
        form.append('userID', Cookies.get("UserID"));
        form.append('header', document.getElementsByName("header")[0].value );
        form.append('content', document.getElementsByName("content")[0].value );
        form.append('category', document.getElementsByName("category")[0].value );
        form.append('image', document.getElementsByName("image")[0].files[0]);

        Axios.post('/user/addArticle', form).then(() => {
            document.getElementsByName("header")[0].value = ""
            document.getElementsByName("content")[0].value = ""
            document.getElementsByName("category")[0].value = ""
            updateArticles()    
        })
    }

    return(
        <div className="Lectorium">
            <div className="articles">
                {articles}
            </div>
            <div className="article-form">
                <form onSubmit={addArticle} encType="multipart/form-data">
                    <div className="article-form__left">
                        <div>
                            <label htmlFor="">Заголовок статьи</label>
                            <input type="text"      name="header"   />
                        </div>
                        <div>
                            <label htmlFor="">Текст статьи</label>
                            <textarea type="text"   name="content" />    
                        </div>
                    </div>
                    <div className="article-form__right">
                        <div>
                            <label htmlFor="">Изображение</label>
                            <input type="file"      name="image"/>
                        </div>
                        <div>
                            <label htmlFor="">Категория</label>
                            <select name="category">
                                <option value="Животноводство"> Животноводство</option>
                                <option value="Растениеводство">Растениеводство</option>
                            </select>
                        </div>
                        <button type="submit">Опубликовать статью</button>
                    </div>
                </form>
            </div>
        </div>
        
    )
};

export default Lectorium;
