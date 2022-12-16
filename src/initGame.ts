import sonido from './assets/sonidoIntro.mp3'
export const initGame =()=>{  
    const screenGreen = document.querySelector(".screenGreen")
    const header = document.querySelector(".header4") as Node
    //creo los elementos 
    if(header){
        screenGreen?.removeChild(header)
        const containerElement = document.createElement("div")
        const elementAudio = document.createElement("audio")
        const elementSource = document.createElement("source")
        const containerImg = document.createElement("div")
        const elementImg  = document.createElement("img")
        const elementH1  = document.createElement("h1")
        const elementH3  = document.createElement("h3")
    
        //creo atributos para el elemento audio
        const atributeAutoPLay = document.createAttribute("autoPlay")
        const atributeLoop = document.createAttribute("loop")
    
        //les coloco sus respectivas class o atributos
        containerElement.setAttribute("class","containerIntroGame")
        elementAudio.setAttributeNode(atributeAutoPLay)
        elementAudio.setAttributeNode(atributeLoop)
        elementSource.setAttribute("src",sonido)   
        containerImg.setAttribute("class","containerImg")
        elementImg.setAttribute("class","img")
        elementImg.setAttribute("src","https://i.pinimg.com/originals/47/04/24/470424ded5acade0464f077f007f269b.png")
    
        //coloco valores a los atributos
        elementH1.innerHTML="Snake Game 2.0"
        elementH3.innerHTML="PRESS START"
        // colocos los elementos en un elemento padre
        containerImg.appendChild(elementImg)
        elementAudio.appendChild(elementSource)
        containerElement.appendChild(elementAudio)
        containerElement.appendChild(containerImg)
        containerElement.appendChild(elementH1)
        containerElement.appendChild(elementH3)
        screenGreen?.appendChild(containerElement)
    }
}