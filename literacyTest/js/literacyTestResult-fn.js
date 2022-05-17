import { chosunKmfont, chosunSmfont, kdmfont, nanumfont, gmarketBFont, gmarketMFont } from "./literacyTestDesc-fn.js";

var loadingDiv = document.getElementById("loadingDiv");
var descBackDiv = document.getElementById("descBackDiv");
var resTitle = document.getElementById("resTitle");
var resTopTitle = document.getElementById("resTopTitle");
var resMy = document.getElementById("resMy");
var resLevel = document.getElementById("resLevel");
var resDescTitle = document.getElementById("resDescTitle");
var resDescSub = document.getElementById("resDescSub");

decodeScore();

function decodeScore(){
	var temp = location.href.split('?');
	var score = temp[1];
	
	var level = "";
	var descTitle = "";
	var descSub = "";
	
	switch(score){
		case 'f':
			level = "Lv. 0";
			descTitle = "혹시... 국적이?";
			descSub = "대한외국인";
			break;
		case 'e':
			level = "Lv. 1";
			descTitle = "아... 그거 있자나... 그거<br>하... 그거 뭐더라?";
			descSub = "어휘깜깜이";
			break;
		case 'd':
			level = "Lv. 2";
			descTitle = "영상에 길들여져 버린 당신<br>글은 이제 귀찮아!!";
			descSub = "독서싫어증";
			break;
		case 'c':
			level = "Lv. 3";
			descTitle = "아무리 여러 번을 읽어도<br>이해가 잘...";
			descSub = "쳇바퀴문해력";
			break;
		case 'b':
			level = "Lv. 4";
			descTitle = "잘 모를 땐 대충 눈치껏";
			descSub = "눈치코치<br>문해력 센스 갑";
			break;
		case 'a':
			level = "Lv. 5";
			descTitle = "짝짝짝 국어박사님!!";
			descSub = "문해력<br>만렙 능력자";
			break;
		default:
			level = "";
			descTitle = "";
			descSub = "";
			break;
	}
	
	setText(level, descTitle, descSub);
	
}

function setText(level, descTitle, descSub){
	setDefaultText();
	setLevelText(level);
	setDescTitle(descTitle);
	setDescSub(descSub);
}

function setDefaultText(){
	setFont(kdmfont, "kdm", resTitle, "15px", "normal");
	setFont(chosunKmfont, "chosunkm", resTopTitle, "33px", "normal");
	setFont(gmarketBFont, "gmarketbold", resMy, "25px", "normal");
}

function setLevelText(text){
	setFont(nanumfont, "nanum", resLevel, "50px", "normal");
	resLevel.style.color = "red";
	resLevel.innerHTML = text;
}

function setDescTitle(text){
	setFont(gmarketMFont, "gmarketmedium", resDescTitle, "15px", "normal");
	resDescTitle.style.color = "#19205e";
	resDescTitle.innerHTML = text;
}

function setDescSub(text){
	setFont(gmarketBFont, "gmarketbold", resDescSub, "35px", "normal");
	resDescSub.style.color = "#19205e";
	resDescSub.innerHTML = text;
}

function setFont(fontStyle, font, textSpan, fontSize, lineHeight){
	fontStyle.load().then(function(loaded_face) {
		// use font here
		document.fonts.add(loaded_face);
		textSpan.style.font = fontSize + "'" + font + "'";
		textSpan.style.lineHeight = lineHeight;
		//console.log(font);
	}).catch(function(error) {

	});
}

window.onload = function(){
	var restartBtn = document.getElementById("restartBtn");
    restartBtn.addEventListener('click', () => {
		location.href = "./literacyTest.html";
	});
};

document.fonts.ready.then(function() {
	//Run after all  FontFaceSets are loaded
	//console.log(document.fonts.status);
	loadingDiv.style.visibility = 'hidden';
});
