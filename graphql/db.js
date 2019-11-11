/////////////////////////////////////////////////////////////////////////
// poeple 
/////////////////////////////////////////////////////////////////////////
// export const people = [
//     {
//         id : 1,
//         name : "seung2",
//         age : 18,
//         gender : "female"
//     },
//     {
//         id : 2,
//         name : "Lee",
//         age : 26,
//         gender : "male"
//     },
//     {
//         id : 3,
//         name : "Koo",
//         age : 22,
//         gender : "female"
//     },
//     {
//         id : 4,
//         name : "Kim",
//         age : 28,
//         gender : "male"
//     }
// ]


// export const getById = id => {
//     const filteredPeople = people.filter(person => person.id === id);
//     return filteredPeople[0];
// }
/////////////////////////////////////////////////////////////////////////

let movies = [
    {
        id : 0,
        name : "가장 보통의 연애",
        score : 9
    },
    {
        id : 1,
        name : "조커",
        score : 7
    },
    {
        id : 2,
        name : "기생충",
        score : 9
    },
    {
        id : 3,
        name : "알라딘",
        score : 8
    },
    {
        id : 4,
        name : "비긴어게인",
        score : 9
    }
]

export const getMovies = () => movies; 

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    }
    else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}