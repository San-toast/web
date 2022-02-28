const client_id = "0fthim31xfwt3jihnhzg88nkje54t4";
const client_secret = "6ru89t3ws8bhni4ikbr1w12md7opqc";
const mainBody = document.querySelector(".woo");

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

//gets game information
const getAbout = async () => {
  const token = await getToken();
  const result = await fetch(
    "https://corsanywhere.herokuapp.com/https://api.igdb.com/v4/games",
    {
      method: "POST",
      body: `fields *; where id = (138950
, 131999, 16, 21968, 7334);  limit 5;`,
      headers: { "Client-ID": client_id, Authorization: "Bearer " + token },
      data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;",
    }
  );

  const data = await result.json();

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

  await getCover(coverId);
};
//gets covers
const getCover = async (coverId) => {
  let query = "";
  for (const iterator of coverId) {
    query = query + iterator + ",";
  }
  let str = query.replace(/,\s*$/, "");

  const token = await getToken();
  const result = await fetch(
    "https://corsanywhere.herokuapp.com/https://api.igdb.com/v4/covers",
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

    const cardName = forCover.getAttribute(`name`);

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
getAbout();
