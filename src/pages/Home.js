import { useEffect, useState } from 'react'
import './home.scss'
import axios from '../api'
import Card from '../components/card'
import Slider from '../components/slider'

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
        <div className="home" style={{ paddingLeft: "20px" }}>

            <Slider>
                {films && films.map((item) => (
                    <Card key={item.id} vote={item.vote_average} date={item.release_date} title={item.title} src={`http://image.tmdb.org/t/p/original${item.poster_path}`} />

                ))}
            </Slider>


        </div>
    )
}

export default Home