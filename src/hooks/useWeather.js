import axios from "axios"
import { useEffect, useState } from "react"

const useWeather = () => {

  const [obj, setObj] = useState()
  const [weather, setWeather] = useState()
  const [forescats, setForescats] = useState()


  useEffect(() => {
    const success = (pos) => {
      const lon = pos.coords.longitude
      const lat = pos.coords.latitude
      setObj({ lat, lon })
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    const api_key = '357a17b062a4d426ffda9f1c704ff186'
    const URL = `api.openweathermap.org/data/2.5/forecast/daily?lat=${obj?.lat}&lon=${obj?.lon}&cnt={1}&appid=${api_key}`
    if (obj !== undefined) {

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${obj?.lat}&lon=${obj?.lon}&appid=${api_key}`


      axios.get(url)
        .then(res => setWeather(res.data))
        .catch(er => console.log(er))


    }
    axios.get(URL)
      .then(res => setForescats(res.data))
      .catch(er => console.log(er))
  }, [obj])


  return { weather }
}

export default useWeather