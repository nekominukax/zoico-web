'use client'

import { useState, useRef, useEffect } from "react"
import Link from "next/link"

export default function Art() {

const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
const [expandedCard, setExpandedCard] = useState<number | null>(null)
const [currentPage, setCurrentPage] = useState(0)
const [clickedDeck, setClickedDeck] = useState<string | null>(null)
const [isMobile, setIsMobile] = useState(false)
const [currentCard, setCurrentCard] = useState(0)
const clickSound = useRef<HTMLAudioElement | null>(null)
const sonido = useRef<HTMLAudioElement | null>(null)
const [viewportReady, setViewportReady] = useState(false)

if (!clickSound.current && typeof Audio !== "undefined") {
  clickSound.current = new Audio("/sounds/TearinPaper.wav")
  if (clickSound.current) clickSound.current.volume = 0.1
  
  //clickSound.current = new Audio("/sounds/PaperTwist.wav")
}
if (!sonido.current && typeof Audio !== "undefined") {
  sonido.current = new Audio("/PaperTwist.wav")
  if (sonido.current) sonido.current.volume = 0.1

}

function selectDeck(category: string){

  if (clickSound.current) {
    clickSound.current.currentTime = 0
    clickSound.current.play()
  }

  setClickedDeck(category)

  setTimeout(() => {
    setClickedDeck(null)
  }, 250)

  setSelectedCategory(category)
  setCurrentPage(0)
  setCurrentCard(0)

}
useEffect(() => {
  const previousBodyOverflow = document.body.style.overflow
  const previousHtmlOverflow = document.documentElement.style.overflow

  document.body.style.overflow = "hidden"
  document.documentElement.style.overflow = "hidden"

  return () => {
    document.body.style.overflow = previousBodyOverflow
    document.documentElement.style.overflow = previousHtmlOverflow
  }
}, [])
useEffect(() => {
  const checkViewport = () => {
    setIsMobile(window.innerWidth <= 768)
    setViewportReady(true)
  }

  checkViewport()

  window.addEventListener("resize", checkViewport)

  return () => {
    window.removeEventListener("resize", checkViewport)
  }
}, [])
const cardSets = {
      dino: [
      "/dinos/card1.jpg",
      "/dinos/card2.jpg",
      "/dinos/card3.jpg",
      "/dinos/card4.jpg",
      "/dinos/card5.jpg",
      "/dinos/card6.jpg",
      "/dinos/card7.jpg",
      "/dinos/card8.jpg",
      "/dinos/card9.jpg",
      "/dinos/card10.jpg",
      "/dinos/card11.jpg",
      "/dinos/card12.jpg",
      "/dinos/card13.jpg",
      "/dinos/card14.jpg",
      "/dinos/card15.jpg",
      "/dinos/card16.jpg",
      "/dinos/card17.jpg",
      "/dinos/card18.jpg",
      "/dinos/card19.jpg",
      "/dinos/card20.jpg",
      "/dinos/card21.jpg",
      "/dinos/card22.jpg",
      "/dinos/card23.jpg",
      "/dinos/card24.jpg",
      "/dinos/card25.jpg",
      "/dinos/card26.jpg",
      "/dinos/card27.jpg",
      "/dinos/card28.jpg",
      "/dinos/card29.jpg",
      "/dinos/card30.jpg",
      "/dinos/card31.jpg",
      "/dinos/card32.jpg",
      "/dinos/card33.jpg",
      "/dinos/card34.jpg",
      "/dinos/card35.jpg",
      "/dinos/card36.jpg",

    ],

    env: [
      "/environments/card1.jpg",
      "/environments/card2.jpg",
      "/environments/card3.jpg",
      "/environments/card4.jpg",
      "/environments/card5.jpg",
    ],

    special: [
      "/special/card1.jpg",
      "/special/card2.jpg",
      "/special/card3.jpg",
      "/special/card4.jpg",
      "/special/card5.jpg",
      "/special/card6.jpg",
    ]
}
const mobileCards = selectedCategory
  ? cardSets[selectedCategory as keyof typeof cardSets]
  : []
const cardsPerPage = 6
const totalPages = selectedCategory
  ? Math.ceil(
      cardSets[selectedCategory as keyof typeof cardSets].length /
      cardsPerPage
    )
  : 0
const visibleCards = selectedCategory

  ? cardSets[selectedCategory as keyof typeof cardSets].slice(
      currentPage * cardsPerPage,
      (currentPage + 1) * cardsPerPage
    )
  : []
  
function handleBack() {

  if (expandedCard !== null) {
    setExpandedCard(null)
    return
  }

  window.location.href = "/"

}
const centerIndex = (visibleCards.length - 1) / 2
if (isMobile) {
  return (
    <main className="artPage artPageMobile">

      <div className="returnContainer">
        <Link href="/">
          <img
            src="/atras.png"
            className="returnIcon"
            alt="Volver"
          />
        </Link>
      </div>

      {selectedCategory && (
        <div className="mobileGallery">

          <img
            src={mobileCards[currentCard]}
            className="mobileCard"
            alt=""
          />

          <div className="mobileControls">

            <button
              disabled={currentCard === 0}
              onClick={() => {
                if (currentCard > 0) {
                  setCurrentCard(currentCard - 1)
                }
              }}
            >
              ◀
            </button>

            <span>
              {currentCard + 1} / {mobileCards.length}
            </span>

            <button
              disabled={currentCard >= mobileCards.length - 1}
              onClick={() => {
                if (currentCard < mobileCards.length - 1) {
                  setCurrentCard(currentCard + 1)
                }
              }}
            >
              ▶
            </button>

          </div>

        </div>
      )}

      <div className="mobileCategories">

        <img
          src="/ui/dinosaurios.png"
          className={`categoryImage ${
            selectedCategory === "dino" ? "activeCategory" : ""
          }`}
          onClick={() => selectDeck("dino")}
          alt="Dinosaurios"
        />

        <img
          src="/ui/environments.png"
          className={`categoryImage ${
            selectedCategory === "env" ? "activeCategory" : ""
          }`}
          onClick={() => selectDeck("env")}
          alt="Environments"
        />

        <img
          src="/ui/especiales.png"
          className={`categoryImage ${
            selectedCategory === "special" ? "activeCategory" : ""
          }`}
          onClick={() => selectDeck("special")}
          alt="Especiales"
        />

      </div>

    </main>
  )
}


if (!viewportReady) {
  return null
}
  return (

    <main className="artPage">

      {/* BOTON VOLVER */}

<div className="returnContainer">
  <Link href="/">
    <img
      src="/atras.png"
      className="returnIcon"
      alt="Volver"
    />
  </Link>
</div>

      

      {/* CATEGORIAS */}

<div className="categories">

  <img
    src="/ui/dinosaurios.png"
    className={`
      categoryImage
      ${selectedCategory === "dino" ? "activeCategory" : ""}
      ${clickedDeck === "dino" ? "deckClicked" : ""}
    `}
    onClick={() => selectDeck("dino")}
  />

  <img
    src="/ui/environments.png"
    className={`
      categoryImage
      ${selectedCategory === "env" ? "activeCategory" : ""}
      ${clickedDeck === "env" ? "deckClicked" : ""}
    `}
    onClick={() => selectDeck("env")}
  />

  <img
    src="/ui/especiales.png"
    className={`
      categoryImage
      ${selectedCategory === "special" ? "activeCategory" : ""}
      ${clickedDeck === "special" ? "deckClicked" : ""}
    `}
    onClick={() => selectDeck("special")}
  />

</div>

     

     

      {/* CARTAS */}

     {selectedCategory && (

  <>

    <div className="fan">

      {visibleCards.map((src, i) => (

  <img
    key={i}
    src={src}
    className="fanCard"
    style={{
      transform: `
        rotate(${(i - centerIndex) * 7}deg)
        translateX(${(i - centerIndex) * 200}px)
        translateY(${Math.abs(i - centerIndex) * -15}px)
      `
    }}
    onClick={(e) => {
      e.stopPropagation()
      setExpandedCard(currentPage * cardsPerPage + i)
    }}
  />

))}

    </div>
    

<div className="pageControls">

  <button
    disabled={currentPage === 0}
    onClick={() => {
      if (clickSound.current) {
  clickSound.current.currentTime = 0
  clickSound.current.volume = 0.1
  clickSound.current.play()
  
}
if (sonido.current) {
  sonido.current.volume = 0.1
  sonido.current.currentTime = 0
  
  sonido.current.play()
  
}
      
      setCurrentPage(Math.max(0, currentPage - 1))
      
    }}
  >
    ◀
  </button>

  <span>
    {currentPage + 1} / {totalPages}
  </span>

  <button
    disabled={currentPage >= totalPages - 1}
    onClick={() => {
      if (clickSound.current) {
  clickSound.current.currentTime = 0
  clickSound.current.volume = 0.1
  clickSound.current.play()
  
}
if (sonido.current) {
  sonido.current.volume = 0.1
  sonido.current.currentTime = 0
  
  sonido.current.play()
  
}
      if (currentPage < totalPages - 1) {
        setCurrentPage(currentPage + 1)
      }
    }}
  >
    ▶
  </button>

</div>

  </>

)}
      {/* CARTA GRANDE */}

      {expandedCard !== null && selectedCategory && (

        <div
          className="overlay"
          onClick={() => setExpandedCard(null)}
        >

          <img
            src={
              cardSets[selectedCategory as keyof typeof cardSets][expandedCard]
            }
            className="bigCard"
          />

        </div>

      )}

    </main>

  )

}