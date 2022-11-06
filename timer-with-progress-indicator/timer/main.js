const semicircles = document.querySelectorAll(".semicircle")
const timer = document.querySelector(".timer")

//inputs
const hr = 0
const min = 0
const sec = 13

//converts in milliseconds
const hours = hr * 3600000
const minutes = min * 60000
const seconds = sec * 1000

//set time
const setTime = hours + minutes + seconds

//time
const startTime = Date.now()
const futureTime = startTime + setTime

const timerLoop = setInterval(countDownTimer)
countDownTimer()

function countDownTimer() {
    // progress indicator
    const currentTime = Date.now()
    const remainingTime = futureTime - currentTime
    const angle = (remainingTime / setTime) * 360

    if (angle > 180) {
        semicircles[2].style.display = 'none'
        semicircles[0].style.transform = 'rotate(180deg)'
        semicircles[1].style.transform = `rotate(${angle}deg)`
    } else {
        semicircles[2].style.display = 'block'
        semicircles[0].style.transform = `rotate(${angle}deg)`
        semicircles[1].style.transform = `rotate(${angle}deg)`
    }

    // timer
    const hrs = Math.floor((remainingTime / (1000 * 60 * 60)) % 24).toLocaleString('en-us', { minimumIntegerDigits: 2, useGrouping: false })
    const mins = Math.floor((remainingTime / (1000 * 60)) % 60).toLocaleString('en-us', { minimumIntegerDigits: 2, useGrouping: false })
    const secs = Math.floor((remainingTime / 1000) % 60).toLocaleString('en-us', { minimumIntegerDigits: 2, useGrouping: false })

    timer.innerHTML = `
    <div>${hrs}</div>
    <div class="colon">:</div>
    <div>${mins}</div>
    <div class="colon">:</div>
    <div>${secs}</div>
    `

    // 5-sec condition
    if (remainingTime <= 6000) {
        semicircles[0].style.backgroundColor = "red"
        semicircles[1].style.backgroundColor = "red"
        timer.style.color = "red"
    }


    //end
    if (remainingTime < 0) {
        clearInterval(timerLoop)
        semicircles[0].style.display = 'none'
        semicircles[1].style.display = 'none'
        semicircles[2].style.display = 'none'

        //zeroing the timer
        timer.innerHTML = `
        <div>00</div>
        <div class="colon">:</div>
        <div>00</div>
        <div class="colon">:</div>
        <div>00</div>
        `

        timer.style.color = "lightgray"
    }

}