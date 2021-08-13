function developingFunc() {
	alert('준비 중입니다!');
}

function gotoPage() {
	let filter = 'win16|win32|win64|mac|macintel';
	if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
		//console.log("Client platform : Mobile");
		location.href =
			'intent://playzapangi.netlify.app/pictureDiary/picturediary.html#Intent;scheme=http;package=com.android.chrome;end';
		//location.href = "picturediary.html";
	} else {
		//console.log("Client platform : PC");
		location.href = 'pictureDiary/picturediary.html';
	}
}

function gotoCleanscorePage() {
	let filter = 'win16|win32|win64|mac|macintel';
	if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
		//console.log("Client platform : Mobile");
		location.href =
			'intent://playzapangi.netlify.app/cleanTest/cleanscore.html#Intent;scheme=http;package=com.android.chrome;end';
		//location.href = "picturediary.html";
	} else {
		//console.log("Client platform : PC");
		location.href = 'cleanTest/cleanscore.html';
	}
}

function gotoAbbreviationPage() {
	let filter = 'win16|win32|win64|mac|macintel';
	if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
		//console.log("Client platform : Mobile");
		location.href =
			'intent://playzapangi.netlify.app/abbreviationTest/abbreviation.html#Intent;scheme=http;package=com.android.chrome;end';
		//location.href = "picturediary.html";
	} else {
		//console.log("Client platform : PC");
		location.href = 'abbreviationTest/abbreviation.html';
	}
}

function gotoLottoPage() {
	let filter = 'win16|win32|win64|mac|macintel';
	if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
		//console.log("Client platform : Mobile");
		location.href =
			'intent://playzapangi.netlify.app/lottoPrediction/lottoDraw.html#Intent;scheme=http;package=com.android.chrome;end';
		//location.href = "picturediary.html";
	} else {
		//console.log("Client platform : PC");
		location.href = 'lottoPrediction/lottoDraw.html';
	}
}

function gotoSurviveGamePage() {
	let filter = 'win16|win32|win64|mac|macintel';
	if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
		//console.log("Client platform : Mobile");
		location.href =
			'intent://playzapangi.netlify.app/surviveTest/survivegameDesc.html#Intent;scheme=http;package=com.android.chrome;end';
		//location.href = "picturediary.html";
	} else {
		//console.log("Client platform : PC");
		location.href = 'surviveTest/survivegameDesc.html';
	}
}

function gotobabyanimalsQuizPage() {
	let filter = 'win16|win32|win64|mac|macintel';
	if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
		//console.log("Client platform : Mobile");
		location.href =
			'intent://playzapangi.netlify.app/babyanimalsQuiz/babyanimalsQuizDesc.html#Intent;scheme=http;package=com.android.chrome;end';
		//location.href = "picturediary.html";
	} else {
		//console.log("Client platform : PC");
		location.href = 'babyanimalsQuiz/babyanimalsQuizDesc.html';
	}
}

function gotobuzzwordQuizPage() {
	let filter = 'win16|win32|win64|mac|macintel';
	if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
		//console.log("Client platform : Mobile");
		location.href =
			'intent://playzapangi.netlify.app/buzzwordQuiz/buzzwordQuizDesc.html#Intent;scheme=http;package=com.android.chrome;end';
		//location.href = "picturediary.html";
	} else {
		//console.log("Client platform : PC");
		location.href = 'buzzwordQuiz/buzzwordQuizDesc.html';
	}
}

function gotoMatchIdolPage() {
	let filter = 'win16|win32|win64|mac|macintel';
	if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
		//console.log("Client platform : Mobile");
		location.href =
			'intent://playzapangi.netlify.app/aiTest1/matchIdol.html#Intent;scheme=http;package=com.android.chrome;end';
		//location.href = "picturediary.html";
	} else {
		//console.log("Client platform : PC");
		location.href = 'aiTest1/matchIdol.html';
	}
}

function gotoFaceStylePage() {
	let filter = 'win16|win32|win64|mac|macintel';
	if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
		//console.log("Client platform : Mobile");
		location.href =
			'intent://playzapangi.netlify.app/aiTest2/facestyle.html#Intent;scheme=http;package=com.android.chrome;end';
		//location.href = "picturediary.html";
	} else {
		//console.log("Client platform : PC");
		location.href = 'aiTest2/facestyle.html';
	}
}

function gotoFaceLookPage() {
	let filter = 'win16|win32|win64|mac|macintel';
	if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
		//console.log("Client platform : Mobile");
		location.href =
			'intent://playzapangi.netlify.app/aiTest3/facelook.html#Intent;scheme=http;package=com.android.chrome;end';
		//location.href = "picturediary.html";
	} else {
		//console.log("Client platform : PC");
		location.href = 'aiTest3/facelook.html';
	}
}