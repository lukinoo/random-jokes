import { useState } from "react";
import Container from "./container";

const URL = 'http://api.icndb.com/jokes/random';

const Wrapper = () => {
    const [joke,setJoke] = useState('');

    const randomJokes = () => {
        return (
            fetch(URL)
                .then(res => res.json())
                .then(data => {
                    setJoke(data.value.joke)
                })
        )
    }
    return (
        <div className="wrapper">
            <Container joke={joke} randomjokeFunct={randomJokes}/>
        </div>
    )
}

export default Wrapper;