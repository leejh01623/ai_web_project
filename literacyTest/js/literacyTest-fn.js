import { chosunKmfont, chosunSmfont, kdmfont, nanumfont } from "./literacyTestDesc-fn.js";

var data;
//var problemArr;
var mainTopTitle;
var mainDiv;
var mainProblem;
var problemCount = 0;
var stickerDiv;
var answerArr = [];
var score = 0;

var titleDiv;
var problemImgDiv;
var problemDiv;
var mainBottomText;

// raw.txt 읽어오기
readFile("./raw/raw.txt");

mainTopTitle = document.getElementById("mainTopTitle");
mainDiv = document.getElementById("mainDiv");
mainProblem = document.getElementById("mainProblem");
mainBottomText = document.getElementById("mainBottomText");

setMainTopTitle();

setProblem(problemCount);

setMainBottomText(problemCount);

function setMainTopTitle(){
	setFont(chosunKmfont, "chosunkm", mainTopTitle, "33px", "normal");
}

function setMainBottomText(bottomCount){
	setFont(kdmfont, "kdm", mainBottomText, "15px", "normal");
	var count = parseInt(bottomCount) + 1;
	mainBottomText.innerHTML = count + " / 10";
}

function setCorrectDiv(num, problemArr){
	var correctDiv = document.createElement('div');
	correctDiv.className = "correct";
	
	setCorrectDivAttr(num, correctDiv);
	setCorrectSubDiv(num, problemArr, correctDiv);
	
	for(var i=0; i<4; i++){
		var correctMainDiv = document.createElement('div');
		//correctMainDiv.style.border = "1px solid black";
		correctMainDiv.style.margin = "5px";
		
		// 문제 6번!!
		if(num == 5){
			correctMainDiv.style.border = "none";
			correctMainDiv.style.width = "100px";
			correctMainDiv.style.height = "100px";
			if (document.all) { // very basic browser detection
				var sFloat="styleFloat"; //ie
			} else {
				var sFloat="cssFloat"; //firefox
			}
			correctMainDiv.style[sFloat]="left";
		} else if(num == 7){
			correctMainDiv.style.width = "150px";
			correctMainDiv.style.display = "inline-block";
		}
		
		var correctMainArr = problemArr[8 + i].split('@');
		for(var j=0; j<problemArr[7]; j++){
			//var correctMainSpan = document.createElement('div');
			var correctMainSpan = "";
			var numId = parseInt(i) + 1;
			
			if(num == 5){
				if(correctMainArr[j] == "①" || correctMainArr[j] == "②" || correctMainArr[j] == "③" || correctMainArr[j] == "④"){
					
				} else {
					correctMainSpan = document.createElement('div');
					correctMainSpan.className = "a" + numId;
					
					if(correctMainArr[j] == "a6_1"){
						correctMainSpan.innerHTML = "<img src='./img/a6_img_1.png' class='a1' style='width: 100px; height: 100px; border: 1px solid black'>";
					} else if(correctMainArr[j] == "a6_2"){
						correctMainSpan.innerHTML = "<img src='./img/a6_img_2.png' class='a2' style='width: 100px; height: 100px; border: 1px solid black'>";
					} else if(correctMainArr[j] == "a6_3"){
						correctMainSpan.innerHTML = "<img src='./img/a6_img_3.png' class='a3' style='width: 100px; height: 100px; border: 1px solid black'>";
					} else if(correctMainArr[j] == "a6_4"){
						correctMainSpan.innerHTML = "<img src='./img/a6_img_4.png' class='a4' style='width: 100px; height: 100px; border: 1px solid black'>";
					}
					
					correctMainDiv.appendChild(correctMainSpan);
				}
			} else {
				correctMainSpan = document.createElement('div');
				
				if(correctMainArr[j] == "①" || correctMainArr[j] == "②" || correctMainArr[j] == "③" || correctMainArr[j] == "④"){
					setFont(kdmfont, "kdm", correctMainSpan, "15px", "1.6");
				
					correctMainSpan.style.width = "30px";
					correctMainSpan.style.display = "inline-block";
					correctMainSpan.style.textAlign = "center";
					correctMainSpan.style.verticalAlign = "top";
				} else {
					setFont(kdmfont, "kdm", correctMainSpan, "15px", "1.6");
					
					if(num == 0){
						correctMainSpan.style.width = "100px";
						correctMainSpan.style.display = "inline-block";
						correctMainSpan.style.textAlign = "center";
					} else if(num == 1){
						correctMainSpan.style.width = "100px";
						correctMainSpan.style.display = "inline-block";
						correctMainSpan.style.textAlign = "center";
					} else if(num == 3){
						correctMainSpan.style.width = "70px";
						correctMainSpan.style.display = "inline-block";
						correctMainSpan.style.textAlign = "center";
					} else if(num == 7){
						correctMainSpan.style.width = "100px";
						correctMainSpan.style.display = "inline-block";
					} else {
						correctMainSpan.style.width = "340px";
						correctMainSpan.style.display = "inline-block";
						//correctMainSpan.style.verticalAlign ="top";
					} 
				}
				
				correctMainSpan.className = "a" + numId;
				correctMainSpan.innerHTML = correctMainArr[j];
				correctMainDiv.appendChild(correctMainSpan);
			}

			// 클릭 이벤트 리스너 추가
			if(correctMainSpan != ""){
				correctMainSpan.addEventListener('click', (e) => {
					window.scrollTo(0,0);
					
					// 클릭한 후에 보기 영역 클릭 안되게 방지!!
					correctDiv.style.pointerEvents = "none";
					
					// 현재 클릭한 div의 클래스 이름 같은 것들 가져오기
					var clickedTexts = document.getElementsByClassName(e.target.className);
					for(var i=0; i<clickedTexts.length; i++){
						if(num == 5){
							if(clickedTexts[i].tagName == "IMG"){
								clickedTexts[i].style.border = "2px solid black";
							}
						} else {
							clickedTexts[i].style.fontWeight = "900";
						}
					}
					
					setScore(e.target.className, problemArr);
					
					num++;
					
					setTimeout(function() {
						initDiv(problemArr, correctDiv);
						
						if(num < 10){
							setProblem(num);
							setMainBottomText(num);
						} else {
							gotoResultPage();
						}
					}, 500);
				});
			}

		}
		correctDiv.appendChild(correctMainDiv);
	}
	
	mainProblem.appendChild(correctDiv);
}

