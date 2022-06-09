var roundNum = 1;
var data;
var problemImg;
var pageCount = 0;
var score = 0;

var clockNum = document.getElementById("clockNum");
var roundText = document.getElementById("roundText");
var nextBtn = document.getElementById("nextBtn");

var mainProblemDiv = document.getElementById("mainProblemDiv");
var roundNumProgress = document.getElementById("roundNumProgress");

init();

// 초기화 함수
function init(){
	readFile("./raw/raw.txt");
	problemImg = new Image();
	
	setTopClockNum();
	setTopRoundNum();
	setProblemImg();
	setProgress();
}

// 상단 시간 번호 set
function setTopClockNum(){
	var endTime = 5;
	var isPause = false;
	clockNum.innerHTML = endTime;
	
	problemImg.onload = function(){
		if(pageCount == 0){
			startTimer(endTime, isPause);
		}
	};
}

// 타이머 함수
function startTimer(duration, isPause){
	var x = setInterval(function() {
		if(!isPause){
			
			duration--;
			clockNum.innerHTML = duration;
			
			if(duration < 0){
				clearInterval(x);
				isPause = true;
				clockNum.innerHTML = "0";
				setProblemText();
			} 
		}
	}, 1000);
}

// 상단 라운드 번호 set
function setTopRoundNum(){
	if(pageCount == 0){
		roundText.innerHTML = "Round " + roundNum;
	} else {
		roundText.innerHTML = "정답 확인!";
	}
}

// 문제 이미지 set
function setProblemImg(){
	problemImg.src = "./img/p" + roundNum + ".png";
	//mainProblemDiv.innerHTML = "<img src='./img/p" + roundNum + ".png' class='main-problem-img'>"
	mainProblemDiv.innerHTML = "<img src=" + problemImg.src + " class='main-problem-img'>"
}

// 문제 텍스트 set
function setProblemText(){
	pageCount = 1;
	var problemList = data[roundNum - 1].split("/");
	mainProblemDiv.innerHTML = "";
	mainProblemDiv.innerHTML = "<div class='problem-top-div'><span class='problem-top-text'>" + problemList[1] + "</span></div><div class='problem-bottom-div'><div><span class='problem-bottom-num num1'>①</span><span class='problem-bottom-text num1'>" + problemList[2] + "</span></div><div><span class='problem-bottom-num num2'>②</span><span class='problem-bottom-text num2'>" + problemList[3] + "</span></div><div><span class='problem-bottom-num num3'>③</span><span class='problem-bottom-text num3'>" + problemList[4] + "</span></div><div><span class='problem-bottom-num num4'>④</span><span class='problem-bottom-text num4'>" + problemList[5] + "</span></div><div><span class='problem-bottom-num num5'>⑤</span><span class='problem-bottom-text num5'>" + problemList[6] + "</span></div></div>"
}

// 문제 텍스트 click 함수
document.addEventListener('click', (e) => {
	var answer = e.target.classList.item(1);
	if(answer == "num1" || answer == "num2" || answer == "num3" || answer == "num4" || answer == "num5"){
		calcScore(answer);
		setProblemImg();
		setTopRoundNum();
		nextBtn.innerHTML = "<img src='./img/next_button.png' id='nextBtnId' style='width: 100%; height: 100%;'>";
	}
	
	// 다음 문제 함수
	if(e.target && e.target.id == "nextBtnId"){
		if(roundNum == 10){
			gotoResultPage();
		} else {
			roundNum++;
			pageCount = 0;
			setTopClockNum();
			setTopRoundNum();
			nextBtn.innerHTML = "";
			setProblemImg();
			setProgress();
		}
	}
});

// 하단 프로그래스바 set
function setProgress(){
	roundNumProgress.innerHTML = roundNum + " / 10";
	roundNumProgress.style.width = parseInt(roundNum) * 10 + "%";
}

// 점수 계산 함수
function calcScore(answer){
	var correct = data[roundNum - 1].split("/")[7];
	
	if(answer == correct){
		console.log(correct);
		score++;
	} else {
		console.log("wrong!!");
	}
}

// 결과 페이지 함수
function gotoResultPage(){
	location.href = "./instantMemoryTestResult.html?" + score;
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