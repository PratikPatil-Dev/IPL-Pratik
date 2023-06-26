$(document).ready(function () {
  // Get Id to use in this js file
  const urlParams = new URLSearchParams(window.location.search);
  const teamId = urlParams.get("id");

  // Fetch data from local storage
  const playersArr = JSON.parse(localStorage.getItem("players"));
  const teamsArr = JSON.parse(localStorage.getItem("teams"));
  const selectedTeam = teamsArr[teamId];
  console.log(selectedTeam);

  // Fetch players of selected team
  const teamPlayers = [];
  for (i = 0; i < playersArr.length; i++) {
    if (playersArr[i].from == selectedTeam.teamCode) {
      teamPlayers.push(playersArr[i]);
    }
  }
  console.log(teamPlayers);

  // Add team and Add player buttons
  function addNewTeam() {
    window.open("./addTeam.html", "_self");
  }

  function addNewPlayer() {
    window.open("./addPlayer.html", "_self");
  }

  let addTeamBtn = document.getElementById("teamBtn");
  let addPlayerBtn = document.getElementById("playerBtn");

  addTeamBtn.addEventListener("click", addNewTeam);
  addPlayerBtn.addEventListener("click", addNewPlayer);

  // Create team details section
  const teamDetails = document.getElementById("team-details");
  let details = `
<div class="left">
          <div class="hdg-cont">
            <div class="left-items"><h1 class="sub-hdg">${selectedTeam.teamName}</h1></div>
          </div>
          <div class="left-items"><span>Player Count:</span><span>${teamPlayers.length}</span></div>
          <div class="left-items">
            <span>Top Batsman:</span><span>${selectedTeam.topBatsman}</span>
          </div>
          <div class="left-items">
            <span>Top Bowler:</span><span>${selectedTeam.topBowler}</span>
          </div>
          <div class="left-items">
            <span>Championship Won:</span><span>${selectedTeam.championshipCount}</span>
          </div>
        </div>
        <div class="right">
          <div class="logo-cont">
            <img
              src="${selectedTeam.teamIcon}"
              alt="team logo"
            />
          </div>
        </div>
`;
  teamDetails.innerHTML += details;

  // Create cards for team players

  const playerCont = document.getElementById("team-players");
  for (let i = 0; i < teamPlayers.length; i++) {
    let playingStatus = teamPlayers[i].isPlaying ? "Playing" : "On-bench";
    let playerCard = `
    
      <div class="player-card">
      <a href="/playerDetails.html?name=${teamPlayers[i].playerName}">
        <img
            src="${teamPlayers[i].playerImg}"
            alt="${teamPlayers[i].playerName} image"
        />
        <h2>${teamPlayers[i].playerName}</h2>
        <p>Team: ${teamPlayers[i].playerTeam}</p>
        <p>Price: ${teamPlayers[i].price}</p>
        <p>Playing Status: ${playingStatus}</p>
        <p>Role: ${teamPlayers[i].description}</p>
        </a>
      </div>
    
    `;
    playerCont.innerHTML += playerCard;
  }
});
