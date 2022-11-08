let generate = document.querySelector(".generate")
const hideBtn = document.querySelectorAll("#hide")
const input = document.querySelector('#searchInput')
let alert = document.querySelector('#alert')
let slideimages = document.querySelectorAll('.modalimg')

const options = {
    headers: { Authorization: '563492ad6f91700001000001e643bb81808e4ec1a0fae7ce5275063f'

    }
}

loadPics = (photos) => {
    generate.innerHTML = ""
    for (let photo of photos) {
    generate.innerHTML += `
    <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
    <img class="img-card-top img-fluid" src="${photo.src.medium}">
    <div class="card-body">
        <p class="card-text">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
        </p>
        <div
        class="d-flex justify-content-between align-items-center"
        >
        <div class="btn-group">
            <button
            type="button"
            class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#exampleModal"
            >
            View
            </button>
            <button
            type="button"
            class="btn btn-sm btn-outline-secondary" id="hide"
            >
            Hide
            </button>
        </div>
        <small class="text-muted">${photo.id}</small>
        </div>
    </div>
    </div>
    </div>`
    
    
    }
const hideBtn = document.querySelectorAll("#hide")
for (btn of hideBtn) {
    btn.addEventListener('click', hideCard)
}
let images = document.querySelectorAll('.img-card-top')
const alertShow = () => {
    alert.classList.remove("hidden")
    alert.innerHTML = images.length +  " photos loaded"
    
    alertTimeout = setTimeout(() => {
        $("#alert").addClass("hidden");
    }, 5000);
}
alertShow()
}

const loadImg = () => {
    fetch('https://api.pexels.com/v1/search?query=clouds', options)
    .then((response) => response.json())
    .then(response => loadPics(response.photos))

    
}

const loadSec = () => {
    fetch('https://api.pexels.com/v1/search?query=stars', options)
    .then((response) => response.json())
    .then(response => loadPics(response.photos))
}

const hideCard = (e) => {
    e.path[5].style.display = 'none'
}

for (btn of hideBtn) {
    btn.addEventListener('click', hideCard)
}

const searchPics = (event) => {

    const searchTerm = event.target.value

    fetch(`https://api.pexels.com/v1/search?query=${searchTerm}`, options)
    .then((response) => response.json())
    .then(response => loadPics(response.photos))

}

input.addEventListener("input", searchPics) 

const slideoptions = {
    headers: { Authorization: '563492ad6f91700001000001e643bb81808e4ec1a0fae7ce5275063f'

    }
}


    showForest = (photos) => {
        console.log(photos);
        slideimages.innerHTML = "";
        for (let photo of photos) {
            let randomCarouselImage =
                slideimages[Math.floor(Math.random() * slideimages.length)];
            randomCarouselImage.src = photo.src.large;
    
   
    //<img class="d-block w-100" id="modalimg" src="${photo.src.large}" alt="slide">`
    

}
}

fetchForest = () => {
    fetch('https://api.pexels.com/v1/search?query=forest', options)
    .then((response) => response.json())
    .then(response => showForest(response.photos))
}