import Auth from "./Auth";
import News from "./News";
import Start from "./Start";
import Personal from "./Personal";
import Lectorium from "./Lectorium";
import Production from "./Production";


function Main({main, user, setUser, setMain}) {
    return (
        <main className='Main'>
            {main === "Start" || (main === "Personal" && user === undefined)? <div className="background"/>: undefined}
            {main === "Start"? <Start user={user} setMain={setMain} />: undefined}
            {main === "News"? <News />: undefined}
            {main === "Lectorium"? <Lectorium setMain={setMain}/>: undefined}
            {main === "Production"? <Production setMain={setMain}/>: undefined}
            {main === "Personal" && user === undefined? <Auth setMain={setMain} setUser={setUser}/>: undefined}
            {main === "Personal" && user !== undefined? <Personal />: undefined}
        </main>
    );
};

export default Main;
