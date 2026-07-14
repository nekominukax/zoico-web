'use client'
import React, {useState, useEffect, useRef} from 'react'

import HTMLFlipBook from "react-pageflip";
import Link from "next/link"

export default function Book() {
  const [isMobile, setIsMobile] = useState(false)
const [bookScale, setBookScale] = useState(1)
const [viewportReady, setViewportReady] = useState(false)
  

useEffect(() => {
  const updateBookSize = () => {
    const mobile = window.innerWidth <= 768

    const pageWidth = mobile ? 320 : 500
    const pageHeight = mobile ? 560 : 700

    /*
      En móvil hay una página visible.
      En ordenador pueden verse dos páginas juntas.
    */
    const visibleBookWidth = mobile
      ? pageWidth
      : pageWidth * 2

    const horizontalSpace = mobile ? 24 : 100
    const verticalSpace = mobile ? 24 : 60

    const widthScale =
      (window.innerWidth - horizontalSpace) / visibleBookWidth

    const heightScale =
      (window.innerHeight - verticalSpace) / pageHeight

    const nextScale = Math.min(widthScale, heightScale, 1)

    setIsMobile(mobile)
    setBookScale(nextScale)
    setViewportReady(true)
  }

  updateBookSize()

  window.addEventListener("resize", updateBookSize)

  return () => {
    window.removeEventListener("resize", updateBookSize)
  }
}, [])



  const pageSound = useRef(null)

  useEffect(() => {

    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"

    pageSound.current = new Audio("/hoja.wav")
    pageSound.current.volume = 0.3

    return () => {
      document.body.style.overflow = "auto"
      document.documentElement.style.overflow = "auto"
    }

  }, [])

  function playPageSound() {
    if (!pageSound.current) return

    pageSound.current.currentTime = 0
    pageSound.current.play()
  }
    const InstruccionesData =[
      
      {
      id: "001",
      name: "Objetive",
      description: "The objective is to complete prehistoric ecosystems to become the player with the most victory points. Victory points are earned by placing prehistoric animals on environments where they can survive.",
      nombre: "Game set up",
      description21: "1.-Set aside all the ocean cards. Each player takes one and places it face up in front of them. This area will be considered their continent. The remaining ocean cards are left out of the game",
      imagen0:<img src="/Oceano1.jpg" style={{width:'23%',height:'auto', float: 'right', rotate:'16deg' }}/>,
      description22: "2.-With 2 or 3 players, also remove one swamp, forest, plains, and desert card from the game.",
      //imagen:<img src="/modoAvanzado.png" style={{width:'80%',height:'auto'}}/>,
      description23: "3.-Shuffle the remaining deck and deal 7 cards to each player." ,
      //description24:<p style={{ marginTop: '10px', marginBottom: '10px',paddingLeft: '30px' }}>  2 jugadores - 22 cartas a cada uno</p>,
      //description25:<p style={{ marginTop: '10px', marginBottom: '10px',paddingLeft: '30px' }}>  3 jugadores - 20 cartas a cada uno</p>,
      //description26:<p style={{ marginTop: '10px', marginBottom: '10px',paddingLeft: '30px' }}>  4 jugadores - 18 cartas a cada uno</p>,
      //description27:<p style={{ marginTop: '10px', marginBottom: '10px',paddingLeft: '30px' }}>  5 jugadores - 16 cartas a cada uno</p>,
      //description28:<p style={{ marginTop: '10px', marginBottom: '10px',paddingLeft: '30px' }}>  6 jugadores - 14 cartas a cada uno</p>,
      description29: "4.-Determine who will start as the leader and give them the leader token. This can be decided at random, or it can be the last player to have seen a fossil.",
      
    },
    {
      id: "002",
      name: "How to play?",
      description: "Each turn proceeds as follows: ", 
      description1:<p style={{ marginTop: '20px', marginBottom: '20px',paddingLeft: '30px' }}> ● Each player draws a new card from the deck.</p>,
      description2:<p style={{ marginTop: '20px', marginBottom: '20px',paddingLeft: '30px' }}> ● All players choose a card from their hand and place it face down on their continent.</p>,
      description3:<p style={{ marginTop: '20px', marginBottom: '20px',paddingLeft: '30px' }}> ● Once everyone has played a card, the leader player reveals their card and resolves all its effects. The other players then do the same in clockwise order. </p>,
      description4:<p style={{ marginTop: '20px', marginBottom: '20px',paddingLeft: '30px' }}> ● Finally, all players pass their hand to the player on their left.</p>,
      description5:"If a player attempts to play a card for which they do not meet the requirements (for example, a player plays an animal but does not have an environment where that animal can be played), that card is automatically discarded.",
      
      nombre: "End of game",
      description21: "The game ends when a player runs out of cards, or when someone plays a “Sapience” card on an intelligent animal.",
      imagen1:<img src="/Sapiencia.png" style={{width:'80%',height:'auto', paddingLeft: '20%'}}/>,
      description22: "When the game ends, each player counts their points, and the player with the most victory points wins.",
    },
    {
      id: "003",
      name: "Environments",
      description: "Environments do not require any other cards to be played. They are placed on a player’s continent and allow that player to play animals on them.",
      imagen2:<img src="/enviroment.png" style={{width:'85%',height:'auto', paddingLeft: '14%'}}/>,
      description1: "Each environment has different food sources indicated by icons at the bottom.",
      imagen3:<img src="/espacios.png" style={{width:'70%',height:'auto',paddingLeft: '30%',transform:'translateY(-10px)'}}/>,
      imagen4:<img src="/PlaktonYPlanta.png" style={{float:'right',width:'25%',height:'auto',paddingTop: '50px'}}/>,
      description2: "These food sources can be plankton or plants.",
      description3: "An environment allows as many planktivorous ",
      description4: "animals to be played on it as the number of plankton icons it has, and as many herbivorous animals as the number of plant icons it has.",
      nombre: "Animals",
      description21: "At the end of the game, each animal will give you a certain number of victory points, as shown on the star icon in the upper-left corner.",
      imagen5:<img src="/VictoryPoints.png" style={{width:'80%',height:'auto',paddingLeft: '35%'}}/>,
    },
    {
      id: "004",
      name: "",
      description: "Each animal has specific environments where it can be played, indicated in the upper-right corner of the card. The first icon, the largest one, indicates its favorite environment. If an animal is in its favorite environment, the points it awards are doubled at the end of the game. When you play an animal, place it on the environment where you played it.",
      imagen6:<img src="/PlayableEnviroments.png" style={{width:'80%',height:'auto',paddingLeft: '20%',transform:'translateY(-10px)'}}/>,
      description1: "It also has a specific diet, indicated by an icon in the lower-left corner of the card. Depending on its diet, it will have an additional requirement that must be met in its environment in order to be played. The following diets exist:",
      imagen7:<img src="/plakton.jpg" style={{float:'right',width:'12%',height:'auto', border:'2px solid #555'}}/>,
      description2:<p style={{ marginTop: '10px', marginBottom: '15px',paddingLeft: '10px' }}> ● Planktivores: Planktivores: They require that there are available plankton icons in the environment where they are played. </p>,
      imagen8:<img src="/planta.jpg" style={{float:'right',width:'12%',height:'auto', border:'2px solid #555'}}/>,
      description3:<p style={{ marginTop: '10px', marginBottom: '30px',paddingLeft: '10px' }}> ● Herbivores: They require that there are available plant icons in the environment where they are played. </p>,
      imagen9:<img src="/carne.jpg" style={{float:'right',width:'12%',height:'auto', border:'2px solid #555'}}/>,
      description4:<p style={{ marginTop: '10px',paddingLeft: '10px' }}> ● Carnivores: A carnivore can only be placed on top of another animal that has the same strength as it does (icon in the lower right corner). It can also be played on top of several animals that have less strength but their combined strength must be equal to the carnivore They cannot be placed on top of other carnivores. No animal can be used to feed more than one carnivore at the same time. </p>,
      imagen10:<img src="/fuerza.png" style={{width:'68%',height:'auto',paddingLeft: '25%'}}/>,

      

    },
    {
      id: "005",
      name: "",
      description: "If an animal has more than one diet, (an animal with both the herbivore and carnivore icons) can be used as either a herbivore or a carnivore.",
      imagen11:<img src="/omnivoro.png" style={{width:'70%',height:'auto', paddingLeft: '25%'}}/>,
      description1: "Some animals have special abilities. These are indicated by icons in the upper-left corner, below the victory points.",
      imagen12:<img src="/Wings.png" style={{float:'left',width:'20%',height:'auto'}}/>,
      description2:(
      <> <strong>Flying</strong>: Has an icon with wings. You can move them to a different environment at any time. The new environment has to be a playable environment for that animal and also, have food available of its specific diet. You can also place them in environments that does not belong to you.",
      </>),
      imagen13:<img src="/intelligence.png" style={{float:'right',width:'15%',height:'auto'}}/>,
      description3: (
        <><strong>Intelligent</strong>: Has a brain icon. You can play the Sapience card on them, which automatically ends the round and awards 50 points to the player who uses it.,
        </>),
      
      nombre:"Special cards",
      description21: (
        <><strong>Migration</strong>: Allows you to move an animal from another player's continent to yours. Must be placed on an environment where that animal can live (including food.),
        </>
      ),
      description22:" You can also place this card on an animal on your continent. Whenever you wish, you may move this animal from its current habitat to a different one, (that  environment must be one of its playable environments  with enough food of its specific diet). After moving the animal, the Migration card is discarded.  It cannot be used on an animal that serves as food for a carnivorous animal.",
      imagen14:<img src="/migracion.png" style={{width:'70%',height:'auto', paddingLeft: '15%'}}/>,
    },
    {
      id: "006",
      name: "",
      description: (
        <><strong>Extinction</strong>: Causes an animal on any player's continent to be discarded. It cannot be used on an animal that serves as food for a carnivorous animal. 
        </>
      ),
      imagen15:<img src="/extincion.png" style={{width:'67%', paddingLeft: '25%'}}/>,
      description1: (
        <><strong>Survivor</strong>: : Place this on an animal on your continent to protect it from extinction. When someone uses an Extinction card on an animal with a Survivor card, the Survivor card is discarded instead of the animal card. 
        </>
      ),
      imagen16:<img src="/superviviente.png" style={{width:'67%', paddingLeft: '15%'}}/>,
      description2: (
        <span style={{
    position:'relative',
  }}><strong>Extra Plants</strong>: These cards add a plant to an environment, allowing that environment to support one additional herbivore. Each plant can only live in specific environments. The extra plants included are the ginkgo (for the swamp, forest, and plains) and the cycad (for the plains or desert).  
        </span>
      ),
      imagen17:<img src="/Extra.png" style={{width:'70%', paddingLeft: '25%'}}/>,
      description3: (
        <span style={{
    position:'relative',
  }}><strong>Sapience</strong>: If a player has an intelligent animal on their continent, using the Sapience card will earn them 50 points and the game will end instantly. 
  
        </span>
      ),
      imagen18:<img src="/Sapience.png" style={{width:'70%', paddingLeft: '25%', }}/>,
    },
    {
      id: "007",
      name: "",
      imagen19:<img src="/resumen.png" style={{width:'100%',paddingTop: '5%' }}/>,
      imagen20:<img src="/resumen2.png" style={{width:'100%', paddingTop: '15%' }}/>,
    }
  ];
  const InstruccionesMobileData = [
  {
    id:"008",
    name: "Objetive",
      description: "The objective is to complete prehistoric ecosystems to become the player with the most victory points. Victory points are earned by placing prehistoric animals on environments where they can survive.",
      nombre: "Game set up",
      description21: "1.-Set aside all the ocean cards. Each player takes one and places it face up in front of them. This area will be considered their continent. The remaining ocean cards are left out of the game",
      imagen0:<img src="/Oceano1.jpg" style={{width:'23%',height:'auto', float: 'right', rotate:'16deg' }}/>,
      description22: "2.-With 2 or 3 players, also remove one swamp, forest, plains, and desert card from the game.",
      //imagen:<img src="/modoAvanzado.png" style={{width:'80%',height:'auto'}}/>,
      description23: "3.-Shuffle the remaining deck and deal 7 cards to each player." ,
      //description24:<p style={{ marginTop: '10px', marginBottom: '10px',paddingLeft: '30px' }}>  2 jugadores - 22 cartas a cada uno</p>,
      //description25:<p style={{ marginTop: '10px', marginBottom: '10px',paddingLeft: '30px' }}>  3 jugadores - 20 cartas a cada uno</p>,
      //description26:<p style={{ marginTop: '10px', marginBottom: '10px',paddingLeft: '30px' }}>  4 jugadores - 18 cartas a cada uno</p>,
      //description27:<p style={{ marginTop: '10px', marginBottom: '10px',paddingLeft: '30px' }}>  5 jugadores - 16 cartas a cada uno</p>,
      //description28:<p style={{ marginTop: '10px', marginBottom: '10px',paddingLeft: '30px' }}>  6 jugadores - 14 cartas a cada uno</p>,
      description29: "4.-Determine who will start as the leader and give them the leader token. This can be decided at random, or it can be the last player to have seen a fossil.",
  },
  {
    id: "009",
    name: "How to play?",
      description: "Each turn proceeds as follows: ", 
      description1:<p style={{ marginTop: '20px', marginBottom: '20px',paddingLeft: '30px' }}> ● Each player draws a new card from the deck.</p>,
      description2:<p style={{ marginTop: '20px', marginBottom: '20px',paddingLeft: '30px' }}> ● All players choose a card from their hand and place it face down on their continent.</p>,
      description3:<p style={{ marginTop: '20px', marginBottom: '20px',paddingLeft: '30px' }}> ● Once everyone has played a card, the leader player reveals their card and resolves all its effects. The other players then do the same in clockwise order. </p>,
      description4:<p style={{ marginTop: '20px', marginBottom: '20px',paddingLeft: '30px' }}> ● Finally, all players pass their hand to the player on their left.</p>,
      description5:"If a player attempts to play a card for which they do not meet the requirements (for example, a player plays an animal but does not have an environment where that animal can be played), that card is automatically discarded.",
      
    },
    {
    id: "010",
    name: "End of game",
      description: "The game ends when a player runs out of cards, or when someone plays a “Sapience” card on an intelligent animal.",
      imagen2:<img src="/sapiencia.png" style={{width:'80%',height:'auto', paddingLeft: '20%'}}/>,
      description1: "When the game ends, each player counts their points, and the player with the most victory points wins.",

    nombre: "Environments",
      description21: "Environments do not require any other cards to be played. They are placed on a player’s continent and allow that player to play animals on them.",
      imagen1:<img src="/enviroment.png" style={{width:'85%',height:'auto', paddingLeft: '14%'}}/>,
      description22: "Each environment has different food sources indicated by icons at the bottom.",
      imagen14:<img src="/espacios.png" style={{width:'70%',height:'auto',paddingLeft: '30%'}}/>,
    },
    {
      id: "011",
      name:"",
      imagen4:<img src="/PlaktonYPlanta.png" style={{float:'right',width:'25%',height:'auto',paddingTop: '50px'}}/>,
      description2: "These food sources can be plankton or plants.",
      description3: "An environment allows as many planktivorous ",
      description4: "animals to be played on it as the number of plankton icons it has, and as many herbivorous animals as the number of plant icons it has.",
      nombre: "Animals",
      description21: "At the end of the game, each animal will give you a certain number of victory points, as shown on the star icon in the upper-left corner.",
      imagen1:<img src="/VictoryPoints.png" style={{width:'100%',height:'auto',paddingLeft: '35%'}}/>,
      description22: "Each animal has specific environments where it can be played, indicated in the upper-right corner of the card. ",
      imagen14:<img src="/PlayableEnviroments.png" style={{width:'100%',height:'auto',paddingLeft: '20%'}}/>,
    },
    {
      id:"012",
      name:"",
      description: "The first icon, the largest one, indicates its favorite environment. If an animal is in its favorite environment, the points it awards are doubled at the end of the game. When you play an animal, place it on the environment where you played it.",
      description1: "It also has a specific diet, indicated by an icon in the lower-left corner of the card. Depending on its diet, it will have an additional requirement that must be met in its environment in order to be played. The following diets exist:",
      imagen7:<img src="/plakton.jpg" style={{float:'right',width:'20%',height:'auto', border:'2px solid #555'}}/>,
      description2:<p style={{ marginTop: '10px', marginBottom: '15px',paddingLeft: '10px' }}> ● Planktivores: Planktivores: They require that there are available plankton icons in the environment where they are played. </p>,
      imagen8:<img src="/planta.jpg" style={{float:'right',width:'20%',height:'auto', border:'2px solid #555'}}/>,
      description3:<p style={{ marginTop: '10px', marginBottom: '30px',paddingLeft: '10px' }}> ● Herbivores: They require that there are available plant icons in the environment where they are played. </p>,
      

    },
    {
      id:"013",
      name:"",
      imagen2:<img src="/carne.jpg" style={{float:'right',width:'20%',height:'auto', border:'2px solid #555'}}/>,
      description1:<p style={{ marginTop: '10px',paddingLeft: '10px' }}> ● Carnivores: A carnivore can only be placed on top of another animal that has the same strength as it does (icon in the lower right corner). It can also be played on top of several animals that have less strength but their combined strength must be equal to the carnivore They cannot be placed on top of other carnivores. No animal can be used to feed more than one carnivore at the same time. </p>,
      imagen3:<img src="/fuerza.png" style={{width:'80%',height:'auto'}}/>,
      description2: "If an animal has more than one diet, (an animal with both the herbivore and carnivore icons) can be used as either a herbivore or a carnivore.",
      imagen8:<img src="/omnivoro.png" style={{width:'100%',height:'auto', paddingLeft: '25%'}}/>,
      description4: "Some animals have special abilities. These are indicated by icons in the upper-left corner, below the victory points.",
      
    },
    {
      id:"014",
      name:"",
            imagen12:<img src="/Wings.png" style={{float:'left',width:'20%',height:'auto'}}/>,
      description2:(
      <> <strong>Flying</strong>: Has an icon with wings. You can move them to a different environment at any time. The new environment has to be a playable environment for that animal and also, have food available of its specific diet. You can also place them in environments that does not belong to you.",
      </>),
      imagen13:<img src="/intelligence.png" style={{float:'right',width:'15%',height:'auto'}}/>,
      description3: (
        <><strong>Intelligent</strong>: Has a brain icon. You can play the Sapience card on them, which automatically ends the round and awards 50 points to the player who uses it.,
        </>),
      
      nombre:"Special cards",
      description21: (
        <><strong>Migration</strong>: Allows you to move an animal from another player's continent to yours. Must be placed on an environment where that animal can live (including food.),
        </>
      ),
      imagen14:<img src="/migracion.png" style={{width:'90%',height:'auto'}}/>,

    },
    {
      id:"015",
      name:"",
      description:" You can also place this card on an animal on your continent. Whenever you wish, you may move this animal from its current habitat to a different one, (that  environment must be one of its playable environments  with enough food of its specific diet). After moving the animal, the Migration card is discarded.  It cannot be used on an animal that serves as food for a carnivorous animal.",
      description1: (
        <><strong>Extinction</strong>: Causes an animal on any player's continent to be discarded. It cannot be used on an animal that serves as food for a carnivorous animal. 
        </>
      ),
      imagen16:<img src="/extincion.png" style={{width:'90%', paddingLeft: '25%'}}/>,
      description2: (
        <><strong>Survivor</strong>: : Place this on an animal on your continent to protect it from extinction. When someone uses an Extinction card on an animal with a Survivor card, the Survivor card is discarded instead of the animal card. 
        </>
      ),
      imagen17:<img src="/superviviente.png" style={{width:'90%', paddingLeft: '15%'}}/>,

    },
    {
      id:"016",
      name:"",
      description2: (
        <span style={{
    position:'relative',
  }}><strong>Extra Plants</strong>: These cards add a plant to an environment, allowing that environment to support one additional herbivore. Each plant can only live in specific environments. The extra plants included are the ginkgo (for the swamp, forest, and plains) and the cycad (for the plains or desert).  
        </span>
      ),
      imagen17:<img src="/Extra.png" style={{width:'80%', paddingLeft: '15%'}}/>,
      description3: (
        <span style={{
    position:'relative',
  }}><strong>Sapience</strong>: If a player has an intelligent animal on their continent, using the Sapience card will earn them 50 points and the game will end instantly. 
  
        </span>
      ),
      imagen18:<img src="/Sapience.png" style={{width:'90%', paddingLeft: '15%', }}/>,
    },

    {
      id: "017",
      name: "",
      imagen19:<img src="/resumen.png" style={{width:'100%',paddingTop: '5%' }}/>,
      name:"Reminder",
      description: (<>•Animal in their <strong>Favorite environment</strong> = x2 <strong>Victory points.</strong></>),
      description1: (<>•The sum of the <strong>herbivore/s strength</strong> must be equal to the <strong>carnivore</strong> whom they feed.</>),
      description2: (<>•You can choose one of the diets from the animals that have <strong>mixed diets.</strong></>),
      description3: (<span style={{
        position:'relative',
        paddingTop:'10%',
    
  }}><><strong>Conditions for an animal to be played on an environment</strong></></span>),
      description4: (<>•The <strong>environment</strong> must have available <strong>food</strong> of their specific <strong>diet.</strong></>),
      description5: (<>•The <strong>animal</strong> must have that <strong>environment</strong> as one of their <strong>playable environments.</strong></>),

    },

]
  const currentData = isMobile
  ? InstruccionesMobileData
  : InstruccionesData
  useEffect(() => {
  console.log("ANCHO:", window.innerWidth)
}, [])
console.log("isMobile:", isMobile)
if (!viewportReady) {
  return null
}
     return (
<>

    {/* BOTÓN FUERA DEL LIBRO */}
    <div className="retorno">
      <Link href="/">
        <img src="/atras.png"
    className="retorno" />
      </Link>
    </div>
    
    <div
  className="bookViewport"
  style={{
    width: `${
      (isMobile ? 320 : 1000) * bookScale
    }px`,
    height: `${
      (isMobile ? 560 : 700) * bookScale
    }px`
  }}
>
  <div
    className="bookScaler"
    style={{
      width: isMobile ? "320px" : "1000px",
      height: isMobile ? "560px" : "700px",
      transform: `scale(${bookScale})`
    }}
  >
    <HTMLFlipBook
      key={isMobile ? "mobile-book" : "desktop-book"}
      width={isMobile ? 320 : 500}
      height={isMobile ? 560 : 700}
      maxShadowOpacity={0.1}
      drawShadow={true}
      showCover={true}
      size="fixed"
      onFlip={playPageSound}
    >
   
      
        <div className="page-content cover">
          
      
      </div>

      {currentData.map((instrucciones) => (
        <div className="page" key={instrucciones.id}>
          <div
                  className="instrucciones-imagen">{instrucciones.imagen19}{instrucciones.imagen20}
                  </div>
          {instrucciones.id!=="007"&& (
          <div className="textCard">
            <div className="instrucciones-container">
              
              <div className="instrucciones-info">
                <h2 className="instrucciones-name">{instrucciones.name}</h2>
                
                <div className="instrucciones-description">{instrucciones.description}
                </div>
                 <div 
                  className="instrucciones-imagen">{instrucciones.imagen6}{instrucciones.imagen11}{instrucciones.imagen15}
                  </div>
                <div>
                  <p
                  className="instrucciones-imagen">{instrucciones.imagen2}</p>
                  </div>
                <div className="instrucciones-description">
  {instrucciones.description1}
</div>
                <div
                  
                  className="instrucciones-imagen">{instrucciones.imagen3}{instrucciones.imagen4}{instrucciones.imagen7}{instrucciones.imagen12}{instrucciones.imagen16}
                  </div>
                 
                <div
                   className="instrucciones-description">{instrucciones.description2}
                </div>
                <div
                  className="instrucciones-imagen">{instrucciones.imagen8}{instrucciones.imagen13}{instrucciones.imagen17}
                  </div>
                <div className="instrucciones-description">{instrucciones.description3}
                </div>
                <div
                  className="instrucciones-imagen">{instrucciones.imagen9}{instrucciones.imagen18}
                  </div>
                <div className="instrucciones-description">{instrucciones.description4}
                </div>
                <div
                  className="instrucciones-imagen">{instrucciones.imagen10}
                  </div>
                <div className="instrucciones-description">{instrucciones.description5}
                </div>
                <div className="instrucciones-description">{instrucciones.description6}
                </div>
                <div className="instrucciones-description">{instrucciones.description7}
                </div>
                <div className="instrucciones-description">{instrucciones.description8} </div>
              </div>
            </div>
            </div>
          )}
            
            {instrucciones.id!=="004"&& instrucciones.id!=="006"&& instrucciones.id!=="007"&& instrucciones.id!=="017"&& instrucciones.id!=="016"&& instrucciones.id!=="015"&& instrucciones.id!=="013"&& instrucciones.id!=="012"&& instrucciones.id!=="009"&&(
            <div className="textCard"key={instrucciones.id}>
            
            <div className="instrucciones2-container">
              
              <div className="instrucciones2-info">
                <h2 className="instrucciones2-name">{instrucciones.nombre}{instrucciones.imagen0} </h2>
                
                <div>
                   {instrucciones.description21}

                </div>
                <div
                  className="instrucciones-imagen">{instrucciones.imagen5}
                  </div>
                <div
                  className="instrucciones-imagen">{instrucciones.imagen1}
                  </div>
                <div className="instrucciones-description">{instrucciones.description22}
                </div>
                <div
                  className="instrucciones-imagen">{instrucciones.imagen14}
                  </div>
                <div
                  className="instrucciones-imagen">{instrucciones.imagen}
                  </div>
                <div className="instrucciones-description">{instrucciones.description23}
                </div>
                <div>
                   {instrucciones.description24}
                </div>
                <div className="instrucciones-description">{instrucciones.description25}
                </div>
                <div className="instrucciones-description">{instrucciones.description26}
                </div>
                <div className="instrucciones-description">{instrucciones.description27}
                </div>
                <div className="instrucciones-description">{instrucciones.description28}
                  </div>
                <div className="instrucciones-description1">{instrucciones.description29} 
                  </div>
              </div>
            </div>
            </div>)}
          </div>
        
      ))}
    </HTMLFlipBook>
      </div>
</div>
    </>
  );
}













