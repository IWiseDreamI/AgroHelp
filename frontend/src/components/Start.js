import "../css/Start.css"

function Start({user, setMain}) {

    const changeMain = () => {
        setMain("Personal")
    }

    return (
        <div className="Start">
            <div>
                <h1>Улучшайте урожайность<br /> 
                    и минимизируйте риски с <br /> 
                    цифровым агропомощником 
                </h1>                
                <button onClick={changeMain}>{user === undefined?  "Зарегестрироваться" : "Личный кабинет"}</button>
            </div>
        </div>
    );
};

export default Start;
