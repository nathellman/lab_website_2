/*
	players is an array to hold each player's information.
	Fields:
		name - Football player's name
		img  - The relative/absolute path to the image file.
		alt  - The alternative text that describes the image.
		year - The student's year in college (Freshman, Sophomore, Junior, Senior).
		major- The student's current college major.
		games_played    - The number of football games the student has played for the Buffs.
		pass_yards      - The total number of passing yards in the student's football career for the Buffs.
		rushing_yards   - The total number of rushing yards in the student's football career for the Buffs.
		receiving_yards - The total number of receiving yards in the student's football career for the Buffs.
*/
var players = [{name:"John Doe", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
				{name:"James Smith", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
				{name:"Samuel Phillips", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
				{name:"Robert Myers", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];


/*
	Registration Page:
		viewStudentStats(id, toggle) method
			parameters:
				id - The css id of the html tag being updated.
				toggle -
					0 - hide the html tag
					1 - make the html tag visible

			purpose: This method will accept the id of an html tag and a toggle value.
					 The method will then set the html tag's css visibility and height.
					 To hide the html tag (toggle - 0), the visibility will be set to hidden and
					 the height will be set to 0.
					 To reveal the html tag (toggle - 1), the visibility will be set to visible and
					 the height will be set to auto.
*/

function viewStudentStats(id, toggle){
	var x = document.getElementById(id);
	if (toggle == 1)
	{
		x.style.visibility = "visible";
		x.style.height = "auto";
 	}
	else
	{
		x.style.visibility = "hidden";
		x.style.height = "0";
	}
}


/*
	Home Page:
		changeColor(color) method
			parameter:
				color- A css color

			purpose: This method will set the html body's background color to the
					 provided parameter.
*/

function changeColor(color){
	document.body.style.backgroundColor = color;
}


/*
	Football Season Stats Page:
		loadStatsPage method:
			parameters: none

			purpose: This method will iterate through the stats table and
					 do the following:
						1. Read through each row of the table & determine which team won
						   the game.

						2. Update the winner column to the name of the winning team.

						3. Keep track of the number of wins/losses for the Buffs.

						4. Update the second table to show the total number of wins/losses for the Buffs.
*/

function loadStatsPage(){
	var table = document.getElementById("stats_table");
	var row_count = 2;
	var col_count = 0;
	var totalWins = 0;
	var totalLosses = 0;
	for (row_count; row_count < table.rows.length; row_count++)
	{
		if (table.rows[row_count].cells[2].innerHTML >= table.rows[row_count].cells[3].innerHTML)
		{
			table.rows[row_count].cells[4].innerHTML = "CU Buffs";
			totalWins++;
		}
		else
		{
			table.rows[row_count].cells[4].innerHTML = table.rows[row_count].cells[1].innerHTML;
			totalLosses++;
		}
	}

	document.getElementById("wins").innerHTML = totalWins;
	document.getElementById("losses").innerHTML = totalLosses;

}

/*
	Football Player Information Page
		loadPlayersPage method:
			parameters: none

			purpose: This method will populate the dropdown menu to allow the
					 user to select which player's information to view.

					 To handle this, you will need to iterate through the players array
					 and do the following for each player:
						1. Create an anchor tag
						2. Set the href to "#", this will make sure the
							anchor tag doesn't change pages
						3. Set the onclick to call switchPlayers method
							(this will need to pass in the index inside the players array)
						4. Set the anchor tag's text to the player's name.

					After setting all of the anchor tags, update the innerHTML of the dropdown menu.
					As a note, the id for the dropdown menu is player_selector.

		switchPlayers(playerNum) method:
			parameters:
				playerNum - The index of the football player in the players array.

			purpose:
				This method will update the the spans on the player's information pageX
				and calculate the average passing, rushing, and receiving yards.

				Span ids:
					p_year     - the player's year in college
					p_major    - the player's major in college
					g_played   - the number of games played for Buffs
					player_img - the player's photo (must set src and alt)
					p_yards    - the number of passing yards
					r_yards    - the number of rushing yards
					rec_yards  - the number of receiving yards

					Calculated values:
					  avg_p_yards   - the average number of passing yards for the player's Buff career
					  avg_r_yards   - the average number of rushing yards for the player's Buff career
					  avg_rec_yards - the average number of receiving yards for the player's Buff career
*/

function loadPlayersPage()
{
	var dropdown = document.getElementById("player_selector");
	var aTag1 = document.createElement('a');
	aTag1.setAttribute('href',"#");
	aTag1.setAttribute('class',"list-group-item");
	aTag1.setAttribute('onClick',"switchPlayer(0)");
	aTag1.innerText = "Player 1";
	dropdown.appendChild(aTag1);

	var aTag2 = document.createElement('a');
	aTag2.setAttribute('href',"#");
	aTag2.setAttribute('class',"list-group-item");
	aTag2.setAttribute('onClick',"switchPlayer(1)");
	aTag2.innerText = "Player 2";
	dropdown.appendChild(aTag2);

	var aTag3 = document.createElement('a');
	aTag3.setAttribute('href',"#");
	aTag3.setAttribute('class',"list-group-item");
	aTag3.setAttribute('onClick',"switchPlayer(2)");
	aTag3.innerText = "Player 3";
	dropdown.appendChild(aTag3);

	var aTag4 = document.createElement('a');
	aTag4.setAttribute('href',"#");
	aTag4.setAttribute('class',"list-group-item");
	aTag4.setAttribute('onClick',"switchPlayer(3)");
	aTag4.innerText = "Player 4";
	dropdown.appendChild(aTag4);

}

function switchPlayer(playerNum)
{
	player = [{p_year:'Sophomore', p_major:'Art', g_played:'12', p_img:'../resources/img/player1.jpg', p_yards:'24', r_yards:'9', rec_yards:'144'},
						{p_year:'Junior', p_major:'Sciencce', g_played:'20', p_img:'../resources/img/player2.jpg', p_yards:'60', r_yards:'50', rec_yards:'30'},
						{p_year:'Senior', p_major:'Math', g_played:'25', p_img:'../resources/img/player3.jpg', p_yards:'70', r_yards:'70', rec_yards:'10'},
						{p_year:'Freshman', p_major:'History', g_played:'2', p_img:'../resources/img/player4.jpg', p_yards:'5', r_yards:'10', rec_yards:'2'}]

	document.getElementById("p_year").innerHTML = player[playerNum].p_year;
	document.getElementById("p_major").innerHTML = player[playerNum].p_major;
	document.getElementById("g_played").innerHTML = player[playerNum].g_played;
	document.getElementById("p_yards").innerHTML = player[playerNum].p_yards;
	document.getElementById("r_yards").innerHTML = player[playerNum].r_yards;
	document.getElementById("rec_yards").innerHTML = player[playerNum].rec_yards;

	var avg_p_yards = player[playerNum].p_yards/player[playerNum].g_played;
	document.getElementById("avg_p_yards").innerHTML = avg_p_yards;
	var avg_r_yards = player[playerNum].r_yards/player[playerNum].g_played;
	document.getElementById("avg_r_yards").innerHTML = avg_r_yards;
	var avg_rec_yards = player[playerNum].rec_yards/player[playerNum].g_played;
	document.getElementById("avg_rec_yards").innerHTML = avg_rec_yards;

	document.getElementById("player_img").src =  player[playerNum].p_img;

}
