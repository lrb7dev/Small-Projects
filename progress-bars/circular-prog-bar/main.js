let progressBar = document.querySelector(".circular-progress")
let valueContainer = document.querySelector(".value-container")
//console.log(progressBar, valueContainer) //testing...

let progressValue = 0 //initial value
let progressEndValue = 0 //final value
let speed = 50 // the speed to complete until final value

let progress = setInterval(() => {
    
    //change the value container
    valueContainer.textContent = `${progressValue}%`
    //console.log(progressValue) //testing...
    //circular progress follows the percentage
    progressBar.style.background = `conic-gradient(
        #5bf94d ${progressValue * 3.6}deg,
        #e9f7e8 ${progressValue * 3.6}deg
    )`
    if(progressValue == progressEndValue) {
        clearInterval(progress)
    }

    //add 1 more until interval ends
    progressValue++;
}, speed)