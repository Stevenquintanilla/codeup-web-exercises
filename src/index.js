/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

const $ = require('jquery');

/**
 * require style imports
 */
const {getMovies} = require('./api.js');

console.log(getMovies().then());

$('.fa').html('Loading...');

const getMovieInfo = () => getMovies().then((movies) => {
    $('#movies').html('');
    console.log('Here are all the movies:');
    movies.forEach(({title, rating, id}) => {
        $('#movies').append(`<div id="cool"><div>ID ${id}</div> <div>${title}</div> <div>Rating ${rating}</div>
                <button data-id="${id}" class="delete-btn" type="submit">X</button></div>`);
        console.log(`id#${id} - ${title} - rating: ${rating}`);
    });
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.')
    console.log(error);
});

const getMovieData = () => {

        getMovies().then((movies) => {
            $('#movies').html('');
            movies.forEach(({title, rating, id}) => {
                $('#movies').append(`<div id="cool"><div>ID ${id}</div> <div>${title}</div> <div>Rating ${rating}</div>
                <button data-id="${id}" class="delete-btn" type="submit">X</button></div>`);
                $('.fa').empty();
                // allows for editing of movies
                // Delete movies
                const deleteMovieTitle = {title, rating, id};

                $.getJSON(`https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${title}&callback=?`, function (json) {
                    if (json != "Nothing found.") {
                        // console.log(json.results[0].poster_path);
                        // $('#moviePoster').css('background-image', `url('http://image.tmdb.org/t/p/w500${json.results[0].poster_path}')`)
                    }
                });
            });
        }).then(() => {
        $(document).on("click", ".delete-btn", (e) => {
            const idVal = $(e.target).data('id');
            const url = `./api/movies/${idVal}`;
            const options = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            fetch(url, options)
                .then(data => {
                    console.log('after delete');
                    console.log(data);
                    $(idVal).remove();
                    getMovieData();
                })
        });
    }).catch((error) => {
            alert(`Oh no! Something went wrong.
                Check the console for details.`);
            console.log(error);
        });
    };

    const addMovies = () => {
        $('#add-movie-btn').click(function () {
            const addedMovie = {
                title: $('#add-movie').val(),
                rating: $('#ratingselect').val(),
            };
            const url = ('api/movies');
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(addedMovie),
            };
            fetch(url, options)
                .then(getMovieInfo);
        });
    };


getMovies();
getMovieData();
addMovies();


// const deleteMovies = () => {
//     $('#delete-movie-btn').click(function () {
//
//         const getMovieData = () => {
//             getMovies().then((movies) => {
//                 console.log('Here are all the movies:');
//                 $('.container>h1').html('');
//                 movies.forEach(({title, rating, id}) => {
//         if ($('#delete-movie').val === title){
//         }
//                 }
//
//     });
// };

// const starCount = (rating) => {
//     if(rating == 4) {
//         $('#star5').removeClass('checked');
//     } else if (rating == 3) {
//         $('#star4').removeClass('checked');
//         $('#star5').removeClass('checked');
//     } else if (rating == 2) {
//         $('#star3').removeClass('checked');
//         $('#star4').removeClass('checked');
//         $('#star5').removeClass('checked');
//     } else if (rating == 1) {
//         $('#star2').removeClass('checked');
//         $('#star3').removeClass('checked');
//         $('#star4').removeClass('checked');
//         $('#star5').removeClass('checked');
//     }
// }

    // switch (rating) {
    //     case '1':
    //         $('.star1').addClass('checked');
    //         break;
    //     case '2':
    //         $('.star1').addClass('checked');
    //         $('.star2').addClass('checked');
    //         break;
    //     case '3':
    //         $('.star1').addClass('checked');
    //         $('.star2').addClass('checked');
    //         $('.star3').addClass('checked');
    //         break;
    //     case '4':
    //         $('.star1').addClass('checked');
    //         $('.star2').addClass('checked');
    //         $('.star3').addClass('checked');
    //         $('.star4').addClass('checked');
    //         break;
    //     case '5':
    //         $('.star1').addClass('checked');
    //         $('.star2').addClass('checked');
    //         $('.star3').addClass('checked');
    //         $('.star4').addClass('checked');
    //         $('.star5').addClass('checked');
    //         break;
    // }
// });

//         $('#movies').append(`<div id="stars">
// <span class="fa fa-star checked" id="star1"></span>
// <span class="fa fa-star checked" id="star2"></span>
// <span class="fa fa-star checked" id="star3"></span>
// <span class="fa fa-star checked" id="star4"></span>
// <span class="fa fa-star checked" id="star5"></span>
//                                 </div>`);
//         starCount(`${rating}`);



