import { useState } from "react";
import "./index.css";

function Movie() {
    const [title, setTitle] = useState("");
    const [poster, setPoster] = useState("");
    const [search, setSearch] = useState("");
    const [year, setYear] = useState("")

    const URL = `http://www.omdbapi.com/?s=${search}&apikey=dfb37098`;

    const fetchData = async () => {
        const result = await fetch(URL);
        const json = await result.json();
        let Random = Math.floor(Math.random() * json.Search.length);
        if(json.Search.Poster !== ""){
            const firstMovie = json.Search[Random];
            setTitle(firstMovie.Title);
            setPoster(firstMovie.Poster);
            setYear(firstMovie.Year);
            console.log(json);
        }else{
            setTitle("We Dont Have A Poster For This Movie");
        }

    };
    const Button = () => {
        fetchData();
    };

    const Input = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div className="container">
            <h1>{title}</h1>
            <h1 className="year-text">{year}</h1>
            <img src={poster} alt="" />
            <br/>
            <input className="input" placeholder="Search For Movie" onChange={Input}></input>
            <button className="btn-donate" onClick={Button}>Search</button>
        </div>
    );
}

export default Movie;
