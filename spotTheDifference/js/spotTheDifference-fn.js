import {matArr1, matArr2, matArr3, matArr4, matArr5} from './spotTheDifference-mat-fn.js'

var corCount = 0;
var lifeCount = 3;
//var mainTopBackDiv = document.getElementById("mainTopBackDiv");

var life1 = document.getElementById("life1");
var life2 = document.getElementById("life2");
var life3 = document.getElementById("life3");
var timerBar = document.getElementById("timerBar");
var clock;

var imgNum = 1;
var imgLeft = document.getElementById("imgLeft");
var imgRight = document.getElementById("imgRight");
var levelText = document.getElementById("levelText");
var corCircle;
var resDivBack = document.getElementById("resDivBack");
var resDiv = document.getElementById("resDiv");
var restartBtn = document.getElementById("restartBtn");

/*
function setLife(){
	var str = "";
	for(var i=1; i<lifeCount + 1; i++){
		str += "<div class='main-top-life-div-" + i + "'>";
		str += "<img src='./img/star.png' class='main-top-life-img' id='life" + i + "'>";
		str += "</div>";
	}
	mainTopBackDiv.innerHTML = str;
}

setLife();
*/

class corMatrix {
	constructor(width, height, top, left){
		this.width = width;
		this.height = height;
		this.top = top;
		this.left = left;
	}
	
	drawCorMat(imgD, corMat){
		const corDiv = document.createElement('div');
		corDiv.style.position = "absolute";

		var rw = imgD.clientWidth * corMat.width / 450;
		var rh = imgD.clientHeight * corMat.height / 450;
		var rt = imgD.clientHeight * corMat.top / 450;
		var rl = imgD.clientWidth * corMat.left / 450;

		corDiv.style.width = rw;
		corDiv.style.height = rh;
		corDiv.style.top = rt;
		corDiv.style.left = rl;

		//corDiv.style.border = "3px solid red";
		//corDiv.style.borderRadius = "50%";
		imgD.appendChild(corDiv);
		
		corDiv.addEventListener('click', () => {
			corCount++;
			//console.log(corCount);
			
			oImgDraw(corDiv);
			
			if(corCount === 5){
				imgNum++;
				setInit();
			}
		});
	}
}

setInit();

function setInit(){
	corCount = 0;
	clearInterval(clock);
	
	if(imgNum == 6){
		showRes("success");
	} else {
		setTopFunc();
		setLeftFunc();
		setRightFunc();
		setTopClockNum();
	}
}

// 결과 화면 set
function showRes(chk){
	scrollTo(0, 0);
	
	resDivBack.style.display = "block";
	resDiv.style.display = "block";
	
	if(chk === "success"){
		resDiv.style.backgroundImage = "url('./img/res_s_back.png')";
	} else if(chk === "fail"){
		resDiv.style.backgroundImage = "url('./img/res_f_back.png')";
	}
	
	resDiv.style.backgroundSize = "100% 100%";
}

function hideRes(){
	resDivBack.style.display = "none";
	resDiv.style.display = "none";
}

// level Text set
function setTopFunc(){
	levelText.innerHTML = imgNum;
}

// 왼쪽 img set
function setLeftFunc(){
	imgLeft.innerHTML = "<img src='./img/R00" + imgNum + ".png' class='main-back-img' id='leftImg'>";
}

// 오른쪽 img set
function setRightFunc(){
	// 배경 이미지
	imgRight.innerHTML = "<img src='./img/Q00" + imgNum + ".png' class='main-back-img' id='rightImg'>";
	
	// 문제 좌표 그리기
	makeCorMat(setCorMat());
}

// 해당 좌표값을 그리기 함수로 보내기
function makeCorMat(matArr){
	var corMat;
	for(var i=0; i<matArr.length; i++){
		corMat = new corMatrix(matArr[i][0], matArr[i][1], matArr[i][2], matArr[i][3]);
		
		corMat.drawCorMat(imgRight, corMat);
	}
}

// 이미지 번호에 따른 좌표값 설정
function setCorMat(){
	var mat;
	
	switch(imgNum){
		case 1:
			mat = matArr1;
			break;
		case 2:
			mat = matArr2;
			break;
		case 3:
			mat = matArr3;
			break;
		case 4:
			mat = matArr4;
			break;
		case 5:
			mat = matArr5;
			break;
		default:
			break;
	}
	return mat;
}

document.addEventListener('click', (e) => {
	var rI = document.getElementById("rightImg");
	if(e.target && e.target.id == "rightImg"){
		lifeCount--;
		if(lifeCount === 2){
			life1.style.display = "none";
		} else if(lifeCount === 1){
			life2.style.display = "none";
		} else if(lifeCount === 0){
			life3.style.display = "none";
			rI.addEventListener('click', stopFunc, true);
			showRes("fail");
		}
		//console.log("x: " + e.offsetX + ", y: " + e.offsetY);
		xImgDraw(e.offsetX, e.offsetY);
	} else if(e.target && e.target.id == "restartBtn"){
		hideRes();
		imgNum = 1;
		lifeCount = 3;
		life1.style.display = "block";
		life2.style.display = "block";
		life3.style.display = "block";
		setInit();
	}
});

function xImgDraw(x, y){
	var xImg = document.createElement("img");
	xImg.alt = "x";
	//xImg.title = "xTitle";
	xImg.src = "./img/x1.png";
	xImg.style.position = "absolute";
	xImg.style.width = 30;
	xImg.style.height = 30;
	var t = y - 15;
	var l = x - 15;
	xImg.style.top = t;
	xImg.style.left = l;
	imgRight.appendChild(xImg);
	
	setTimeout(() => {
		imgRight.removeChild(xImg);
	}, 1500);
}

function oImgDraw(imgDiv){
	const oImg = document.createElement("img");
	oImg.alt = "o";
	//oImg.title = "xTitle";
	oImg.src = "./img/o1.png";
	oImg.style.width = "100%";
	oImg.style.height = "100%";
	imgDiv.appendChild(oImg);
}

var stopFunc = function(e) { 
	e.preventDefault(); 
	e.stopPropagation(); 
	return false; 
};


// 상단 시간 번호 set
function setTopClockNum(){
	var endTime = 100;
	var isPause = false;
	var rI = document.getElementById("rightImg");
	
	timerBar.style.width = endTime + "%";
	rI.onload = function(){
		startTimer(endTime, isPause);
	};
}

// 타이머 함수
function startTimer(endTime, isPause){
	clock = setInterval(function() {
		if(!isPause){
			endTime--;
			//console.log(endTime);
			timerBar.style.width = endTime + "%";
			//timerBar.innerHTML = endTime;
			
			if(endTime < 0){
				clearInterval(clock);
				isPause = true;
				//clockNum.innerHTML = "0";
				//setProblemText();
				showRes("fail");
			}
		}
	}, 300);
}
