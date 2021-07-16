function developingFunc() {
	alert('준비 중입니다!');
}

function gotoPage() {
	let filter = 'win16|win32|win64|mac|macintel';
	if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
		//console.log("Client platform : Mobile");
		location.href =
			'intent://playzapangi.netlify.app/picturediary.html#Intent;scheme=http;package=com.android.chrome;end';
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
			'intent://playzapangi.netlify.app/cleanscore.html#Intent;scheme=http;package=com.android.chrome;end';
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
			'intent://playzapangi.netlify.app/abbreviation.html#Intent;scheme=http;package=com.android.chrome;end';
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
			'intent://playzapangi.netlify.app/lottoDraw.html#Intent;scheme=http;package=com.android.chrome;end';
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
			'intent://playzapangi.netlify.app/survivegameDesc.html#Intent;scheme=http;package=com.android.chrome;end';
		//location.href = "picturediary.html";
	} else {
		//console.log("Client platform : PC");
		location.href = 'surviveTest/survivegameDesc.html';
	}
}

function gotoMatchIdolPage() {
	let filter = 'win16|win32|win64|mac|macintel';
	if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
		//console.log("Client platform : Mobile");
		location.href =
			'intent://playzapangi.netlify.app/matchIdol.html#Intent;scheme=http;package=com.android.chrome;end';
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
			'intent://playzapangi.netlify.app/facestyle.html#Intent;scheme=http;package=com.android.chrome;end';
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
			'intent://playzapangi.netlify.app/facelook.html#Intent;scheme=http;package=com.android.chrome;end';
		//location.href = "picturediary.html";
	} else {
		//console.log("Client platform : PC");
		location.href = 'aiTest3/facelook.html';
	}
}