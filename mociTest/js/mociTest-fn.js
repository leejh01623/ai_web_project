var data;
var problemList;
var problemNum = 0;

var score = 0;

var mainBackDiv = document.getElementById("mainBackDiv");
var mainIntro = document.getElementById("mainIntro");
var mainProblem = document.getElementById("mainProblem");
var mainBackIntroButtonDiv = document.getElementById("mainBackIntroButtonDiv");
var mainBackLeftButtonDiv = document.getElementById("mainBackLeftButtonDiv");
var mainBackRightButtonDiv = document.getElementById("mainBackRightButtonDiv");
var mainCount = document.getElementById("mainCount");

init();

function init(){
	problemNum = 0;
	score = 0;
	
	readFile("./raw/raw.txt");
	
	setFunc();
}

function setFunc(){
	problemList = data[problemNum].split("@");
	
	if(problemNum === 0){
		// intro
		var yesNum = problemList[1].indexOf("예");
		var yesStr = problemList[1].substring(yesNum-1, yesNum+2);
		
		var introYesStr = insertText(problemList[1], yesNum-1, yesNum+2, "<span style='color: #ffcc4a;'>", "</span>");
		
		var noNum = introYesStr.indexOf("아니오");
		var noStr = introYesStr.substring(noNum-1, noNum+3);
		
		var introYesNoStr = insertText(introYesStr, noNum-1, noNum+3, "<span style='color: #ffcc4a;'>", "</span>");
		
		mainIntro.innerHTML = "<span class='main-back-intro'>" + introYesNoStr + "</span>";
		
		mainBackLeftButtonDiv.style.display = "none";
		mainBackRightButtonDiv.style.display = "none";
	} else if(problemNum === 31) {
		// result
		mainIntro.style.display = "none";
		
		mainProblem.className = "main-back-result-div";
		mainProblem.innerHTML = "<span class='main-back-result'>" + problemList[1] + "</span>";
		
		mainBackIntroButtonDiv.style.display = "block";
		mainBackIntroButtonDiv.className = "main-back-res-button-div";
		mainBackIntroButtonDiv.innerHTML = "<span class='main-back-button' id='mainIntroButton'>결과 확인</span>"
		mainBackLeftButtonDiv.style.display = "none";
		mainBackRightButtonDiv.style.display = "none";
		
		mainCount.innerHTML = "";
	} else {
		// problem
		mainIntro.style.display = "none";
		
		mainProblem.style.display = "block";
		mainProblem.innerHTML = "<span class='main-back-problem'>" + problemList[0] + ". " + problemList[1] + "</span>";
		
		mainBackIntroButtonDiv.style.display = "none";
		mainBackLeftButtonDiv.style.display = "block";
		mainBackRightButtonDiv.style.display = "block";
		
		mainCount.innerHTML = problemNum + " / 30";
	}
}

document.addEventListener('click', (e) => {
	if(e.target.id == "mainBackIntroButtonDiv" && e.target.children[0].innerText == "테스트 시작하기"){
		problemNum++;
		setFunc();
	} else if(e.target.id == "mainIntroButton" && e.target.innerText == "테스트 시작하기") {
		problemNum++;
		setFunc();
	} else if(e.target.id == "mainBackIntroButtonDiv" && e.target.children[0].innerText == "결과 확인") {
		gotoResultPage();
	} else if(e.target.id == "mainIntroButton" && e.target.innerText == "결과 확인") {
		gotoResultPage();
	} else if(e.target.id == "mainBackLeftButtonDiv" || e.target.id == "mainBackLeftButton"){
		calcScore("yes");
		problemNum++;
		setFunc();
	} else if(e.target.id == "mainBackRightButtonDiv" || e.target.id == "mainBackRightButton"){
		calcScore("no");
		problemNum++;
		setFunc();
	}
});

function calcScore(chk){
	if(chk === "yes"){
		score = score + 2;
	} else if(chk === "no"){
		score = score + 1;
	}
}

function gotoResultPage(){
	location.href = "./mociTestResult.html?" + score;
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

function insertText(str, start, end, str1, str2){
	return str.slice(0, start) + str1 + str.slice(start, end) + str2 + str.slice(end);
}
