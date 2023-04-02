import "../css/main.css"

export default function Hero() {
    return (
        <>
        <div className="wrapper">
            <div className="top-section-container">
                <h1 className="headline">Quests for Valhalla</h1>
                <p className="description">Embark on a legendary quest for glory and honor! Let the sagas sing of your triumph against the fearsome foes that threaten the realm!</p>
            </div>
            <div className="gateway-container">
                <img src="./img/stone_gateway.png" className="main-img"></img>

                <div className="cta-content">
                    <input type="text" placeholder="enter your email" className="input-email"></input>
                    <button className="button-primary">Get Early Access!</button>
                    <button className="button-secondary">And Join Discord</button>
                </div>

            </div>
            
        </div>
        </>
    );
}