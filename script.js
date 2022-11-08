let generate = document.querySelector(".generate")


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
            class="btn btn-sm btn-outline-secondary"
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
        <small class="text-muted">9 mins</small>
        </div>
    </div>
    </div>
    </div>`
    }
const hideBtn = document.querySelectorAll("#hide")
for (btn of hideBtn) {
    btn.addEventListener('click', hideCard)
}
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

btn.addEventListener('click', hideCard)