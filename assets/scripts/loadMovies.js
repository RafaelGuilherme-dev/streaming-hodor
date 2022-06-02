(() => {
const api = "api_key=9c01bc51e3095c9d889d05989bec36d1&language=pt";
const base_url = "https://api.themoviedb.org/3";
const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;
const img_url = "https://image.tmdb.org/t/p/original";

const requests = {
  fetchFantasy: `${base_url}/discover/movie?${api}&with_genres=14`,
  fetchMystery: `${base_url}/discover/movie?${api}&with_genres=9648`,
  fetchAnimation: `${base_url}/discover/movie?${api}&with_genres=16`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchPopular: `${base_url}/discover/movie?certification_country=BR&certification.lte=G&sort_by=popularity.desc&${api}`,
  fetchTrending: `${base_url}/trending/all/week?${api}&language=pt-BR`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
};

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results);

    // Muda o filme toda a vez que carrega
    
    const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
    console.log(setMovie);
    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner__titulo");
    var banner__desc = document.getElementById("banner__descricao");
    banner.style.backgroundImage = "url(" + img_url + setMovie.backdrop_path + ")";
    banner__desc.innerText = truncate(setMovie.overview, 150);
    banner_title.innerText = setMovie.name;

    let nameMovie = setMovie.name.replace(' ','+');

    var btnTrailer = document.getElementById("btnTrailer");
    var ly ="https://www.youtube.com/results?search_query="+ nameMovie +"+trailer";
    btnTrailer.setAttribute('href',ly);
  })

//Fantasia
fetch(requests.fetchFantasy)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("popularrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Fantasia";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
      const poster = document.createElement("img");
      poster.className = "row__posterLarge";
      poster.setAttribute("style","heigth:250px; width:166px");
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      const link = document.createElement("a");
  
      let nameMovie = movie.original_title.replace(' ','+');
      let l ="https://www.youtube.com/results?search_query="+nameMovie +"+trailer";
      link.setAttribute("href",l);
      link.appendChild(poster);
      row_posters.appendChild(link);

    });
  });

//Misterio
fetch(requests.fetchMystery)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("popularrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Misterio";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
      const poster = document.createElement("img");
      poster.className = "row__posterLarge";
      poster.setAttribute("style","heigth:250px; width:166px");
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      const link = document.createElement("a");
      // a.className = "row__posterLarge";
  
      let nameMovie = movie.original_title.replace(' ','+');
      let l ="https://www.youtube.com/results?search_query="+nameMovie +"+trailer";
      link.setAttribute("href",l);
      link.appendChild(poster);
      row_posters.appendChild(link);
    });
  });


//Animações
fetch(requests.fetchAnimation)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("popularrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Animação";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
      const poster = document.createElement("img");
      poster.className = "row__posterLarge";
      poster.setAttribute("style","heigth:250px; width:166px");
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      const link = document.createElement("a");
  
      let nameMovie = movie.original_title.replace(' ','+');
      let l ="https://www.youtube.com/results?search_query="+nameMovie +"+trailer";
      link.setAttribute("href",l);
      link.appendChild(poster);
      row_posters.appendChild(link);
    });
  });

//Ação
fetch(requests.fetchActionMovies)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("popularrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Ação";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
      const poster = document.createElement("img");
      poster.className = "row__posterLarge";
      poster.setAttribute("style","heigth:250px; width:166px");
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      const link = document.createElement("a");
  
      let nameMovie = movie.original_title.replace(' ','+');
      let l ="https://www.youtube.com/results?search_query="+nameMovie +"+trailer";
      link.setAttribute("href",l);
      link.appendChild(poster);
      row_posters.appendChild(link);
    });
  });



//Horror
fetch(requests.fetchHorrorMovies)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("popularrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Terror";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
      const poster = document.createElement("img");
      poster.className = "row__posterLarge";
      poster.setAttribute("style","heigth:250px; width:166px");
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      const link = document.createElement("a");
  
      let nameMovie = movie.original_title.replace(' ','+');
      let l ="https://www.youtube.com/results?search_query="+nameMovie +"+trailer";
      link.setAttribute("href",l);
      link.appendChild(poster);
      row_posters.appendChild(link);
    });
  });

//Comédia
fetch(requests.fetchComedyMovies)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("popularrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Comédia";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
      const poster = document.createElement("img");
      poster.className = "row__posterLarge";
      poster.setAttribute("style","heigth:250px; width:166px");
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      const link = document.createElement("a");
  
      let nameMovie = movie.original_title.replace(' ','+');
      let l ="https://www.youtube.com/results?search_query="+nameMovie +"+trailer";
      link.setAttribute("href",l);
      link.appendChild(poster);
      row_posters.appendChild(link);

    });
  });
})();