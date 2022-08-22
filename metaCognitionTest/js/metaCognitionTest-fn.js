var data;
var problemNum = 0;
var pageNum = 0;

var mainIntro = document.getElementById("mainIntro");
var mainProblem = document.getElementById("mainProblem");
var mainButton = document.getElementById("mainButton");
var mainButtonDiv = document.getElementById("mainButtonDiv");
var mainCount = document.getElementById("mainCount");

var resDivBack = document.getElementById("resDivBack");
var resDiv = document.getElementById("resDiv");
var resTextDiv = document.getElementById("resTextDiv");
var restartBtn = document.getElementById("restartBtn");

init();

function init(){
	readFile("./raw/raw.txt");
	
	if(problemNum === 8){
		showRes();
	} else {
		setIntroFunc();
	}
}

function setIntroFunc(){
	mainIntro.innerHTML = "<span class='main-back-intro'>" + data[problemNum].split("/")[1] + "</span>";
	mainButton.innerHTML = "<span class='main-back-button'>" + data[problemNum].split("/")[2] + "</span>";
	problemNum++;
}

mainButton.addEventListener('click', () => {
	mainIntro.style.display = "none";
	
	if(problemNum === 8){
		showRes();
	} else {
		var problemList = data[problemNum].split("/");
		var problemText = problemList[pageNum + 1];
		var buttonText = problemList[pageNum + 2];
		var countText = problemList[0];
		var qAndA = "";
		if(pageNum > 5){
			qAndA = "A";
			problemNum++;
			pageNum = 0;
		} else {
			qAndA = "Q" + countText;
			pageNum = pageNum + 2;
		}
		
		mainProblem.innerHTML = "<span class='main-back-problem'>" + qAndA + ". " + problemText + "</span>";
		mainButton.innerHTML = "<span class='main-back-button'>" + buttonText + "</span>";
		mainCount.innerHTML = countText + " / 7";
	}
});

restartBtn.addEventListener('click', () => {
	hideRes();
	problemNum = 0;
	setIntroFunc();
});

// 결과 화면 set
function showRes(){
	scrollTo(0, 0);
	
	resDivBack.style.display = "block";
	resDiv.style.display = "block";
	resDiv.style.backgroundSize = "100% 100%";
	
	// 결과 테이블 만들기
	var resTable = document.createElement("table");
	var resTbody = document.createElement("tbody");
	
	var row_1 = document.createElement('tr');
	var row_1_data_1 = document.createElement('td');
	row_1_data_1.innerHTML = "6개 이상";
	var row_1_data_2 = document.createElement('td');
	row_1_data_2.innerHTML = "상위 10%";
	row_1.appendChild(row_1_data_1);
	row_1.appendChild(row_1_data_2);
	resTbody.appendChild(row_1);
	
	var row_2 = document.createElement('tr');
	var row_2_data_1 = document.createElement('td');
	row_2_data_1.innerHTML = "5개";
	var row_2_data_2 = document.createElement('td');
	row_2_data_2.innerHTML = "상위 30%";
	row_2.appendChild(row_2_data_1);
	row_2.appendChild(row_2_data_2);
	resTbody.appendChild(row_2);
	
	var row_3 = document.createElement('tr');
	var row_3_data_1 = document.createElement('td');
	row_3_data_1.innerHTML = "3개 이상";
	var row_3_data_2 = document.createElement('td');
	row_3_data_2.innerHTML = "상위 50%";
	row_3.appendChild(row_3_data_1);
	row_3.appendChild(row_3_data_2);
	resTbody.appendChild(row_3);
	
	var row_4 = document.createElement('tr');
	var row_4_data_1 = document.createElement('td');
	row_4_data_1.innerHTML = "2개 이하";
	var row_4_data_2 = document.createElement('td');
	row_4_data_2.innerHTML = "하위 50%";
	row_4.appendChild(row_4_data_1);
	row_4.appendChild(row_4_data_2);
	resTbody.appendChild(row_4);
	
	resTable.appendChild(resTbody);
	resTextDiv.appendChild(resTable);
}

function hideRes(){
	mainIntro.style.display = "block";
	mainProblem.innerHTML = "";
	mainCount.innerHTML = "";
	
	resDivBack.style.display = "none";
	resDiv.style.display = "none";
	
	if (resTextDiv.hasChildNodes()) {
		resTextDiv.removeChild(resTextDiv.children[0]);
	}
}

function readFile(file){
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function ()
	{
		if(rawFile.readyState === 4)
		{
			if(rawFile.status === 200 || rawFile.status == 0)
			{
				var allText = rawFile.responseText;
				data = allText.split("\n");
			}
		}
	}
	rawFile.send(null);
}