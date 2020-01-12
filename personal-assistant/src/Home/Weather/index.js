import React, { useEffect, useState } from 'react'

const Weather = () => {
  const [temp, setTemp] = useState()

  useEffect(() => {
    const fetchData = async (lat, lon) => {
      console.log('inside!!')
      const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=4e0b7ac041f66606c82e3b212418df7c`)
      const data = await res.json()
      console.log(lat, lon)
    }

    navigator.geolocation.getCurrentPosition(position => {
      fetchData(position.coords.latitude, position.coords.longitude)
    })
  }, [])

  return (
    <p>
        Today's weather:
      {' '}
      {temp}
    </p>
  )
}

export default Weather
