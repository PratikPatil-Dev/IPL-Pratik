$(document).ready(function () {
  // Search Box Sections
  const searchIcon = $("#search-icon");
  const searchInput = $("#search-input");

  // Search bar animation
  
  searchIcon.on("mouseenter", function () {
    searchInput.css("width", "200px");
    searchInput.css("background-color", "#fff");
  });

  searchInput.on("mouseenter", function () {
    searchInput.css("width", "200px");
    searchInput.css("background-color", "#fff");
  });

  searchInput.on("mouseleave", function () {
    if (searchInput.val() === "") {
      searchInput.css("width", "0");
      searchInput.css("background-color", "#1a2131");
    }
  });

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

  // Local Storage section
  const teams = [
    {
      teamCode: "MI",
      teamName: "Mumbai Indians",
      teamIcon:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Logooutline/MIoutline.png",
      topBatsman: "Rohit Sharma",
      topBowler: "Jasprit Bumrah",
      championshipCount: 5,
    },
    {
      teamCode: "CSK",
      teamName: "Chennai Super Kings",
      teamIcon:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Logooutline/CSKoutline.png",
      topBatsman: "Suresh Raina",
      topBowler: "Ravindra Jadeja",
      championshipCount: 3,
    },
    {
      teamCode: "RCB",
      teamName: "Royal Challengers Bangalore",
      teamIcon:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Logooutline/RCBoutline.png",
      topBatsman: "Virat Kohli",
      topBowler: "Yuzvendra Chahal",
      championshipCount: 0,
    },
    {
      teamCode: "KKR",
      teamName: "Kolkata Knight Riders",
      teamIcon:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Logooutline/KKRoutline.png",
      topBatsman: "Shubman Gill",
      topBowler: "Pat Cummins",
      championshipCount: 2,
    },
    {
      teamCode: "RR",
      teamName: "Rajasthan Royals",
      teamIcon:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Logooutline/RRoutline.png",
      topBatsman: "Sanju Samson",
      topBowler: "Chris Morris",
      championshipCount: 1,
    },
    {
      teamCode: "PBKS",
      teamName: "Punjab Kings",
      teamIcon:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Logooutline/PBKSoutline.png",
      topBatsman: "KL Rahul",
      topBowler: "Mohammed Shami",
      championshipCount: 0,
    },
    {
      teamCode: "DC",
      teamName: "Delhi Capitals",
      teamIcon:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/LogoOutline/DCoutline.png  ",
      topBatsman: "Shikhar Dhawan",
      topBowler: "Kagiso Rabada",
      championshipCount: 0,
    },
    {
      teamCode: "SRH",
      teamName: "Sunrisers Hyderabad",
      teamIcon:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Logooutline/SRHoutline.png",
      topBatsman: "David Warner",
      topBowler: "Rashid Khan",
      championshipCount: 1,
    },
  ];
  if (localStorage.getItem("teams") == null) {
    localStorage.setItem("teams", JSON.stringify(teams));
  }
  const players = [
    {
      id: 0,
      playerName: "Suryakumar Yadav",
      from: "MI",
      price: "12.50 Cr",
      isPlaying: true,
      description: "Batsman",
      playerImg:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/174.png",
      playerTeam: "Mumbai Indians",
    },
    {
      id: 1,
      playerName: "Tim David",
      from: "MI",
      price: "10.00 Cr",
      isPlaying: true,
      description: "Batsman",
      playerImg:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/636.png",
      playerTeam: "Mumbai Indians",
    },
    {
      id: 5,
      playerName: "Virat Kohli",
      from: "RCB",
      price: "13.00 Cr",
      isPlaying: true,
      description: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/164.png",
      playerTeam: "Royal Challengers Bangalore",
    },
    {
      id: 6,
      playerName: "Glenn Maxwell",
      from: "RCB",
      price: "10.25 Cr",
      isPlaying: true,
      description: "All-rounder",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/282.png",
      playerTeam: "Royal Challengers Bangalore",
    },
    {
      id: 7,
      playerName: "Shahbaz Ahmed",
      from: "RCB",
      price: "1.00cr",
      isPlaying: true,
      description: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/13803.png",
      playerTeam: "Royal Challengers Bangalore",
    },
    {
      id: 8,
      playerName: "Mohhamad Siraj",
      from: "RCB",
      price: "5.00cr",
      isPlaying: true,
      description: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3840.png",
      playerTeam: "Royal Challengers Bangalore",
    },
    {
      id: 9,
      playerName: "Dinesh Kartik",
      from: "RCB",
      price: "3.00cr",
      isPlaying: true,
      description: "Bowler",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/102.png",
      playerTeam: "Royal Challengers Bangalore",
    },
    {
      id: 10,
      playerName: "Rohit Sharma",
      from: "MI",
      price: "14.50 Cr",
      isPlaying: true,
      description: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/107.png",
      playerTeam: "Mumbai Indians",
    },
    {
      id: 11,
      playerName: "Ishan Kishan",
      from: "MI",
      price: "17.50 Cr",
      isPlaying: true,
      description: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2975.png",
      playerTeam: "Mumbai Indians",
    },
    {
      id: 12,
      playerName: "Jasprit Bumrah",
      from: "MI",
      price: "7.50 Cr",
      isPlaying: true,
      description: "Bowler",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1124.png",
      playerTeam: "Mumbai Indians",
    },
    {
      id: 13,
      playerName: "Mayank Markande",
      from: "MI",
      price: "1.50 Cr",
      isPlaying: true,
      description: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/4951.png",
      playerTeam: "Mumbai Indians",
    },
    {
      id: 14,
      playerName: "Rahul Budhhi",
      from: "MI",
      price: "5.00 Cr",
      isPlaying: true,
      description: "bowler",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20597.png",
      playerTeam: "Mumbai Indians",
    },
    {
      id: 15,
      playerName: "MS Dhoni",
      from: "CSK",
      price: "14.50 Cr",
      isPlaying: true,
      description: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png",
      playerTeam: "Chennai Super Kings",
    },
    {
      id: 16,
      playerName: "Dwayne Bravo",
      from: "CSK",
      price: "07.50 Cr",
      isPlaying: true,
      description: "All-rounder",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/25.png",
      playerTeam: "Chennai Super Kings",
    },
    {
      id: 17,
      playerName: "Robin Uthappa",
      from: "CSK",
      price: "02.50 Cr",
      isPlaying: true,
      description: "All-rounder",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/127.png",
      playerTeam: "Chennai Super Kings",
    },
    {
      id: 18,
      playerName: "Ambati Raydu",
      from: "CSK",
      price: "01.00 Cr",
      isPlaying: true,
      description: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/100.png",
      playerTeam: "Chennai Super Kings",
    },
    {
      id: 19,
      playerName: "Shivam Dube",
      from: "CSK",
      price: "07.50 Cr",
      isPlaying: true,
      description: "Bowler",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/5431.png",
      playerTeam: "Chennai Super Kings",
    },

    {
      id: 20,
      playerName: "Rishabh Pant",
      from: "DC",
      price: "13.50 Cr",
      isPlaying: true,
      description: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2972.png",
      playerTeam: "Delhi Capitals",
    },
    {
      id: 21,
      playerName: "Mandeep Singh",
      from: "DC",
      price: "1.50 Cr",
      isPlaying: true,
      description: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/72.png",
      playerTeam: "Delhi Capitals",
    },
    {
      id: 22,
      playerName: "Lalit Yadav",
      from: "DC",
      price: "1.50 Cr",
      isPlaying: true,
      description: "Bowler",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/6870.png",
      playerTeam: "Delhi Capitals",
    },
    {
      id: 23,
      playerName: "Prithvi shaw",
      from: "DC",
      price: "18.50 Cr",
      isPlaying: true,
      description: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3764.png",
      playerTeam: "Delhi Capitals",
    },

    {
      id: 24,
      playerName: "Jos Buttler",
      from: "RR",
      price: "07.50 Cr",
      isPlaying: true,
      description: "Bowler",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/509.png",
      playerTeam: "Rajasthan Royals",
    },
    {
      id: 25,
      playerName: "Karun Nair",
      from: "RR",
      price: "01.50 Cr",
      isPlaying: true,
      description: "Bowler",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/276.png",
      playerTeam: "Rajasthan Royals",
    },
    {
      id: 26,
      playerName: "Dhruv Jurel",
      from: "RR",
      price: "07.50 Cr",
      isPlaying: true,
      description: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20620.png",
      playerTeam: "Rajasthan Royals",
    },
    {
      id: 27,
      playerName: "Riyan Parag",
      from: "RR",
      price: "03.50 Cr",
      isPlaying: true,
      description: "Bowler",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/4445.png",
      playerTeam: "Rajasthan Royals",
    },
    {
      id: 28,
      playerName: "Devdutt Paddikal",
      from: "RR",
      price: "07.50 Cr",
      isPlaying: true,
      description: "Bowler",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/5430.png",
      playerTeam: "Rajasthan Royals",
    },
    {
      id: 29,
      playerName: "Shreyas Iyer",
      from: "KKR",
      price: "10.50 Cr",
      isPlaying: true,
      description: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1563.png",
      playerTeam: "Kolkata Knight Riders",
    },
    {
      id: 30,
      playerName: "Abhijeet Tomar",
      from: "KKR",
      price: "18.50 Cr",
      isPlaying: false,
      description: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20580.png",
      playerTeam: "Kolkata Knight Riders",
    },
    {
      id: 31,
      playerName: "Pat Cummins",
      from: "KKR",
      price: "1.50 Cr",
      isPlaying: true,
      description: "Bowler",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/488.png",
      playerTeam: "Kolkata Knight Riders",
    },
    {
      id: 32,
      playerName: "Ashok Sharma",
      from: "KKR",
      price: "18 Cr",
      isPlaying: true,
      description: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/20584.png",
      playerTeam: "Kolkata Knight Riders",
    },
    {
      id: 33,
      playerName: "Rinku Singh",
      from: "KKR",
      price: "10.50 Cr",
      isPlaying: true,
      description: "All-rounder",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3830.png",
      playerTeam: "Kolkata Knight Riders",
    },
    {
      id: 34,
      playerName: "Rahul Tripathi",
      from: "SRH",
      price: "10.50 Cr",
      isPlaying: true,
      description: "All-rounder",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3838.png",
      playerTeam: "Sunrisers Hyderabad",
    },
    {
      id: 35,
      playerName: "Anukul Sharma",
      from: "SRH",
      price: "10.50 Cr",
      isPlaying: true,
      description: "Batsman",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/3760.png",
      playerTeam: "Sunrisers Hyderabad",
    },
    {
      id: 36,
      playerName: "Abdul Samad",
      from: "SRH",
      price: "5.50 Cr",
      isPlaying: true,
      description: "Bowler",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/19352.png",
      playerTeam: "Sunrisers Hyderabad",
    },
    {
      id: 37,
      playerName: "Nicolas Pooran",
      from: "SRH",
      price: "3.50 Cr",
      isPlaying: false,
      description: "All-rounder",
      playerImg: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1703.png",
      playerTeam: "Sunrisers Hyderabad",
    },
    {
      id: 38,
      playerName: "Shikhar Dhawan",
      from: "PBKS",
      price: "10.50 Cr",
      isPlaying: true,
      description: "Batsman",
      playerImg:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/11.png",
      playerTeam: "Punjab Kings",
    },
    {
      id: 39,
      playerName: "Jitesh Sharma",
      from: "PBKS",
      price: "13.80 Cr",
      isPlaying: true,
      description: "Batsman-WK Keeper",
      playerImg:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1000.png",
      playerTeam: "Punjab Kings",
    },
    {
      id: 40,
      playerName: "Rishi Dhawan",
      from: "PBKS",
      price: "8.20 Cr",
      isPlaying: true,
      description: "All-Rounder",
      playerImg:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/996.png",
      playerTeam: "Punjab Kings",
    },
  ];
  if (localStorage.getItem("players") == null) {
    localStorage.setItem("players", JSON.stringify(players));
  }
  let teamURLs = [];

  // Team Cards Section
  let cardCont = document.getElementById("card-container");
  let teamsArr = JSON.parse(localStorage.getItem("teams"));
  // Clear the team cards container
  cardCont.innerHTML = "";
  for (let i = 0; i < teamsArr.length; i++) {
    let teamCards = `
    <a href="/teamDetails.html?id=${i}">
      <div class="team-card">
          <div class="rotateLogo">
            <img
              class="team-logo"
              src="${teamsArr[i].teamIcon}"
              alt="${teamsArr[i].teamName} logo"
            />
          </div>
          <h3 class="team-name">${teamsArr[i].teamName}</h3>
        </div>
    </a>
    `;
    cardCont.innerHTML += teamCards;
    teamURLs.push(`/teamDetails.html?id=${i}`);
  }

  console.log(teamURLs);

  // Seach function

  //function to filter teams and search players
  let search = document.getElementById("search-input");
  let searchBtn = document.getElementById("search-icon");
  let searchContainer = document.getElementsByClassName("search-container");
  let suggestedList = document.getElementsByClassName("suggested-list");

  search.addEventListener("input", handleInput);
  searchBtn.addEventListener("click", searchTeam);

  function handleInput(event) {
    const inputValue = event.target.value.toUpperCase();
    console.log(inputValue);
  }

  function searchTeam() {
    const inputValue = search.value.toUpperCase();
    for (let i = 0; i < teamsArr.length; i++) {
      if (inputValue === teamsArr[i].teamCode) {
        window.location.href = teamURLs[i];
        break;
      }
    }
  }
});
