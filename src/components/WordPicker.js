// const words = [
//   "TITANIC",
//   "AVATAR",
//   "RIO",
//   "AVENGERS",
//   "INCEPTION",
//   "TENET",
//   "BATMAN",
//   "CONJURING",
//   "UNCHARTERED",
//   "DUNE",
// ];

const movies = [
  {
    name: {
      id: "AVATAR",
      hint: [
        "Released in the year 2009",
        "Directed by James Cameron",
        "The hero is Sam Worthington",
      ],
    },
  },
  {
    name: {
      id: "RIO",
      hint: [
        "Released in the year 2011",
        "Animated film",
        "Movie completely based on Birds",
      ],
    },
  },
  {
    name: {
      id: "INCEPTION",
      hint: [
        "Released in the year 2010",
        "Directed by Christopher Nolan",
        "The hero is Leonardo DiCaprio",
      ],
    },
  },
  {
    name: {
      id: "CONJURING",
      hint: [
        "Released in the year 2013",
        "Directed by James Wan",
        "American supernatural horror film",
      ],
    },
  },
  {
    name: {
      id: "AVENGERS",
      hint: [
        "Released in the year 2012",
        "Directed by Joss Whedon",
        "American superhero film based on MARVEL comics",
      ],
    },
  },

  {
    name: {
      id: "JOKER",
      hint: [
        "Released in the year 2019",
        "Directed by Todd Philips",
        "Film by DC comics & starring Joaquin Phoenix",
      ],
    },
  },
  {
    name: {
      id: "SEVEN",
      hint: [
        "Released in the year 1995",
        "Directed by David Fincher",
        "Serial killer murders people based on sin, starring Brad Pitt & Morgan Freeman",
      ],
    },
  },
  {
    name: {
      id: "DEADPOOL",
      hint: [
        "Released in the year 2016",
        "Directed by Tim Miller",
        "American superhero film based on MARVEL comics, starring Ryan Reynolds",
      ],
    },
  },
  {
    name: {
      id: "PREDATORS",
      hint: [
        "Released in the year 2010",
        "Directed by Nimrod Antal",
        "American science fiction film, An alien planet that acts as a game",
      ],
    },
  },
  {
    name: {
      id: "ROCKY",
      hint: [
        "Released in the year 1976",
        "Starring Sylvester Stallone",
        "American sports drama action film focused on Boxing",
      ],
    },
  },
];

function randomWord() {
  return movies[Math.floor(Math.random() * movies.length)];
}

export { randomWord };
