
import "../css/main.css"

export default function Navbar () {
    return (
        <>
        <header className="nav-header">
            <div className="logo">
                <h1 className="logo--text">Battle Warriors</h1>
            </div>

            <nav className="nav">
                <ul className="nav--list">
                    <li className="nav--list--item"><a href="https://www.twitter.com/battlevikingnft">Twitter</a></li>
                    <li className="nav--list--item"><a href="https://discord.gg/battle-warriors">Discord</a></li>
                </ul>
            </nav>
        </header>
        </>
    );
}