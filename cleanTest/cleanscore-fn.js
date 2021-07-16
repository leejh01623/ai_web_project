// cleanscore.html
/////
var imgNum;
var startNum;
var endNum;
var noNum;
var imgArr = [
	'q1.png',
	'q2.png',
	'q3.png',
	'q4.png',
	'q5.png',
	'q6.png',
	'q7.png',
	'q8.png',
	'q9.png',
	'q10.png',
	'qres.png',
];

function init() {
	startNum = 0;
	endNum = 10;
	noNum = 0;

	setQuestion();
}

function setQuestion() {
	document.getElementById('image').innerHTML =
		"<img src='./img/" + imgArr[startNum] + "' class='cleanscore-image'>";
	if (startNum == endNum) {
		document.getElementById('nextPageBtn').innerHTML =
			"<button type='button' class='btn-res' onclick='btnResFunc();'>결과보기</button>";
	} else {
		document.getElementById('nextPageBtn').innerHTML =
			"<button type='button' class='btn-yes' onclick='btnYesFunc();'>Yes</button><button type='button' class='btn-no' onclick='btnNoFunc();'>No</button>";
	}
}

function btnYesFunc() {
	startNum++;
	//yesNum++;
	setQuestion();
}

function btnNoFunc() {
	startNum++;
	noNum++;
	setQuestion();
}

function btnResFunc() {
	location.href = 'cleanresult.html?' + noNum;
}

// cleanresulthtml
/////
var imgResArr = ['a1.png', 'a2.png', 'a3.png', 'a4.png'];
var temp = location.href.split('?');
var data = temp[1];
var curretnLink = document.location.href;
var imgUrl = './img/qres.png';

switch (data) {
	case '0':
	case '1':
	case '2':
		document.getElementById('resImg').innerHTML =
			"<img src='./img/" + imgResArr[0] + "' class='cleanres-image'>";
		break;

	case '3':
	case '4':
	case '5':
		document.getElementById('resImg').innerHTML =
			"<img src='./img/" + imgResArr[1] + "' class='cleanres-image'>";
		break;

	case '6':
	case '7':
	case '8':
		document.getElementById('resImg').innerHTML =
			"<img src='./img/" + imgResArr[2] + "' class='cleanres-image'>";
		break;

	case '9':
	case '10':
		document.getElementById('resImg').innerHTML =
			"<img src='./img/" + imgResArr[3] + "' class='cleanres-image'>";
		break;

	default:
		break;
}

function refreshFunc() {
	location.href = 'cleanscore.html';
}

Kakao.init('14052c0020a6164d5fe1b1fe4383eda7');
Kakao.Link.createDefaultButton({
	container: '#create-kakao-link-btn',
	objectType: 'feed',
	content: {
		title: '청결도 테스트',
		description: '#청결 #코로나바이러스 #개인방역 #개인위생',
		imageUrl: '',
		link: {
			mobileWebUrl: curretnLink,
			webUrl: curretnLink,
		},
	},

	//social: {
	//likeCount: 286,
	//commentCount: 45,
	//sharedCount: 845,
	//},
	buttons: [
		{
			title: '웹으로 보기',
			link: {
				mobileWebUrl: curretnLink,
				webUrl: curretnLink,
			},
		},
	],
});