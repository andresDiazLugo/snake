import food from './assets/foodXSnake.mp3'
import auch from './assets/auch.mp3'
import click from './assets/click.mp3'
const soundFood = new Audio(food)
const soundAuch = new Audio(auch)
const soundClick = new Audio(click)

export const initGameSnake = ()=>{
    const btnUp = document.querySelector(".btnUp")
    const btnDown = document.querySelector(".btnDown")
    const btnLeft = document.querySelector(".btnLeft")
    const btnRight = document.querySelector(".btnRight")
    const heart = document.querySelectorAll(".heart") 
    const arraiHeart:Element[]=[]
    for(let i = 0; i < heart.length; i++){
        arraiHeart.push(heart[i])
    }
    const elementLives = document.querySelector(".elementLives")
    let movePosition = 18
    let direction = 1
    let speed = 200


    let blockGrid = document.querySelectorAll("section")
    let bodySnake:number[] = [55,54,53]
    

    const paintSnake=(generate:boolean)=>{

       !generate && bodySnake.forEach((element) => {
            blockGrid[element].classList.add('snake')
        })
        generate && blockGrid[ Math.floor(Math.random() * 324)].classList.add('food')
    }
    paintSnake(true)
    const moveSnake = ()=>{
    // let blockGrid = document.querySelectorAll("section")
        paintSnake(false)
        console.log(movePosition)
    
        if(((bodySnake[0] % movePosition * -1) === 0 && direction === -1) ||
        ((((bodySnake[0])+(1)) % movePosition) === 0 && direction === 1) ||
        ((bodySnake[0] + direction ) < 0 )||
        (direction + bodySnake[0])>323 ||
        blockGrid[bodySnake[0]].classList.contains('food')
        ){
            bodySnake.forEach(e=>blockGrid[e].classList.remove('snake'))
            bodySnake=[55,54,53]
            direction= 1
            soundAuch.play()
            if(heart.length ===0){
                alert("GAME OVER")
            }
            elementLives?.removeChild(arraiHeart.pop())
// console.log(Array.isArray(heart))
            // console.log(heart.pop())
        }
        
        const finalyBodySnake:number= bodySnake.pop() as number
        blockGrid[finalyBodySnake].classList.remove('snake')
        blockGrid[bodySnake[0] + direction].classList.add("snake")
        bodySnake.unshift(bodySnake[0]+direction)
        console.log(bodySnake[0])
        if(blockGrid[bodySnake[0]].classList.contains('food')){
            blockGrid[bodySnake[0]].classList.remove('food')
            bodySnake.push(bodySnake[bodySnake.length-1])
            soundFood.play()
            speed = speed -100
            paintSnake(true)
            let elementScore:Element = document.querySelector(".contador") as Element
            elementScore.innerHTML= String(Number(elementScore?.innerHTML) + 1)
        }
    }
    
    setInterval(moveSnake,speed)
    
    const comandDirectionBtn = (e:any)=>{
        soundClick.play()
        if(blockGrid.length > 0){
            if(e.target.name === "Right" && direction !=-1){
                direction = 1
            }
            if(e.target.name === "Up" && direction != movePosition){
                direction= -movePosition
                // movePosition = -movePosition
            }    
            if(e.target.name === "Left" && direction !=1){
                direction = -1
            }
            if(e.target.name === "Down" && direction !== -movePosition){
                direction = movePosition
                // movePosition = movePosition
            }
        }
       
    }
    
    
btnUp?.addEventListener("click",comandDirectionBtn)
btnRight?.addEventListener("click",comandDirectionBtn)
btnLeft?.addEventListener("click",comandDirectionBtn)
btnDown?.addEventListener("click",comandDirectionBtn)

}