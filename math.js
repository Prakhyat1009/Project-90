player1_score = 0;
player2_score = 0;

document.getElementById("score_1").innerHTML = player1_score;
document.getElementById("score_2").innerHTML = player2_score;
name1 = localStorage.getItem("Player1");
name2 = localStorage.getItem("Player2");
document.getElementById("name_1").innerHTML = name1 + " : ";
document.getElementById("name_2").innerHTML = name2 + " : ";