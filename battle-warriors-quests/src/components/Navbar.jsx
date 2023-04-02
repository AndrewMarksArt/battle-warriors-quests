import "../css/main.css"

export default function Navbar () {
    return (
        <>
        <header className="navbar">
            <div className="site-title">
                Battle Warriors
            </div>

            <nav className="navbar-links">
                <a href="https://www.twitter.com/battlevikingnft">Twitter</a>
                <a href="https://discord.gg/battle-warriors">Discord</a>
            </nav>
        </header>
        </>
    );
}