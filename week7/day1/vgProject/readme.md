# Video Game Database Website

This is a front end project that uses DOM manipulation, CSS, and an API to display information about various games. It shows some recently released games, the ability to search for specififc games, and can display a random game from the API. The API used is from https://www.igdb.com/api.

# How the API works

The API requires the user to create and link an account from
https://www.twitch.tv, then obtain a Client-ID and a Client-Secret to obtain a token which is used in the API. A better explanation and tutorial can be found at https://api-docs.igdb.com/. In order to fetch data from this API, a proxy server is needed in order to prevents a CORS error. The server used in this project was https://corsanywhere.herokuapp.com/

The information the user obtains depends on the url provided. For example, to obtain information about a game you would set up the code as:

```
  const result = await fetch(
    "https://corsanywhere.herokuapp.com/https://api.igdb.com/v4/games",
    {
      method: "POST",
      body: `fields *; "${input.value}";  limit 10;`,
      headers: { "Client-ID": client_id, Authorization: "Bearer " + token },
      data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;",
    }
  );
```

The body portion has the user specify how they want the information returned to them, and the data portion puts everything listed in an array.

Most of the data is returned as an ID that must be plugged into another fetch request, where the above url https://api.igdb.com/v4/games would return game information, https://api.igdb.com/v4/covers would return the cover of that game as long as the id from the games url is provided.

Nearly all of the pages created were made using for of loops to attatch the data from the API to the HTML.

```
  let coverId = [];
  for (const info of data) {
    coverId.push(info.cover);
    const gameCover = document.createElement("div");
    const gameSummary = document.createElement("p");
    gameCover.className = info.cover;
    gameSummary.innerText = info.summary;
    gameCover.setAttribute("name", `${info.name}`);
    gameCover.setAttribute("id", `${info.cover}`);
    gameCover.className = "card";
    gameSummary.className = "summary";

    mainBody.append(gameCover);
    mainBody.append(gameSummary);
  }
```

The above example was made withe the games url, but in order to obtain the covers it was necessary to add an id to the elements created so that the covers url could access them and attach an image to the game.

```
  for (const cover of coverData) {
    const forId = cover.id;
    const forCover = document.getElementById(forId);
    console.log(forCover);
    const cardName = forCover.getAttribute(`name`);
    console.log(cardName);
    const gameImage = document.createElement("img");
    const card = document.createElement("div");
    const cardDetails = document.createElement("div");
    cardDetails.innerText = cardName;
    cardDetails.className = "name";

    card.className = "card";
    let text = cover.url;
    let replace = text.replace("thumb", "cover_big");
    gameImage.src = replace;
    forCover.append(gameImage);
    forCover.append(cardDetails);
  }
};
```

The above for loop would use the id that was set in the previous for loop to match with the id the covers url needed in order to find the game that matches the cover needed.

The text.replace portion in the above example changes the image link from a thumbnail to a larger image.
