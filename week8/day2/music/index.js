const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;
const songs = require(`./app`);

app.get("/", (req, res) => {
  let home = `<h1>Death Grips</h1>
  <img src ="https://media.npr.org/assets/img/2012/10/21/death_grips_wide-ee536ddc6aeaa777f6a173f20223dac0c78538e8.jpg?s=1400" width= "500" height ="400">
  <img src ="https://upload.wikimedia.org/wikipedia/commons/1/15/Death_grips_2014.jpg"width= "500" height ="400">`;

  res.send(home);
});

app.get("/albums", (req, res) => {
  let theList = `<ul>`;
  for (let album of songs) {
    let number = 0;
    theList += `<ul><a href="/albums/${number}">${album.name}<a/></ul>`;
    number += 1;
  }
  theList += `</ul>`;
  res.send(theList);
});
app.get("/albums/:parameters", (req, res) => {
  const number = req.params.parameters;
  const info = `<h1>${songs[number].name}</h1> <p>Songs:</p> <ul>${songs[number].songTitles[0]}</ul><ul>${songs[number].songTitles[1]}</ul><ul>${songs[number].songTitles[2]}</ul><ul>${songs[number].songTitles[3]}</ul> <img src ="${songs[number].imgURL}" width= "300" height ="300">`;
  res.send(info);
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
