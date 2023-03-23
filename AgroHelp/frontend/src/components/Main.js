import { useEffect } from "react";
import Auth from "./Auth";
import News from "./News";
import Start from "./Start";
import Personal from "./Personal";
import Lectorium from "./Lectorium";


function Main({main, user, setUser, setMain}) {
    useEffect(() => {
        console.log()
    })
    return (
        <main className='Main'>
            {main === "Start" || (main === "Personal" && user === undefined)? <div className="background"/>: undefined}
            {main === "Start"? <Start user={user} setMain={setMain} />: undefined}
            {main === "News"? <News />: undefined}
            {main === "Lectorium"? <Lectorium setMain={setMain}/>: undefined}
            {main === "Personal" && user === undefined? <Auth setMain={setMain} setUser={setUser}/>: undefined}
            {main === "Personal" && user !== undefined? <Personal />: undefined}
        </main>
    );
};

export default Main;
