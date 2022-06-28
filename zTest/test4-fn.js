// To do
// 날씨 다음 페이지 넘기기 --> 페이지 새로 안만들고 그대로 사용
// 그림 이미지 다음 페이지 넘기기
// 텍스트 다음 페이지 넘기기
// 결과페이지 꾸미기
// 메인페이지 꾸미기

// main top title height 다시 살펴보기
// 결과보기 버튼 main div 밖으로 빼기
// 다 그린 후에 결과 보기 버튼 누르면 캔버스 버튼 입력 안되게!!

// 날씨
var weatherVal = "";

// canvas 그리기
let isDrawing = false;
let isEraseCilcked = "";
let x = 0;
let y = 0;
var lineColor = "black";
var lineTmpColor = "";
var lineWidth = "5";

// title & desc
var titleText = "";
var descText = "";

// main back div
var mainBackDiv = document.getElementById("mainBackDiv");

// top
var mainTopDiv = document.getElementById("mainTopDiv");
var sunnyBtn = document.getElementById("sunnyBtn");
var cloudBtn = document.getElementById("cloudBtn");
var rainBtn = document.getElementById("rainBtn");
var snowBtn = document.getElementById("snowBtn");

// picture
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// edit
var mainEditDiv = document.getElementById("mainEditDiv");
var lineBtn1 = document.getElementById("lineBtn1");
var lineBtn2 = document.getElementById("lineBtn2");
var lineBtn3 = document.getElementById("lineBtn3");
//var colorBtn = document.getElementById("colorBtn");
var colorPicker = document.getElementById("colorPicker");
var penBtn = document.getElementById("penBtn");
var eraseBtn = document.getElementById("eraseBtn");
var allEraseBtn = document.getElementById("allEraseBtn");

// title
var mainTitleDiv = document.getElementById("mainTitleDiv");
var mainTitle = document.getElementById("mainTitle");

// desc
var mainDescDiv = document.getElementById("mainDescDiv");
var mainDesc = document.getElementById("mainDesc");
var mainDescCount = document.getElementById("mainDescCount");

// res button
var mainResBtn = document.getElementById("mainResBtn");

// canvas 크기
if(matchMedia("screen and (max-width: 700px)").matches){
	// 700px 이하 일 때
	canvas.width = 378;
	canvas.height = 248;
} else {
	// 700px 이상 일 때
	canvas.width = 658;
	canvas.height = 398;
}

/*
const canvasResize = window.matchMedia("screen and (max-width: 700px)")
canvasResize.addListener((e) => {
	console.log(e);
	if(e.matches){
		// 700px 이하 일 때
		canvas.width = 378;
		canvas.height = 398;
		console.log("aa");
	} else {
		// 700px 이상 일 때
		canvas.width = 658;
		canvas.height = 398;
		console.log("bb");
	}
});
*/

canvas.addEventListener('mousedown', e => {
	x = e.offsetX;
	y = e.offsetY;
	isDrawing = true;
});

canvas.addEventListener('mousemove', e => {
	if(isDrawing === true){
		drawLine(ctx, x, y, e.offsetX, e.offsetY);
		x = e.offsetX;
		y = e.offsetY;
	}
});

window.addEventListener('mouseup', e => {
	if(isDrawing === true){
		drawLine(ctx, x, y, e.offsetX, e.offsetY);
		x = 0;
		y = 0;
		isDrawing = false;
	}
});

function drawLine(context, x1, y1, x2, y2){
	context.beginPath();
	context.strokeStyle = lineColor;
	context.lineWidth = lineWidth;
	// butt, round, square
	context.lineCap = "round";
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.stroke();
	context.closePath();
}

sunnyBtn.addEventListener('click', (e) => {
	setClickedWeatherBtnColor(e);
	
	weatherVal = "sunny";
});

cloudBtn.addEventListener('click', (e) => {
	setClickedWeatherBtnColor(e);
	
	weatherVal = "cloud";
});

