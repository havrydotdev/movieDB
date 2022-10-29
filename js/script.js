'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const ad = document.querySelectorAll('.promo__adv img'),
        adNew = document.querySelector('.promo__adv-title'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favourite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length >= 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favourite) {
                console.log('Adding favourite film...');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);

            event.target.removeEventListener();
        }
    });


    const movieDB = {
        movies: [
            "LOGAN",
            "JUSTICE LEAGUE",
            "LA LA LAND",
            "WHIPLASH",
            "SCOTT PILIGRIM VS..."
        ]
    };

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'Drama';
        adNew.innerHTML = "";
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1}: ${film}
                                <div class="delete"></div>
                            </li>
        `;
        });
        document.querySelectorAll('.delete').forEach((btn,i) => {
            btn.addEventListener(`click`, () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }
    deleteAdv(ad);

    createMovieList(movieDB.movies, movieList);

    makeChanges();

});
