import React from 'react'

//css
import styles from "./home.module.css"

const WeatherInfo = (props) => {
    const { data } = props;

    return (
        <div className={`${styles.info_city_container} shadow`}>
            <div className=''>
                <div className={`${styles.name_vs_temp_box} mb-3 mb-sm-0`}>
                    <div className={`${styles.name_box}`}>
                        <h3 className={`${styles.city_name}`}>
                            {data.name} - {data.sys.country}
                        </h3>
                    </div>
                    <div className={`${styles.temp_box}`}>
                        <span className={`${styles.city_temp}`}>
                            {Number(data.main.temp - 273.15).toFixed(1)} °C
                        </span>
                    </div>
                </div>
                <div className={`${styles.min_vs_max_temp}`}>
                    <div>
                        <span>
                            max
                        </span>
                        <span>
                            {Number(data.main.temp_max - 273.15).toFixed(1)} °C
                        </span>
                    </div>
                    <div>
                        <span>
                            min
                        </span>
                        <span>
                            {Number(data.main.temp_min - 273.15).toFixed(1)} °C
                        </span>
                    </div>
                </div>
            </div>

            <div>
                <div className='mt-1 fw-bold'>
                    {data.weather[0].main}
                </div>
                <div className={`${styles.img_box}`}>
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt="" />
                </div>
                <div className='mb-1 fw-bold'>
                    {data.weather[0].description}
                </div>
            </div>

            <div className={`${styles.last_btns}`}>
                <div>
                    <span>
                        speed
                    </span>
                    <span>
                        {data.wind.speed}
                    </span>
                </div>
                <div>
                    <span>
                        deg
                    </span>
                    <span>
                        {data.wind.deg}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo