'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
export default function About() {

  const [rotate, setRotate] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    const screenCenter = window.innerWidth / 2
    const distance = e.clientX - screenCenter

    const maxRotation = 10

    let rotation = -distance / 50 // ajusta divisor para suavidad
    rotation = Math.max(-maxRotation, Math.min(maxRotation, rotation))

    setRotate(rotation)
  }

  window.addEventListener("mousemove", handleMouseMove)
  return () => window.removeEventListener("mousemove", handleMouseMove)
}, [])
useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768)
  }

  checkMobile()

  window.addEventListener("resize", checkMobile)

  return () => window.removeEventListener("resize", checkMobile)
}, [])
if (isMobile) {
  return (
    <main className="aboutPage">

     <div className="returnContainer">
  <Link href="/">
    <img
      src="/atras.png"
      className="returnIcon"
      alt="Back"
    />
  </Link>
</div>

      <div
        className={`aboutMobileCard ${showInfo ? "open" : ""}`}
        onClick={() => setShowInfo(!showInfo)}
      >

        {!showInfo ? (

          <img
            src="/aboutUS.png"
            className="aboutCard"
          />

        ) : (

          <div className="aboutBack">

            <h2>Alicia de Aragón</h2>

            <p>Artist and graphic designer of Zoico and the website.</p>
            <br />

            <a
              href="https://www.instagram.com/minukax/"
              target="_blank"
              className="instagramLink"
            >
              <img src="/instagram.png" className="instagramIcon" />
              <span className="instagramTag">@minukax</span>
            </a>

            <br />
            <hr className="aboutSeparator" />

            <h2>Miguel Andújar</h2>

            <p>Master mind behind Zoico and mechanic designer.</p>
            <br />

            <a
              href="https://www.linkedin.com/in/miguel-andujar-navarro-games/"
              target="_blank"
              className="linkedinLink"
            >
              <img src="/linkedin.png" className="linkedinIcon" />
              <span className="linkedinTag">
                Miguel Andújar Navarro
              </span>
            </a>

            <br />
            <hr className="aboutSeparator" />

            <h2>Contact</h2>

            <a
              href="mailto:info@zoicogames.com"
              className="emailLink"
            >
              info@zoicogames.com
            </a>

          </div>

        )}

      </div>

    </main>
  )
}
 return (

    <main className="aboutPage">

        <div className="retorno">
<Link href="/">
  <img
    src="/atras.png"
    className="retorno"
  />
</Link>
</div>

      <div className="aboutContainer">

        {/* TARJETA IZQUIERDA */}
<div className="aboutLeftColumn">

        <div className="infoCard">

          <div className="infoHeader">
            {'>'}Alicia de Aragón
          </div>

          <div className="infoContent">
            Artist and graphic designer of Zoico and the website.
              <a
    href="https://www.instagram.com/minukax/"
    target="_blank"
    rel="noopener noreferrer"
    className="instagramLink"
  >
    <img
      src="/instagram.png"
      className="instagramIcon"
      alt="Instagram"
    />
<span className="instagramTag">
    @minukax
    </span>
  </a>

          </div>

        </div>
                <div className="infoCard">

          <div className="infoHeader">
            {'>'}Contact:
          </div>

          <div className="infoContent">
             <a
  href="mailto:info@zoicogames.com"
  className="emailLink"
>
  info@zoicogames.com
</a>
          </div>

        </div>
</div>

        {/* CARTA CENTRAL */}
<img
  style={{
    transform: isMobile ? "none" : `rotateY(${rotate}deg)`
  }}
  src="/aboutUS.png"
  className="aboutCard"
/>
  


        {/* TARJETA DERECHA */}


        <div className="infoCard">

          <div className="infoHeader">
            {'>'}Miguel Andújar
          </div>

          <div className="infoContent">
            Master mind behind Zoico and gameplay designer.
            <a
    href="https://www.linkedin.com/in/miguel-andujar-navarro-games/"
    target="_blank"
    rel="noopener noreferrer"
    className="linkedinLink"
  >
    <img
      src="/linkedin.png"
      className="linkedinIcon"
      alt="linkedin"
    />
<span className="linkedinTag">
    Miguel Andújar Navarro
    
    </span>
    </a>

          </div>
          

        </div>
      </div>

    </main>
  )
}