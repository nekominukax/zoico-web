'use client'


import Link from "next/link"
import { useState, useEffect, useRef } from "react"
export default function Home() {
  

  const [boxFrame, setBoxFrame] = useState(1)
  const [boxOpen, setBoxOpen] = useState(false)
  const sonido = useRef<HTMLAudioElement | null>(null)
  const sonido2 = useRef<HTMLAudioElement | null>(null)
  const sonido3 = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
  sonido.current = new Audio("/PaperTwist.wav")
  sonido2.current = new Audio("/TearinPaper.wav")
  sonido3.current = new Audio("/card-hover.wav")

  if (sonido.current) sonido.current.volume = 0.2
  if (sonido.current) sonido2.current.volume = 0.2
  if (sonido.current) sonido3.current.volume = 0.2
}, [])
const playHover = () => {
  if (!sonido3.current) return
  sonido3.current.currentTime = 0
  sonido3.current.play()
}

  const totalBoxFrames = 8
  
  function openBox() {
    if(boxOpen) return
    sonido.current?.play()
    sonido2.current?.play()

    let frame = 1

    const intervalo = setInterval(() => {

      frame++
      setBoxFrame(frame)

      if (frame >= totalBoxFrames) {
        clearInterval(intervalo)
        setBoxOpen(true)
      }

    }, 60)


  }

  return (

   <main className="homePage">
      

    <div className="scene">

    {/* CAJA */}
      <img
        className="box"
        src={`/Caja_0${boxFrame}.png`}
        onClick={!boxOpen ? openBox : undefined}
      />

        {/* CARTAS */}

        

          <div className={`cards ${boxOpen ? "cardsOpen" : ""}`}>

            <Link href="/game" className="card card1"onMouseEnter={playHover}>
              
              <img src="/HowToPlay.png"/>
            </Link>

            <Link href="/about" className="card card2"onMouseEnter={playHover}>
              <img src="/aboutUS.png"/>
            </Link>

            <Link href="/art" className="card card3"onMouseEnter={playHover}>
              <img src="/cards.png"/>
            </Link>

            

          </div>
          </div>
<div className="otherProjects">

  <h2>Other projects from Miguel Andújar</h2>

  <a
    href="https://store.steampowered.com/app/4106420/Eon_of_Life/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/bannerProyecto.png"
      className="projectBanner desktopBanner"
      alt="Proyecto relacionado"
    />
    <img
      src="/bannerProyectoMovil.png"
      className="projectBanner mobileBanner"
      alt="Proyecto relacionado"
    />
  </a>

</div>
        
    </main>
  )
}

