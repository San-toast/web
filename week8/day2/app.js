const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;
let songs = [
  {
    name: "Exmilitary",
    publishDate: "2011",
    imgURL:
      "https://upload.wikimedia.org/wikipedia/en/1/1a/Exmilitary_artwork.png",

    songTitles: ["Beware", "Guillotine", "Takyon(Death Yon)", "Klink"],
  },
  {
    name: "The Money Store",
    description: "2012",
    imgURL:
      "https://static.wikia.nocookie.net/deathgrips/images/f/f3/1.jpg/revision/latest?cb=20171118190517",

    songTitles: ["Get Got", "I've Seen Footage", "Punk Weight", "Hacker"],
  },
];

app.get("/", (req, res) => {
  let home = `<h1>Death Grips</h1>
  <img src ="https://media.npr.org/assets/img/2012/10/21/death_grips_wide-ee536ddc6aeaa777f6a173f20223dac0c78538e8.jpg?s=1400" width= "500" height ="400">`;

  res.send(home);
});

app.get("/albums", (req, res) => {
  let theList = `<ul>`;
  for (let album of songs) {
    theList += `<li> <a href="/albums/${album.name}">${album.name}<a/></li>`;
  }
  theList += `</ul>`;
  res.send(theList);
});
app.get("/albums/Exmilitary", (req, res) => {
  const album1 = songs[0];
  const info = `<h1>${album1.name}</h1> <p>Songs: ${album1.songTitles[0]}, ${album1.songTitles[1]}, ${album1.songTitles[2]}, ${album1.songTitles[3]}</p> <img src ="${album1.imgURL}" width= "300" height ="300">`;
  res.send(info);
});
app.get("/albums/The_Money_Store", (req, res) => {
  const album1 = songs[1];
  const info = `<h1>${album1.name}</h1> <p>Songs: ${album1.songTitles[0]}, ${album1.songTitles[1]}, ${album1.songTitles[2]}, ${album1.songTitles[3]}</p> <img src ="${album1.imgURL}" width= "300" height ="300">`;
  res.send(info);
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
