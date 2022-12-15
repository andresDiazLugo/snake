import {initGame} from './initGame'

export const containerConsole = document.querySelector(".containerConsole")

const btnUp = document.querySelector(".btnUp")
const btnDown = document.querySelector(".btnDown")
const btnLeft = document.querySelector(".btnLeft")
const btnRight = document.querySelector(".btnRight")

const btnA = document.querySelector(".btnA")
const btnB = document.querySelector(".btnB")

const btnStart = document.querySelector(".btnStart")
const btnSelect = document.querySelector(".btnSelect")






btnSelect?.addEventListener("click",initGame)



