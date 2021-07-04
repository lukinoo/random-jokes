const Container = (props) => {
    return (
        <div className="container">
            <h1 className="title">🔥 Chuck Norris Jokes 🔥</h1>
            <p className="jokes">{props.joke}</p>
            <button className="button" onClick={props.randomjokeFunct}>
            <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
            </svg>
            <span>😂 Get new joke 😂</span>
            </button>
        </div>
    )
}

export default Container;