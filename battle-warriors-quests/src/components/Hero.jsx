import "../css/main.css"

export default function Hero() {
    return (
        <>
        <div className="main">
            <img src="./img/title.png" className="title"></img>
            <h2 className="subhead">
                Embark on a legendary quest for glory and honor! 
                Let the sagas sing of your triumph against the fearsome foes that threaten the realm!
            </h2>
            <div className="container">
                <img src="./img/stone_gateway.png" className="main-img"></img>
                <div className="content">
                    <input type="text" placeholder="Enter your email address" className="input-text"></input>
                    <button className="button-primary">Get Early Access!</button>
                    <button className="button-secondary">And Join Discord</button>
                </div>
            </div>
        </div>
        </>
    );
}