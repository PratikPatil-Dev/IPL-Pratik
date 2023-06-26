let teamsArr = JSON.parse(localStorage.getItem("teams"));
let playersArr = JSON.parse(localStorage.getItem("players"));

var selectedTeam = document.getElementById("selectedTeam");
for (var i = 0; i < teamsArr.length; i++) {
  selectedTeam.innerHTML += `
    <option value="${teamsArr[i].teamName}">${teamsArr[i].teamName}</option>        
    `;
}

$("#playerDetails").submit(function (e) {
  e.preventDefault();

  let selectedTeam = $("#selectedTeam").val();
  console.log(selectedTeam);

  let choosenTeam = teamsArr.filter((team) => team.teamName === selectedTeam);

  if (choosenTeam.length > 0) {
    var teamCode = choosenTeam[0].teamCode;
    console.log(teamCode);
  } else {
    console.log("Team not found");
  }

  var isPlaying = "";
  if ($("#playingStatus").val() == "true") {
    isPlaying = true;
  } else {
    isPlaying = false;
  }

  let addNewPlayer = {
    id: playersArr.length,
    playerName: $("#playerName").val(),
    from: teamCode,
    price: $("#price").val() + "Cr",
    isPlaying: isPlaying,
    description: $("#role").val(),
    playerImg: $("#imageURL").val(),
    playerTeam: $("#selectedTeam").val(),
  };

  playersArr.push(addNewPlayer);
  localStorage.setItem("players", JSON.stringify(playersArr));

  location.href = "./index.html";
});
