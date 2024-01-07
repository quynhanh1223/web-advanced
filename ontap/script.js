// const btn = document.getElementById("btn-click")
// const name = document.getElementById("name-change")
// btn.addEventListener("click", function() {
//     name.innerText = "MindX"
// })

const nameTag = document.getElementById("name")
const clickBtn = document.getElementById("click-btn")

clickBtn.addEventListener('click', function() {
    const h1Tag = document.createElement("h1")
    const pTag = document.createElement("p")
    h1Tag.innerText = "Name here"
    pTag.innerText = "My name is __"

    nameTag.appendChild(h1Tag)
    nameTag.appendChild(pTag)
})
