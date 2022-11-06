//API weather map org
let weather = {
    apikey: "your_key_here",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apikey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data)) //testing
    },
    displayWeather: function (data) {
        const { name } = data
        const { icon, description } = data.weather[0]
        const { temp, humidity } = data.main
        const { speed } = data.wind
        //console.log(name, icon, description, temp, humidity, speed) //testing
        document.querySelector(".city").innerText = "Weather in " + name
        document.querySelector(".temp").innerText = temp + "°C"
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description").innerHTML = description
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%"
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h"
        document.querySelector(".weather").classList.remove("loading")
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?" + name + "')"
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
}

//searching when click
document.querySelector(".search button").addEventListener("click", function () {
    weather.search()
})

//searching when press enter
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if(event.key == "Enter") {
        weather.search()
    }
})

weather.fetchWeather("Boston")
