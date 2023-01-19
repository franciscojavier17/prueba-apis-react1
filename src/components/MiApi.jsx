import { useEffect, useState } from "react";

const MiApi = () => {
    const [characters, setCharacters] = useState([]);
    const[search, setSearch] = useState("");

    const getData = async () => {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        setCharacters(data.results);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <div className="searches">
                <h2>Busca tu personaje de Rick and Morty aqui:</h2>
                <input
                    type="text" 
                    placeholder="Buscar..."
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
            </div>
            <ul>
                {characters
                .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
                .map((character) => (
                    <div key={character.id}>
                        <h3>{character.name}</h3>
                        <img src={character.image} alt="imgrandm" />
                        <p>{character.species}</p>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default MiApi;
