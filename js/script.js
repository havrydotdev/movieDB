'use strict';

const ad = document.querySelectorAll('.promo__adv img'),
      adNew = document.querySelector('.promo__adv-title'),
      div = document.createElement('div'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

const movieDB = {
    movies: [
        "LOGAN",
        "JUSTICE LEAGUE",
        "LA LA LAND",
        "WHIPLASH",
        "SCOTT PILIGRIM VS..."
    ]
};
ad.forEach(item => {
    item.remove();
});
genre.textContent = 'Drama';

adNew.innerHTML = "";

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}: ${film}
                            <div class="delete"></div>
                        </li>
    `;  
});
// a = a + 1 = a += 1