"use client"

import { useState, useEffect } from "react"
import { quinceMainData } from "./sections/data/main-data"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const { event } = quinceMainData;
  const { date } = event;

  useEffect(() => {
    console.log("Event Date:", date.isoDate)
    const targetDate = new Date(date.isoDate).getTime()
    //console.log("Target Date:", targetDate)
    //console.log("Target Date (Formatted):", new Date(targetDate).toString())

    const timer = setInterval(() => {
      const now = new Date().getTime()
      //console.log("Current Time:", now)
      const difference = targetDate - now
      //console.log("Time Difference:", difference)

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center items-center gap-4 py-8">
      <div className="text-center">
        <div className="text-4xl font-bold text-primary">{timeLeft.days}</div>
        <div className="text-sm text-muted-foreground">DÍAS</div>
      </div>
      <div className="text-2xl text-primary">:</div>
      <div className="text-center">
        <div className="text-4xl font-bold text-primary">{timeLeft.hours}</div>
        <div className="text-sm text-muted-foreground">HORAS</div>
      </div>
      <div className="text-2xl text-primary">:</div>
      <div className="text-center">
        <div className="text-4xl font-bold text-primary">{timeLeft.minutes}</div>
        <div className="text-sm text-muted-foreground">MINUTOS</div>
      </div>
      <div className="text-2xl text-primary">:</div>
      <div className="text-center">
        <div className="text-4xl font-bold text-primary">{timeLeft.seconds}</div>
        <div className="text-sm text-muted-foreground">SEGUNDOS</div>
      </div>
    </div>
  )
}
