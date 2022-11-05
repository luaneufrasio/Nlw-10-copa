function createGame(player1, hour, player2) {
  return `
    <li>
        <img src="assets/icon-${player1}.svg" alt="ícone bandeira do ${player1} ">
        <strong>${hour} </strong>
        <img src="assets/icon-${player2}.svg" alt="ícone bandeira da ${player2} ">
    </li>
    `
}

let delay = 0;

function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s ">
    <h2>${date}<span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
</div>
    `
}

document.querySelector("#cards").innerHTML =
createCard("20/11", "Domingo", createGame("behrain", "13:00",
"ecuador")) +
createCard("21/11", "Segunda", createGame("england", "10:00",
"irã") + createGame("senegal", "13:00",
"netherlands")) +
  createCard(
    "24/11", 
    "quinta", 
    createGame("switzerland", "07:00", "cameroon")+
    createGame("brazil", "16:00","serbia")) +
  
    createCard("25/11", "sexta", createGame("netherlands", "13:00",
    "cameroon") + createGame("england", "16:00",
    "unitedStates"))+ 
  createCard(
    "28/11",
    "segunda",
    createGame("switzerland", "13:00", "brazil") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard("02/12", "sexta", createGame("brazil", "16:00",
  "cameroon") + createGame("southKorea", "12:00",
  "portugal"))