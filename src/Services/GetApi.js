import axios from "axios"
const GetApi = async (city) => {
    const apiKey = "b92f910aff9fbee06a0ff41f8ff93942"
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    return await axios.get(baseURL).then(response => response)
}

export default GetApi