function gotoResultPage(){
	var resScore = encodeScore();
	
	location.href = "./literacyTestResult.html?" + resScore;
}

function encodeScore(){
	var res = ""
	switch(score){
		case 0:
		case 1:
		case 2:
			res = "f";
			break;
		case 3:
			res = "e";
			break;
		case 4:
		case 5:
			res = "d";
			break;
		case 6:
		case 7:
			res = "c";
			break;
		case 8:
		case 9:
			res = "b";
			break;
		case 10:
			res = "a";
			break;
		default:
			break;
	}
	
	return res;
}

function setProblem(num){
	var problemArr = data[num].split('^');
			
	setMainDivBackground(num);
	
	setTitleDiv(num, problemArr);
	
	setProblemDiv(num, problemArr);

	setProblemDivBackground(problemArr);

	setCorrectDiv(num, problemArr);
}


// 문제 배경
function setMainDivBackground(num){
	if(num == 1){
		mainDiv.style.backgroundImage = "url('./img/main_back_2.png')";
		mainDiv.style.backgroundSize = "100% 100%";
	} else if(num == 3) {
		mainDiv.style.backgroundImage = "url('./img/main_back_4.png')";
		mainDiv.style.backgroundSize = "100% 100%";
	} else if(num == 4) {
		mainDiv.style.backgroundImage = "url('./img/main_back_5.png')";
		mainDiv.style.backgroundSize = "100% 100%";
	} else {
		mainDiv.style.background = "#F6F2E8";
	}
	
	mainDiv.style.width = "400px";
	if(num == 5){
		//mainDiv.style.height = "500px";
	} else if(num == 6){
		//mainDiv.style.height = "730px";
	} else if(num == 7) {
		//mainDiv.style.height = "630px";
	} else if(num == 8) {
		//mainDiv.style.height = "560px";
	} else if(num == 9) {
		//mainDiv.style.height = "610px";
	} else {
		//mainDiv.style.height = "450px";
	}
}

// 폰트 설정
function setFont(fontStyle, font, textSpan, fontSize, lineHeight){
	fontStyle.load().then(function(loaded_face) {
		// use font here
		document.fonts.add(loaded_face)
		textSpan.style.font = fontSize + "'" + font + "'";
		textSpan.style.lineHeight = lineHeight;
	}).catch(function(error) {

	});
}

// 문제 타이틀
function setTitleDiv(num, problemArr){
	titleDiv = document.createElement('div');
	titleDiv.style.marginTop = "10px";
	titleDiv.style.marginBottom = "10px";
	var titleSpan = document.createElement('span');
	
	setFont(chosunSmfont, "chosunsm", titleSpan, "17px", "1.6");
	
	titleSpan.innerHTML = problemArr[1];
	titleDiv.appendChild(titleSpan);
	mainProblem.appendChild(titleDiv);
}

