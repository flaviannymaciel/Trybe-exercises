// Exercício 1 : Altere o imdbRating para 7.7 no filme Batman .
db.movies.updateOne(
  { title: "Batman" },
  {
set: {
      imdbRating: 7.7
    }
  }
);
// Exercício 2 : Altere budget para 1 no filme Godzilla .
db.movies.updateOne(
  { title: "Godzilla" },
  {
set: {
      budget: 1
    }
  }
);
// Exercício 3 : Altere budget para 15 e imdbRating para 5.5 no filme Home Alone .
db.movies.updateOne(
  { title: "Home Alone"},
    {
set: {
        budget: 15,
        imdbRating: 5.5
      }
    }
);
// Exercício 4 : Aumente em 2 o imdbRating do filme Batman .
db.movies.updateOne(
  { title: "Batman" },
  {
inc: { imdbRating: 2 }
  }
);
// Exercício 5 : Aumente em 5 o budget do filme Home Alone .
db.movies.updateOne(
  { title: "Home Alone" },
  {
inc: { budget: 5 }
  }
);
// Exercício 6 : Multiplique por 4 o imdbRating do filme Batman .
db.movies.updateOne(
  { title: "Batman" },
  {
mul: { imdbRating: 4 }
  }
);
// Exercício 7 : Renomeie o campo budget para estimatedBudget do filme Batman .
db.movies.updateOne(
  { title: "Batman" },
  {
rename: {
      budget: "estimatedBudget"
    }
  }
);
// Exercício 8 : Utilize o operador $min para alterar o budget para 5 do filme Home Alone .
db.movies.updateOne(
  { title: "Home Alone" },
  {
min: { budget: 5 }
  }
);
