import React, { useState, useRef, useEffect } from "react"
import Count  from './style'
const CountDown = () => {
  const [countDays, setCountDays] = useState("00")
  const [countHours, setCountHours] = useState("00")
  const [countMinutes, setCountMinutes] = useState("00")
  const [countSeconds, setCountSeconds] = useState("00")

  let interval = useRef()
  const startTimer = ({yearTrget,monthTrget,dayTrget}) => {
    const countdowndate = new Date(`${yearTrget},${monthTrget},${dayTrget},  00:00:00`).getTime()
    interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdowndate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      if (distance < 0) {
        clearInterval(interval.current)
      } else {
        //update Timer
        setCountDays(days)
        setCountHours(hours)
        setCountMinutes(minutes)
        setCountSeconds(seconds)
      }
    }, 1000)
  }

  useEffect(() => {
    let intervalClean = interval.current;
    startTimer({yearTrget:"2021",monthTrget:"08",dayTrget:"31"})
    return () => {
      clearInterval(intervalClean)
    }
  })
  return (
    <Count>
      <Count.Single>
        <Count.Title id="days">{countDays}</Count.Title>
        <Count.Text>Days</Count.Text>
      </Count.Single>
      <Count.Single>
        <Count.Title id="hours">{countHours}</Count.Title>
        <Count.Text>Hours</Count.Text>
      </Count.Single>
      <Count.Single>
        <Count.Title id="minutes">{countMinutes}</Count.Title>
        <Count.Text>Minutes</Count.Text>
      </Count.Single>
      <Count.Single>
        <Count.Title id="seconds">{countSeconds}</Count.Title>
        <Count.Text>Seconds</Count.Text>
      </Count.Single>
    </Count>
  )
}

export default CountDown