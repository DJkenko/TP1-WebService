const form = document.getElementById('search');
const inputSearch = document.getElementById('inputSearch');
const result = document.getElementById('result');

const API_KEY = 'api_key=e3d3e258fedbd8ba568e801eb2ed0a52';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

let search = "";
let movies = [];

const fetchMovies = async () => {
    movies = await fetch(searchURL + `&query=${search}`).then((res) => res.json());
}

const moviesDisplay = async () => {
    await fetchMovies();

    movies.results.length = 12;

    result.innerHTML = movies.results.map((movie) =>
        `
        <li>
            <h2> ${movie.original_title}</h2
            <div class="card-content">
                <img src="http://image.tmdb.org/t/p/w500${movie.poster_path}"></img>
                    <div class="infos">
                        <p> ${movie.overview}</p>
                        <p> Popularity : ${movie.popularity} ✨</p>
                    </div>
            </div>
        </li>
        `
    ).join("");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    search = inputSearch.value;
    moviesDisplay()
})