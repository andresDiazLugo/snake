export const initGameSnake = ()=>{
    const btnUp = document.querySelector(".btnUp")
    const btnDown = document.querySelector(".btnDown")
    const btnLeft = document.querySelector(".btnLeft")
    const btnRight = document.querySelector(".btnRight")

    const movePosition = 18
    let direction = 1


    let blockGrid = document.querySelectorAll("section")
    const bodySnake:number[] = [55,54,53]
    

    const paintSnake=()=>{
        bodySnake.forEach((element) => {
            blockGrid[element].classList.add('snake')
        });
    }
    
    const moveSnake = ()=>{
    // let blockGrid = document.querySelectorAll("section")
        paintSnake()
        const finalyBodySnake:number= bodySnake.pop() as number
        blockGrid[finalyBodySnake].classList.remove('snake')
        bodySnake.unshift(bodySnake[0]+direction)
        blockGrid[bodySnake[0]].classList.add("snake")
    }
    
    setInterval(moveSnake,1000)
    
    const comandDirectionBtn = (e:any)=>{
        if(blockGrid.length > 0){
            if(e.target.name === "Right"){
                direction = 1
            }
            if(e.target.name === "Up"){
                direction = -movePosition
            }    
            if(e.target.name === "Left"){
                direction = -1
            }
            if(e.target.name === "Down"){
                direction = movePosition
            }
        }
       
    }
    
    
btnUp?.addEventListener("click",comandDirectionBtn)
btnRight?.addEventListener("click",comandDirectionBtn)
btnLeft?.addEventListener("click",comandDirectionBtn)
btnDown?.addEventListener("click",comandDirectionBtn)

}