rainBtn.addEventListener('click', (e) => {
	setClickedWeatherBtnColor(e);
	
	weatherVal = "rain";
});

snowBtn.addEventListener('click', (e) => {
	setClickedWeatherBtnColor(e);
	
	weatherVal = "snow";
});

lineBtn1.addEventListener('click', () => {
	lineWidth = "5";
});

lineBtn2.addEventListener('click', () => {
	lineWidth = "15";
});

lineBtn3.addEventListener('click', () => {
	lineWidth = "25";
});

//colorBtn.addEventListener('click', (e) => {
//	setClickedEditBtnColor(e);
//});

isEraseCilcked = function(e){
	e.preventDefault(); 
	e.stopPropagation();
	return false;
}

colorPicker.addEventListener('input', (e) => {
	lineColor = e.target.value;
	lineTmpColor = e.target.value;
});

penBtn.addEventListener('click', (e) => {
	setClickedEditBtnColor(e);
	lineColor = lineTmpColor;
	colorPicker.removeEventListener('click', isEraseCilcked, true);
});

eraseBtn.addEventListener('click', (e) => {
	setClickedEditBtnColor(e);
	lineColor = "white";
	colorPicker.addEventListener('click', isEraseCilcked, true);
});

allEraseBtn.addEventListener('click', (e) => {
	//setClickedEditBtnColor(e);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
});

mainDesc.addEventListener('keyup', () => {
	descText = mainDesc.value;
	
	console.log(descText.length);
	if(descText.length > 50){
		mainDescCount.innerHTML = "50";
	} else {
		mainDescCount.innerHTML = descText.length;
	}
	
});

mainResBtn.addEventListener('click', (e) => {
	var chk = e.target.classList.item(1);
	if(chk === "res"){
		showRes();
	} else if(chk === "restart"){
		history.go(0);
	}
});

function showRes(){
	// main div
	setPcOrMobileStyle(mainBackDiv, "586", "874");
		
	// top
	mainTopDiv.innerHTML = "";
	setPcOrMobileStyle(mainTopDiv, "45", "62");
	setDayFunc();
	
	// picture
	canvas.addEventListener('mousedown', e => {
		e.preventDefault(); 
		e.stopPropagation();
		isDrawing = false;
	});
	
	// edit
	mainEditDiv.remove();
	
	// title
	mainTitleDiv.innerHTML = "";
	titleText = mainTitle.value;
	mainTitleDiv.innerHTML = "<span class='main-title'>제목 : " + titleText + "</span>";
	
	// desc
	mainDescDiv.innerHTML = "";
	setPcOrMobileStyle(mainDescDiv, "200", "300");
	mainDescDiv.style.border = "0";
	
	var tableFontSize = "";
	if(matchMedia("screen and (max-width: 700px)").matches){
		// 700px 이하 일 때
		tableFontSize = "20";
	} else {
		// 700px 이상 일 때	
		tableFontSize = "35";
	}
	
	var str = "";
	var textCount = 0;
	str = "<table>";
	for(var i=0; i<5; i++){
		str += "<tr>"
		for(var j=0; j<10; j++){
			str += "<td style='font-size: " + tableFontSize +";'>";
			str += descText.substr(textCount, 1);
			str += "</td>"
			textCount++;
		}
		str += "</tr>"
	}
	str += "</table>";
	
	mainDescDiv.innerHTML = str;
	
	// res button
	mainResBtn.innerHTML = "";
	mainResBtn.innerHTML = "<span class='main-res-button-text restart' id='mainResBtn'>다시하기</span>";
}

// PC 일 때 Mobile 일 때 div height 값
function setPcOrMobileStyle(div, mHeight, pHeight){
	if(matchMedia("screen and (max-width: 700px)").matches){
		// 700px 이하 일 때
		div.style.height = mHeight;
	} else {
		// 700px 이상 일 때	
		div.style.height = pHeight;
	}
}

