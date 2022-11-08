function changeColor(color) {
    document.body.style.background= color


    //mark as active class
    document.querySelectorAll('span').forEach(function (item) {
        item.classList.remove('active')
    })
    event.target.classList.add('active')
}