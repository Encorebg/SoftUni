function movies(array) {
  let movies = [];
  for (let command of array) {
    if (command.includes(`addMovie`)) {
      let tokens = command.split("addMovie ");
      let movieTitle = tokens[1];

      let movieObject = { name: movieTitle };
      movies.push(movieObject);
    } else if (command.includes("directedBy")) {
      let tokens = command.split(" directedBy ");
      let movieTitle = tokens[0];
      let directorName = tokens[1];

      let isFound = movies.find(m => m.name === movieTitle);
      if (isFound) {
        isFound.director = directorName;

      }
    } else if (command.includes("onDate")) {
      let tokens = command.split(" onDate ");
      let movieTitle = tokens[0];
      let movieDate = tokens[1];

      let isFound = movies.find(m => m.name === movieTitle);
      if (isFound) {
        isFound.date = movieDate;
      }
    }
  }
    let fullInMovies = movies.filter(m => m.name && m.date && m.director);

    for (let movie of fullInMovies) {
      console.log(JSON.stringify(movie));
    }

  
}
movies([
  'addMovie Fast and Furious',
  'addMovie Godfather',
  'Inception directedBy Christopher Nolan',
  'Godfather directedBy Francis Ford Coppola',
  'Godfather onDate 29.07.2018',
  'Fast and Furious onDate 30.07.2018',
  'Batman onDate 01.08.2018',
  'Fast and Furious directedBy Rob Cohen'
  ]
  );