// 문제 이미지
function setProblemDiv(num, problemArr){
	if(problemArr[2] == "N"){
		
	} else {
		problemImgDiv = document.createElement('div');
		if(num == 6){
			problemImgDiv.style.width = "300px";
			problemImgDiv.style.height = "220px";
		} else if(num == 7){
			problemImgDiv.style.width = "350px";
			problemImgDiv.style.height = "150px";
		} else if(num == 8){
			problemImgDiv.style.width = "300px";
			problemImgDiv.style.height = "250px";
		}
		
		problemImgDiv.style.margin = "0 auto";
		problemImgDiv.style.marginTop = "5px";
		problemImgDiv.style.marginBottom = "5px";
		//problemImgDiv.style.border = "1px solid black";
		problemImgDiv.style.backgroundImage = "url('./img/" + problemArr[2] + ".png')";
		problemImgDiv.style.backgroundSize = "100% 100%";
		
		mainProblem.appendChild(problemImgDiv);
	}
}

// 문제 보기 배경
function setProblemDivBackground(problemArr){
	if(problemArr[3] == "Y"){
		problemDiv = document.createElement('div');
		var problemSpan = document.createElement('span');
		problemDiv.style.background = "#e1ddd4";
		problemDiv.style.border = "1px solid black";
		problemDiv.style.marginBottom = "10px";
		problemDiv.style.padding = "10px";
		
		setFont(kdmfont, "kdm", problemSpan, "15px", "1.6");
		problemSpan.innerHTML = problemArr[4];

		problemDiv.appendChild(problemSpan);
		mainProblem.appendChild(problemDiv);
	} else if(problemArr[3] == "N"){

	}
}

// 정답 보기 유무
function setCorrectSubDiv(num, problemArr, correctDiv){
	if(problemArr[5] == "Y"){
		var correctSubDiv = document.createElement('div');
		//correctSubDiv.style.border = "1px solid black";
		correctSubDiv.style.margin = "5px";
		correctSubDiv.style.marginLeft = "35px";
		
		var correctSubArr = problemArr[6].split('@');

		for(var i=0; i<problemArr[7] - 1; i++){
			var correctSubSpan = document.createElement('div');
			
			setFont(kdmfont, "kdm", correctSubSpan, "15px", "1.6");
			
			//correctSubSpan.style.border = "1px solid black";
			correctSubSpan.style.display = "inline-block";
			
			if(num == 0){
				correctSubSpan.style.width = "100px";
				correctSubSpan.style.textAlign = "center";
			} else if(num == 1){
				correctSubSpan.style.width = "100px";
				correctSubSpan.style.textAlign = "center";
			} else if(num == 3){
				correctSubSpan.style.width = "70px";
				correctSubSpan.style.textAlign = "center";
			} else if(num == 7){
				correctSubSpan.style.width = "100px";
			} else {
				correctSubSpan.style.width = "100px";
			}
			correctSubSpan.innerHTML = correctSubArr[i];
			correctSubDiv.appendChild(correctSubSpan);
		}
		correctDiv.appendChild(correctSubDiv);
	} else if(problemArr[5] == "N"){

	}
}

// 정답 보기 div setting
function setCorrectDivAttr(num, correctDiv){
	//correctDiv.style.border = "1px solid black";

	// 문제 6번!!
	if(num == 5){
		correctDiv.style.width = "222px";
		correctDiv.style.height = "222px";
		correctDiv.style.margin = "0 auto";
	}
}

// 점수 산출
function setScore(className, problemArr){
	if(className == problemArr[13]){
		answerArr.push("O");
		score++;
	} else {
		answerArr.push("X");
	}

	//console.log(answerArr);
	//console.log(score);
}

// mainProblem Div 초기화
function initDiv(problemArr, correctDiv){
	// 타이틀 초기화
	titleDiv.parentNode.removeChild(titleDiv);
	// 문제 이미지 초기화
	if(problemArr[2] != "N"){
		problemImgDiv.parentNode.removeChild(problemImgDiv);
	}
	// 문제 배경 초기화
	if(problemArr[3] != "N"){
		problemDiv.parentNode.removeChild(problemDiv);
	}
	// 보기 초기화
	correctDiv.parentNode.removeChild(correctDiv);
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

document.fonts.ready.then(function() {
	loadingDiv.style.visibility = 'hidden';
});

