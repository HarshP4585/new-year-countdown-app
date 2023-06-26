const now = new Date()

const endDate = new Date(now.getFullYear() + 1, 0, 1)

document.querySelector(".new-year-date").textContent = `1st January ${now.getFullYear() + 1}`

const daysBtn = document.querySelector("#days-btn")
const hoursBtn = document.querySelector("#hours-btn")
const minutesBtn = document.querySelector("#minutes-btn")
const secondsBtn = document.querySelector("#seconds-btn")

function clock() {

    // 1day: 24hr
    // 1hr: 60min
    // 1min: 60sec

    const diff = (endDate - new Date()) / 1000

    const days = Math.floor(diff / (3600 * 24))
    const hours = (diff - Math.floor(days) * 3600 * 24) / 3600
    const mins = (hours - Math.floor(hours)) * 3600 / 60
    const sec = (mins - Math.floor(mins)) * 60

    daysBtn.innerHTML = Math.floor(days)
    hoursBtn.innerHTML = Math.floor(hours)
    minutesBtn.innerHTML = Math.floor(mins)
    secondsBtn.innerHTML = Math.floor(sec)
}

setInterval(clock, 1)
