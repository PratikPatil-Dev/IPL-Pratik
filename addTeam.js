$(document).ready(function () {
  $("#submitBtn").click(function (event) {
    event.preventDefault();

    // Get the values from the input fields
    var teamName = $("#name").val();
    var logoUrl = $("#logo").val();
    var wonCount = $("#cnt").val();
    var code = $("#code").val();
    var topBatsman = $("#batsman").val();
    var topBowler = $("#bowler").val();

    // Use the retrieved values as needed

    let teamData = {
      championshipCount: wonCount,
      teamCode: code,
      teamIcon: logoUrl,
      teamName: teamName,
      topBatsman: topBatsman,
      topBowler: topBowler,
    };
    console.log(teamData);

    let teamsArr = JSON.parse(localStorage.getItem("teams"));
    console.log(teamsArr);

    if (teamName) {
      teamsArr.push(teamData);
      localStorage.setItem("teams", JSON.stringify(teamsArr));
    } else {
      alert("Enter team's name and logo to add your new team");
    }

    // Perform further operations or submit the form
    $("#name").val("");
    $("#logo").val("");
    $("#cnt").val("");
    $("#code").val("");
    $("#batsman").val("");
    $("#bowler").val("")

    location.href = "./index.html";
  });
});
