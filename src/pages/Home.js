import { useEffect, useState } from 'react'
import './home.scss'
import axios from '../api'
import Card from '../components/card'

const Home = () => {

    const [films, setFilms] = useState(null)

    const getFilms = async () => {
        const response = await axios.get("/movie/popular")

        return response;
    };

    useEffect(() => {
        (async () => {
            const response = await getFilms();
            setFilms(response.data.results)
            console.log(response)
        })();

    }, [])
    return (
        <div className="home" style={{display:"flex", flexWrap:"wrap", gap: "15px", paddingLeft: "20px"}}>
           {films && films.map((item) => (
               <Card src={`http://image.tmdb.org/t/p/original${item.poster_path}`}/>
           ))}
        </div>
    )
}

export default Home