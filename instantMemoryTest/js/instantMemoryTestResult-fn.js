var resScore = document.getElementById("resScore");
var resComment = document.getElementById("resComment");
var restartBtn = document.getElementById("restartBtn");

getScore();

// 점수 파싱
function getScore(){
	var temp = location.href.split('?');
	var score = parseInt(temp[1]);
	
	setScoreComment(score);
}

// 점수 별 코멘트 set
function setScoreComment(score){
	var comment;
	switch(score){
		case 0: case 1: case 2:
			comment = "에이...<br>장난치시는 거죠?<br>다시 한번 집중해서 도전해 보세요.";
			break;
		case 3: case 4:
			comment = "깜빡깜빡<br>금붕어 기억력...<br>우리 좀 더<br>분발해 보아요!!";
			break;
		case 5: case 6:
			comment = "조금만 더 집중해서 기억해 보는 건<br>어떨까요? ";
			break;
		case 7: case 8:
			comment = "기억력이<br>평균 이상이시군요!!";
			break;
		case 9: case 10:
			comment = "상위 1%<br>미친 기억력의<br>소유자";
			break;
		default:
			console.log("error");
			break;
	}
	var strScore = score * 10;
	resScore.innerHTML = strScore + "점";
	resComment.innerHTML = comment;
}

restartBtn.addEventListener('click', () => {
	location.href = "./instantMemoryTestDesc.html";
});