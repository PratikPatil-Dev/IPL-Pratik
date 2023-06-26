$(document).ready(function () {
  // fetch selected players name
  let urlParams = new URLSearchParams(window.location.search);
  let playerName = urlParams.get("name");
  console.log(playerName);

  // get the data of player from local storage

  const playersArr = JSON.parse(localStorage.getItem("players"));
  const playerData = playersArr.filter(
    (player) => player.playerName === playerName
  );
  console.log(playerData);

  let leftSection = document.getElementById("left");
  let playingStatus = playerData[0].isPlaying ? "Playing" : "On-bench";

  let div1 = `
  <div class="name">${playerData[0].playerName}</div>
        <div class="left-items">
          <p>Team:</p>
          <p>${playerData[0].playerTeam}</p>
        </div>
        <div class="left-items">
          <p>Price:</p>
          <p>${playerData[0].price}</p>
        </div>
        <div class="left-items">
          <p>Playing Status:</p>
          <p>${playingStatus}</p>
        </div>
        <div class="left-items">
          <div>Role:</div>
          <div>${playerData[0].description}</div>
        </div>
  `;
  $(leftSection).html(div1);

  let rightSection = document.getElementById("right");

  let div2 = `
  <img
          src="${playerData[0].playerImg}"
          alt=""
        />
  `;
  $(rightSection).html(div2);

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
});
