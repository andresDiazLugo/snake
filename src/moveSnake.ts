import food from './assets/food.mp3'
const soundFood = new Audio(food)
export const initGameSnake = ()=>{
    const btnUp = document.querySelector(".btnUp")
    const btnDown = document.querySelector(".btnDown")
    const btnLeft = document.querySelector(".btnLeft")
    const btnRight = document.querySelector(".btnRight")

    let movePosition = 18
    let direction = 1


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
        (direction + bodySnake[0])>323
        ){
            bodySnake.forEach(e=>blockGrid[e].classList.remove('snake'))
            bodySnake=[55,54,53]
            direction= 1
        }else if(blockGrid[bodySnake[0]].classList.contains('food')){
            bodySnake.push(bodySnake[bodySnake.length-1])
            blockGrid[bodySnake[0]].classList.remove('food')
            soundFood.play()
            paintSnake(true)
            // let elementScore = document.querySelector(".contador")

        }
        const finalyBodySnake:number= bodySnake.pop() as number
        blockGrid[finalyBodySnake].classList.remove('snake')
        blockGrid[bodySnake[0] + direction].classList.add("snake")
        bodySnake.unshift(bodySnake[0]+direction)
        console.log(bodySnake[0])
    }
    
    setInterval(moveSnake,350)
    
    const comandDirectionBtn = (e:any)=>{
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