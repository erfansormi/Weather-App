import React, { useState } from 'react'
import axios from 'axios'

//css
import styles from "./home.module.css"

//components
import Error from './Error'
import WeatherInfo from './WeatherInfo'
import Loading from './Loading'
import Offline from './Offline'

const Home = () => {
    const [data, setData] = useState([])
    const [location, setLocation] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [isOnline, setIsOnline] = useState(true)

    //api
    const apiKey = "e1f438d844aff2505d8c945e53721cc2"
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`

    //search location
    const searchLocation = (event) => {
        if (event.key == "Enter" || event.type == "click") {
            setLoading(true)
            setError(false)
            setIsOnline(true)

            if (navigator.onLine) {
                axios.get(baseURL)
                    .then((response => {
                        setData(response.data)
                        setLoading(false)
                        setError(false)
                    }))
                    .catch(() => {
                        setLoading(false)
                        setError(true)
                    })
            }
            else {
                setIsOnline(false)
                setLoading(false)
            }
        }
    }

    const submitHandler = (event) => {
        event.preventDefault()
    }

    return (
        <main className={`${styles.main_container}`}>
            <div className={`container`}>
                <h1 className='my-2 text-uppercase text-primary text-center'>
                    weather app
                </h1>
                <form className={`${styles.form_container}`} onSubmit={submitHandler}>
                    <input autoFocus type="text" value={location} placeholder="search location"
                        onChange={(event) => setLocation(event.target.value)}
                        onKeyDown={searchLocation} />
                    <button type="submit" className={`btn rounded-0`}
                        onSubmit={submitHandler} onClick={searchLocation}>
                        <i className="bi bi-search" />
                    </button>
                </form>

                {(data.length == undefined && !loading && !error) ?
                    <WeatherInfo data={data} />
                    : ""
                }

                {/* errro */}
                {error && <Error />}

                {/* {loading} */}
                {loading && <Loading />}

                {/* {isOnline} */}
                {!isOnline && <Offline />}
            </div>
        </main >
    )
}

export default Home