function setPcOrMobileFontSize(div, num1, num2){
	if(matchMedia("screen and (max-width: 700px)").matches){
		// 700px 이하 일 때
		div.style.fontsize = num1;
	} else {
		// 700px 이상 일 때	
		div.style.fontsize = num2;
	}
}

// main top title --> 년월일요일
function setDayFunc(){
	let today = new Date();   

	let year = today.getFullYear(); 	// 년도
	let month = today.getMonth() + 1;   // 월
	let date = today.getDate();  		// 날짜
	let day = today.getDay();  			// 요일

	mainTopDiv.innerHTML = year + '. ' + month + '. ' + date;
	
	var dataStr = "";
	dataStr += "<div class='main-top-date' style='width: 14%; text-align: right;'>";
	dataStr += "<span class='main-top-date-text'>" + year + "</span>";
	dataStr += "</div>";
	dataStr += "<div class='main-top-date' style='width: 6%;'>";
	dataStr += "<span class='main-top-date-text'>년</span>";
	dataStr += "</div>";
	dataStr += "<div class='main-top-date' style='width: 10%; text-align: right;'>";
	dataStr += "<span class='main-top-date-text'>" + month + "</span>";
	dataStr += "</div>";
	dataStr += "<div class='main-top-date' style='width: 6%;'>";
	dataStr += "<span class='main-top-date-text'>월</span>";
	dataStr += "</div>";
	dataStr += "<div class='main-top-date' style='width: 10%; text-align: right;'>";
	dataStr += "<span class='main-top-date-text'>" + date + "</span>";
	dataStr += "</div>";
	dataStr += "<div class='main-top-date' style='width: 6%;'>";
	dataStr += "<span class='main-top-date-text'>일</span>";
	dataStr += "</div>";
	dataStr += "<div class='main-top-date' style='width: 9%; text-align: right;'>";
	dataStr += "<span class='main-top-date-text'>" + parseDay(day) + "</span>";
	dataStr += "</div>";
	dataStr += "<div class='main-top-date' style='width: 12%;'>";
	dataStr += "<span class='main-top-date-text'>요일</span>";
	dataStr += "</div>";
	dataStr += "<div class='main-top-date' style='width: 12%; text-align: right;'>";
	dataStr += "<span class='main-top-date-text'>날씨</span>";
	dataStr += "</div>";
	dataStr += "<div class='main-top-date' style='width: 15%;'>";
	dataStr += "<div class='main-top-date-weather'>";
	dataStr += "<img src='./img2/" + weatherVal +".png' style='width: 100%; height: 100%;'>";
	dataStr += "</div>";
	dataStr += "</div>";
	
	mainTopDiv.innerHTML = dataStr;
}

// day num --> 요일
function parseDay(num){
	var korDay = "";
	
	switch(num){
		case 1:
			korDay = "월";
			break;
		case 2:
			korDay = "화";
			break;
		case 3:
			korDay = "수";
			break;
		case 4:
			korDay = "목";
			break;
		case 5:
			korDay = "금";
			break;
		case 6:
			korDay = "토";
			break;
		case 7:
			korDay = "일";
			break;
		default:
			break;
	}
	
	return korDay;
}

// 클릭 후 버튼 색 변경 유지(날씨)
function setClickedWeatherBtnColor(e){
	var weatherBtn = document.getElementsByClassName("weather-button");
	
	for(var i=0; i<weatherBtn.length; i++){
		if(e.target.id === weatherBtn[i].id){
			weatherBtn[i].parentNode.style.backgroundColor = "#cdcfd1";
		} else {
			weatherBtn[i].parentNode.style.backgroundColor = "white";
		}
	}
}

// 클릭 후 버튼 색 변경 유지(edit)
function setClickedEditBtnColor(e){
	var editBtn = document.getElementsByClassName("edit-button");
	
	for(var i=0; i<editBtn.length; i++){
		if(e.target.id === editBtn[i].id){
			editBtn[i].parentNode.parentNode.style.backgroundColor = "#cdcfd1";
		} else {
			editBtn[i].parentNode.parentNode.style.backgroundColor = "white";
		}
	}
}