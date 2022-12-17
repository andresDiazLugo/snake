import imgLives from './assets/heart.png'
import {initGameSnake} from './moveSnake'


export const screenGame = ()=>{
    const containerElement = document.querySelector(".containerIntroGame")
    const screenGreen = document.querySelector(".screenGreen")
    // const elementGameOver:Node = document.querySelector("gameOver")as Node

    const array = [1,2,3]
    // const subGrid = []
    if(containerElement){
        screenGreen?.removeChild(containerElement)
        // if(elementGameOver){

        //     screenGreen?.removeChild(elementGameOver)
        // }
        // // screenGreen?.removeChild()
        //creo los elementos 
        const containerInfoStateSnake = document.createElement("div")
        containerInfoStateSnake.setAttribute("class","containerInfoSnake")
        const parrafoScore = document.createElement("p")
        const elementLives = document.createElement("div")
        const elementSpan = document.createElement("span")
        const grid = document.createElement("div")
        grid.setAttribute("class","grid")

        for(let i = 0; i < 324 ; i++){
            grid.appendChild(document.createElement("section"))
        }

        elementLives.setAttribute("class","elementLives")
        parrafoScore.setAttribute("class","parrafo")
        elementSpan.setAttribute("class","contador")
        parrafoScore.innerHTML="score :"
        elementSpan.innerHTML="0"
        const elemtsHeartsLivesSnake = array.map(_e=>document.createElement("img"))
        elemtsHeartsLivesSnake.forEach(e=>e.setAttribute("src",imgLives))
        elemtsHeartsLivesSnake.forEach(e=>e.setAttribute("class","heart"))
        elemtsHeartsLivesSnake.forEach(e=>elementLives.appendChild(e))
        // elemtsHeartsLivesSnake.forEach((element:Node) => {
        //     elementLives.appendChild(element)
        // });
        
        // agrego elementos a un contenedor padre
        parrafoScore.appendChild(elementSpan)
        containerInfoStateSnake.appendChild(parrafoScore)
        containerInfoStateSnake.appendChild(elementLives)
        screenGreen?.appendChild(containerInfoStateSnake)
        screenGreen?.appendChild(grid)
        initGameSnake()
    }
}