var resultScore = document.getElementById("resultScore");
var resultDesc = document.getElementById("resultDesc");
var restartBtnDiv = document.getElementById("restartBtnDiv");
var restartBtn = document.getElementById("restartBtn");

getScore();

function getScore(){
	var temp = location.href.split('?');
	var score = parseInt(temp[1]);
	
	setScore(score);
	setComment(score);
}

function setScore(score){
	resultScore.innerHTML = score + "점";
}

function setComment(score){
	if(score <= 43){
		resultDesc.innerHTML = "괜찮아요.<br>정상이에요.";
		resultDesc.className = "result-back-normal-desc";
		resultDesc.parentNode.className = "result-back-normal-desc-div";
		restartBtnDiv.style.top = resultDesc.parentNode.offsetTop + resultDesc.parentNode.offsetHeight;
	} else if(44 <= score && score <= 48){
		resultDesc.innerHTML = "강박행동 및 강박사고 경향이 약간 있는 편이에요.<br>원하지 않는 생각이 떠오르거나 제대로 했다는 느낌이 들 때까지 행동을 반복하여 일상생활하는 데 약간씩 불편함을 느끼지는 않나요?<br>강박증상이 더 심해지지 않도록 스스로 노력하는 자세가 필요합니다.";
	} else if(score >= 49){
		resultDesc.innerHTML = "강박행동과 강박사고가 심한 수준입니다.<br>원하지 않는 생각이 떠오르거나 제대로 했다는 느낌이 들 때까지 행동을 반복하는 바람에 일상생활에서 많은 정신적, 육체적 고통을 느끼고 있지는 않나요?<br>본인 스스로 강박행동이 심하다는 점을 인지하는 것부터가 강박행동치료의 첫걸음이에요.<br>전문가의 도움을 꼭 받아 보시길 추천합니다.";
	}
}

restartBtnDiv.addEventListener('click', () => {
	location.href = "./mociTest.html";
});

restartBtn.addEventListener('click', () => {
	location.href = "./mociTest.html";
});