// abbreviation.html
/////
var number_id, problem_id, answer_id, button_o_id, button_x_id;
var problem_arr = [
	'qa1.png',
	'qa2.png',
	'qa3.png',
	'qa4.png',
	'qa5.png',
	'qa6.png',
	'qa7.png',
	'qa8.png',
	'qa9.png',
	'qa10.png',
	'qares.png',
];

var problem_arr_sub_1 = [
	'아가리벌리면구라',
	'빠른태세전환',
	'스스로불러온재앙',
	'아이스바닐라라떼',
	'제목이 곧 내용이다',
	'네 말이 곧 내 말이다',
	'불타는 소통',
	'남아서 공부나 해',
	'주소불러',
	'우월한 유전자를 가진 남자',
];

var problem_arr_sub_2 = [
	'아벌써구정인가',
	'빠다먹태',
	'스트레스불태우고 재만남았다.',
	'아기를 봐라',
	'제가곧내려요',
	'니꺼가 곧 내꺼',
	'불고기와 소고기',
	'남아프리카공화국',
	'주식으로불로소득',
	'피부가 하얀 남자',
];

var answer_arr = [
	'아가리벌리면구라',
	'빠른태세전환',
	'스스로불러온재앙',
	'아이스바닐라라떼',
	'제목이 곧 내용이다',
	'네 말이 곧 내 말이다',
	'불타는 소통',
	'남아서 공부나 해',
	'주소불러',
	'우월한 유전자를 가진 남자',
];

var selectAnswer, score;
var imgNum, startNum, endNum;
var rand;

function init() {
	//number_id = document.getElementById("number_id");
	problem_id = document.getElementById('problem_id');
	answer_id = document.getElementById('answer_id');
	button_o_id = document.getElementById('button_o_id');
	button_x_id = document.getElementById('button_x_id');

	startNum = 0;
	endNum = 10;
	score = 0;
	rand = 0;

	setProblem();
}

function setProblem() {
	problem_id.innerHTML = "<img src='./img/" + problem_arr[startNum] + "' class='problem_img'>";

	if (startNum == endNum) {
		//number_id.innerHTML = "<span class='label'>< 결과보기 ></span>";
		answer_id.innerHTML =
			"<button type='button' class='button res' onclick='btnResFunc();'>결과보기</button>";
	} else {
		//number_id.innerHTML = "<span class='label'>< " + parseInt(startNum + 1) + " ></span>";

		rand = Math.floor(Math.random() * 2);
		if (rand == 0) {
			answer_id.innerHTML =
				"<button type='button' class='button o' id='button_o_id' value='" +
				problem_arr_sub_1[startNum] +
				"' onclick='btnOFunc();'>" +
				problem_arr_sub_1[startNum] +
				"</button><button type='button' class='button x' id='button_x_id' value='" +
				problem_arr_sub_2[startNum] +
				"' onclick='btnXFunc();'>" +
				problem_arr_sub_2[startNum] +
				'</button>';
		} else if (rand == 1) {
			answer_id.innerHTML =
				"<button type='button' class='button o' id='button_o_id' value='" +
				problem_arr_sub_2[startNum] +
				"' onclick='btnOFunc();'>" +
				problem_arr_sub_2[startNum] +
				"</button><button type='button' class='button x' id='button_x_id' value='" +
				problem_arr_sub_1[startNum] +
				"' onclick='btnXFunc();'>" +
				problem_arr_sub_1[startNum] +
				'</button>';
		}
	}
}

function btnOFunc() {
	selectAnswer = document.getElementById('button_o_id').value;

	if (answer_arr[startNum] == selectAnswer) {
		score++;
	}
	startNum++;
	setProblem();
}

function btnXFunc() {
	selectAnswer = document.getElementById('button_x_id').value;

	if (answer_arr[startNum] == selectAnswer) {
		score++;
	}
	startNum++;
	setProblem();
}

function btnResFunc() {
	//alert("당신의 점수는 " + score + "점입니다.");
	location.href = 'abbreviation_result.html?' + score;
}

// abbreviation_result.html
/////
var temp = location.href.split('?');
var data = temp[1];
var curretnLink = document.location.href;

document.getElementById('myscore_score').innerHTML = data + '점';
switch (data) {
	case '0':
		document.getElementById('myscore_desc').innerHTML = '아재아재 바라아재....';
		break;

	case '1':
	case '2':
		document.getElementById('myscore_desc').innerHTML = '거참 라떼와는 다르구만 하하하하';
		break;

	case '3':
	case '4':
	case '5':
		document.getElementById('myscore_desc').innerHTML = '그래 이정도 알면 됐지 뭐 만족^^';
		break;

	case '6':
	case '7':
	case '8':
	case '9':
		document.getElementById('myscore_desc').innerHTML = '내가 신조어 좀 꽤 알지 엣헴';
		break;

	case '10':
		document.getElementById('myscore_desc').innerHTML = '킹정할 수 밖에 없는 MZ세대!!';
		break;

	default:
		break;
}

function refreshFunc() {
	location.href = 'abbreviation.html';
}

Kakao.init('14052c0020a6164d5fe1b1fe4383eda7');
Kakao.Link.createDefaultButton({
	container: '#create-kakao-link-btn',
	objectType: 'feed',
	content: {
		title: '신조어 테스트',
		description: '#신조어테스트 #줄임말테스트 #인싸용어 #MZ세대용어',
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