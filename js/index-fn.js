document.addEventListener('click', (e) => {
	var itemName = e.target.classList.item(1);
	
	gotoPage(itemName);
});

function gotoPage(item){
	switch(item){
		case "mociTest":
			location.href = "mociTest/mociTestDesc.html";
			break;
		case "metaCognitionTest":
			location.href = "metaCognitionTest/metaCognitionTestDesc.html";
			break;
		case "spotTheDifference":
			location.href = "spotTheDifference/spotTheDifferenceDesc.html";
			break;
		case "instantMemoryTest":
			location.href = "instantMemoryTest/instantMemoryTestDesc.html";
			break;
		case "literacyTest":
			location.href = "literacyTest/literacyTestDesc.html";
			break;
		case "mbtiTest1":
			location.href = "mbtiTest1/mbtiTest1Desc.html";
			break;
		case "spaceGame":
			location.href = "spaceGame/spaceGame.html";
			break;
		case "buzzwordQuiz":
			location.href = "buzzwordQuiz/buzzwordQuizDesc.html";
			break;
		case "babyanimalsQuiz":
			location.href = "babyanimalsQuiz/babyanimalsQuizDesc.html";
			break;
		case "cleanTest":
			location.href = "cleanTest/cleanscore.html";
			break;
		case "pictureDiary":
			location.href = "pictureDiary/picturediary.html";
			break;
		case "lottoPrediction":
			location.href = "lottoPrediction/lottoDraw.html";
			break;
		case "abbreviationTest":
			location.href = "abbreviationTest/abbreviation.html";
			break;
		case "surviveTest":
			location.href = "surviveTest/survivegameDesc.html";
			break;
		case "comming1":
			alert('준비 중입니다!');
			break;
		case "aiTest1":
			location.href = "aiTest1/matchIdol.html";
			break;
		case "aiTest2":
			location.href = "aiTest2/facestyle.html";
			break;
		case "aiTest3":
			location.href = "aiTest3/facelook.html";
			break;
		default:
			break;
		
	}
}

// instantMemoryTest literacyTest mbtiTest1 spaceGame buzzwordQuiz babyanimalsQuiz cleanTest pictureDiary lottoPrediction abbreviationTest
// surviveTest comming1 aiTest1 aiTest2 aiTest3 
