import {initGame} from './initGame'
import {screenGame} from './screenGame'
// import {getSection} from './getSection'
export const containerConsole = document.querySelector(".containerConsole")

// const btnUp = document.querySelector(".btnUp")
// const btnDown = document.querySelector(".btnDown")
// const btnLeft = document.querySelector(".btnLeft")
// const btnRight = document.querySelector(".btnRight")

// const btnA = document.querySelector(".btnA")
// const btnB = document.querySelector(".btnB")

const btnStart = document.querySelector(".btnStart")
const btnSelect = document.querySelector(".btnSelect")

//obtener los sub grid
// let blockGrid = document.querySelectorAll("section")
// const bodySnake:number[] = [55,54,53]


//variables que vamos a necesitar
//esta variable la usaremos para poder movernos de casillas
// const movePosition = 18
// let direction = 1

// const paintSnake=()=>{
//     bodySnake.forEach((element) => {
//         blockGrid[element].classList.add('snake')
//     });
// }

// const moveSnake = ()=>{
// // let blockGrid = document.querySelectorAll("section")
//     paintSnake()
//     const finalyBodySnake:number= bodySnake.pop() as number
//     blockGrid[finalyBodySnake].classList.remove('snake')
//     bodySnake.unshift(bodySnake[0]+direction)
//     blockGrid[bodySnake[0]].classList.add("snake")
// }



// const comandDirectionBtn = (e:any)=>{
//     if(blockGrid.length > 0){
//         if(e.target.name === "Right"){
//             direction = 1
//         }
//         if(e.target.name === "Up"){
//             direction = -movePosition
//         }    
//         if(e.target.name === "Left"){
//             direction = -1
//         }
//         if(e.target.name === "Down"){
//             direction = movePosition
//         }
//     }
   
// }








// btnUp?.addEventListener("click",comandDirectionBtn)
// btnRight?.addEventListener("click",comandDirectionBtn)
// btnLeft?.addEventListener("click",comandDirectionBtn)
// btnDown?.addEventListener("click",comandDirectionBtn)
btnSelect?.addEventListener("click",initGame)
btnStart?.addEventListener("click",screenGame)


