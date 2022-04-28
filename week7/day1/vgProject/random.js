const client_id = "0fthim31xfwt3jihnhzg88nkje54t4";
const client_secret = "6ru89t3ws8bhni4ikbr1w12md7opqc";
const randomDiv = document.querySelector(".randomDiv");
const refresh = document.querySelector(".refresh");
let randomArray = [];
const getRandomNumbers = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomNumber = getRandomNumbers(1, 25000);

//gets token
const getToken = async () => {
  const result = await fetch(
    "https://id.twitch.tv/oauth2/token?client_id=0fthim31xfwt3jihnhzg88nkje54t4&client_secret=6ru89t3ws8bhni4ikbr1w12md7opqc&grant_type=client_credentials",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(client_id + ":" + client_secret),
      },
      body: "grant_type=client_credentials",
    }
  );
  const data = await result.json();

  return data.access_token;
};
const getRandomGame = async () => {
  const token = await getToken();
  const result = await fetch(
    "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games",
    {
      method: "POST",
      body: `fields *; where id= ${randomNumber};  limit 10;`,
      headers: { "Client-ID": client_id, Authorization: "Bearer " + token },
      data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;",
    }
  );

  const data = await result.json();

  let coverId = [];
  let platformId = [];
  for (const info of data) {
    platformId.push(info.platforms);
    coverId.push(info.cover);
    const gameName = document.createElement("h1");
    const gameSummary = document.createElement("p");
    const gameCover = document.createElement("div");
    const gameScore = document.createElement("h4");
    gameScore.innerText = "Average Critic Score: " + parseInt(info.rating);
    gameCover.className = info.cover;
    gameCover.setAttribute("name", `${info.cover}`);
    gameCover.setAttribute("id", `${info.cover}`);
    gameSummary.innerText = info.summary;

    gameName.innerText = info.name;
    randomDiv.append(gameName);
    randomDiv.append(gameCover);
    randomDiv.append(gameScore);
    randomDiv.append(gameSummary);
  }

  await getCover(coverId);
  await getPlatforms(platformId);
};

// GETS PLATFORMS
const getPlatforms = async (platformId) => {
  let query = "";
  for (const iterator of platformId) {
    query = query + iterator + ",";
  }
  let str = query.replace(/,\s*$/, "");

  const token = await getToken();
  const result = await fetch(
    "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/platforms",
    {
      method: "POST",
      body: `fields *; where id = (${str});  limit 10;`,
      headers: {
        "Client-ID": client_id,
        Authorization: "Bearer " + token,
      },
      data: "fields abbreviation,alternative_name,category,checksum,created_at,generation,name,platform_family,platform_logo,slug,summary,updated_at,url,versions,websites;",
    }
  );
  const platformData = await result.json();

  for (const platform of platformData) {
    const gamePlatform = document.createElement("h4");

    gamePlatform.innerText = platform.name;
    randomDiv.append(gamePlatform);
  }
};

//GETS COVER
const getCover = async (coverId) => {
  let query = "";
  for (const iterator of coverId) {
    query = query + iterator + ",";
  }
  let str = query.replace(/,\s*$/, "");

  const token = await getToken();
  const result = await fetch(
    "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/covers",
    {
      method: "POST",
      body: `fields *; where id = (${str});  limit 10;`,
      headers: {
        "Client-ID": client_id,
        Authorization: "Bearer " + token,
      },
    }
  );
  const coverData = await result.json();

  for (const cover of coverData) {
    const forId = cover.id;
    const forCover = document.getElementById(forId);

    const gameImage = document.createElement("img");

    let text = cover.url;
    let replace = text.replace("thumb", "cover_big");
    gameImage.src = replace;
    forCover.append(gameImage);
  }
};
refresh.addEventListener("click", () => {
  window.location.reload();
});
getRandomGame();
