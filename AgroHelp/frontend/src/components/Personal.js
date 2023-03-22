import "../css/Personal.css"
import avatar from "../images/avatar.png"
import vector from "../images/Vector.svg"
import Axios from "axios";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";

function Personal() {
    const [user, setUser] = useState();

    const addData = () => {
        console.log("fds")
    }

    useEffect(() => {
        if(user !== undefined){return}
        Axios.post("/user/getUser", {userID: Cookies.get("UserID")})
        .then((result) => {
            setUser(result.data[0]) 
        })
    }, [user])

    if(user === undefined){return}
    console.log(user)
    return (
        <div className="Personal">
            <div className="user-info">
                <div className="user-info__header">
                    <div className="user-info__header-base">
                        <div className="user-info__avatar">
                            <img src={avatar} alt="" />
                        </div>
                        <div className="user-info__header-content">
                            <h2>{user.username}</h2>
                            <p>{user.region? user.region: "Не указано"}</p>
                        </div>
                    </div>
                    <button onClick={addData}> <p>Добавить данные</p> <img src={vector} alt="" /></button>
                </div>
                <div className="user-info__content">
                    <div className="user-info__content-base">
                        <div className="user-info__about">
                            <h3>О себе:</h3>
                            <p>{user.about? user.about: "Не указано"}</p>
                        </div>
                        <div className="user-info__education">
                            <h3>Образование:</h3>
                            <p>{user.education? user.education: "Не указано"}</p>
                        </div>
                    </div>
                    <div className="user-info__company">
                        <h3>Компания:</h3>
                        <p>{user.company? user.company: "Не указано"}</p>
                    </div>
                    <div className="user-info__experience">
                        <h3>Опыт работы:</h3>
                        {user.experience? user.experience: "Не указано"}
                    </div>
                </div>
            </div>
            <div className="user-skills">
                <div className="crop-production user-skill">
                    <h2>Растениеводство</h2>
                    {user.skills? <div><p>user.experience</p></div>: <div><p>Отсутствует</p></div>}
                </div>
                <hr />
                <div className="livestock-production  user-skill">
                    <h2>Животноводство</h2>
                    {user.skills? <div><p>user.experience</p></div>: <div><p>Отсутствует</p></div>}
                </div>
            </div>
        </div>
    );
};

export default Personal;
