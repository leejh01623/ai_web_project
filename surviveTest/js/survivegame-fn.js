// survivegame.html
/////
import {
	initState,
	currentState,
	crab,
	larva,
	fish,
	clam,
	scallop,
	octopus,
	abalone,
	snake,
	grasshopper,
	eel,
	deer,
	rabbit,
	rat,
	lizard,
	chicken,
	coconut_crab,
	medicinal_herbs,
	mugwort,
	sugar_cane,
	aloe,
	mushroom,
	pineapple,
	lemon,
	lime,
	blueberry,
	mango,
	guava,
	mangosteen,
	starfruit,
	durian,
	coconut,
	rain,
	valley,
	chocolate_bar,
	cola,
	hardtack,
	supplements,
	raw_fish,
	poisonous_mushroom,
	sea,
	standing,
	venomous_snake,
} from './surviveitemlist.js';

var day, day_value_p, nextDay;
var left_item_name, right_item_name, left_item_img, right_item_img;
var hungry, thirst, tan, dan, ji, vi, mu;
var state_upDown_hungry,
	state_upDown_thirst,
	state_upDown_tan,
	state_upDown_dan,
	state_upDown_ji,
	state_upDown_vi,
	state_upDown_mu;
var hungry_progress,
	thirst_progress,
	tan_progress,
	dan_progress,
	ji_progress,
	vi_progress,
	mu_progress;
var progress_bar_max = 100;
var progress_bar_min = 0;

hungry = document.getElementById('hungry');
thirst = document.getElementById('thirst');
tan = document.getElementById('tan');
dan = document.getElementById('dan');
ji = document.getElementById('ji');
vi = document.getElementById('vi');
mu = document.getElementById('mu');

//var popup = document.getElementById("popup");
//popup.addEventListener("click", setHelpPopup);

// 초기화
setInit();
setItemImage();

// 이미지 영역에 해당 카테고리의 아이템 2개 랜덤 선택
// 당연히 겹치면 안되고
// 한번 지나간건 다시 나오지 않게(? 생각좀 해보자)
// 각 카테고리별로 웨이트 다르게 해서 나오는 빈도수 조절
// 엄청 좋은 아이템과 나쁜 아이템 추가

function nextDayFunc(e) {
	var event = e || window.event;
	var cilickedItem = event.target || event.srcElement;

	console.log('nextDayFunc 시작' + cilickedItem);
	console.log(cilickedItem.title);

	// 클릭하면 다음 문제 나올 떄까지 클릭 금지
	//nextDay[0].style.pointerEvents = 'none';
	//nextDay[1].style.pointerEvents = 'none';
	left_item_name.style.pointerEvents = 'none';
	left_item_img.style.pointerEvents = 'none';
	right_item_name.style.pointerEvents = 'none';
	right_item_img.style.pointerEvents = 'none';

	switch (cilickedItem.title) {
		case '게':
			// 해당 객체를 선택했을 때 가감하는 수치(애니메이션)
			setUpdownState(crab);

			setTimeout(function () {
				// 해당 객체를 선탰했을 때 state 변화 후 결과 함수
				//setUpdateState(crab);
				// 하루가 지남에 따라 수치가 떨어지고 올라가는 함수
				//setDayUpdateState();
				// 가감 하는 수치를 보여준 후 div 삭제 함수
				//setRemoveUpdownStateDiv();
				// Day 값 설정 함수
				setNewDay(crab);
				// 아이템 설정 함수
				//setItemImage();
				// 클릭 허용 함수
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '애벌레':
			setUpdownState(larva);

			setTimeout(function () {
				setNewDay(larva);
				//setUpdateState(larva);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();

				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '물고기':
			setUpdownState(fish);

			setTimeout(function () {
				//setUpdateState(fish);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(fish);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '조개':
			setUpdownState(clam);

			setTimeout(function () {
				//setUpdateState(clam);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(clam);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '가리비':
			setUpdownState(scallop);

			setTimeout(function () {
				//setUpdateState(scallop);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(scallop);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '문어':
			setUpdownState(octopus);

			setTimeout(function () {
				//setUpdateState(octopus);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(octopus);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '전복':
			setUpdownState(abalone);

			setTimeout(function () {
				//setUpdateState(abalone);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(abalone);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '뱀':
			setUpdownState(snake);

			setTimeout(function () {
				//setUpdateState(snake);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(snake);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '메뚜기':
			setUpdownState(grasshopper);

			setTimeout(function () {
				//setUpdateState(grasshopper);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(grasshopper);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '뱀장어':
			setUpdownState(eel);

			setTimeout(function () {
				//setUpdateState(eel);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(eel);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '사슴':
			setUpdownState(deer);

			setTimeout(function () {
				//setUpdateState(deer);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(deer);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '토끼':
			setUpdownState(rabbit);

			setTimeout(function () {
				//setUpdateState(rabbit);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(rabbit);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '쥐':
			setUpdownState(rat);

			setTimeout(function () {
				//setUpdateState(rat);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(rat);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '도마뱀':
			setUpdownState(lizard);

			setTimeout(function () {
				//setUpdateState(lizard);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(lizard);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '야생닭':
			setUpdownState(chicken);

			setTimeout(function () {
				//setUpdateState(chicken);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(chicken);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '코코넛크랩':
			setUpdownState(coconut_crab);

			setTimeout(function () {
				//setUpdateState(coconut_crab);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(coconut_crab);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;

		case '약초':
			setUpdownState(medicinal_herbs);

			setTimeout(function () {
				//setUpdateState(medicinal_herbs);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(medicinal_herbs);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '쑥':
			setUpdownState(mugwort);

			setTimeout(function () {
				//setUpdateState(mugwort);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(mugwort);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '사탕수수':
			setUpdownState(sugar_cane);

			setTimeout(function () {
				//setUpdateState(sugar_cane);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(sugar_cane);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '알로에':
			setUpdownState(aloe);

			setTimeout(function () {
				//setUpdateState(aloe);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(aloe);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '버섯':
			setUpdownState(mushroom);

			setTimeout(function () {
				//setUpdateState(mushroom);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(mushroom);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '파인애플':
			setUpdownState(pineapple);

			setTimeout(function () {
				//setUpdateState(pineapple);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(pineapple);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '레몬':
			setUpdownState(lemon);

			setTimeout(function () {
				//setUpdateState(lemon);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(lemon);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '라임':
			setUpdownState(lime);

			setTimeout(function () {
				//setUpdateState(lime);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(lime);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '블루베리':
			setUpdownState(blueberry);

			setTimeout(function () {
				//setUpdateState(blueberry);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(blueberry);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '망고':
			setUpdownState(mango);

			setTimeout(function () {
				//setUpdateState(mango);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(mango);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '구아바':
			setUpdownState(guava);

			setTimeout(function () {
				//setUpdateState(guava);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(guava);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '망고스틴':
			setUpdownState(mangosteen);

			setTimeout(function () {
				//setUpdateState(mangosteen);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(mangosteen);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '스타푸르트':
			setUpdownState(starfruit);

			setTimeout(function () {
				//setUpdateState(starfruit);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(starfruit);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '두리안':
			setUpdownState(durian);

			setTimeout(function () {
				//setUpdateState(durian);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(durian);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '코코넛':
			setUpdownState(coconut);

			setTimeout(function () {
				//setUpdateState(coconut);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(coconut);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;

		case '빗물':
			setUpdownState(rain);

			setTimeout(function () {
				//setUpdateState(rain);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(rain);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '계곡물':
			setUpdownState(valley);

			setTimeout(function () {
				//setUpdateState(valley);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(valley);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '초코바':
			setUpdownState(chocolate_bar);

			setTimeout(function () {
				//setUpdateState(chocolate_bar);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(chocolate_bar);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '콜라':
			setUpdownState(cola);

			setTimeout(function () {
				//setUpdateState(cola);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(cola);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '건빵':
			setUpdownState(hardtack);

			setTimeout(function () {
				//setUpdateState(hardtack);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(hardtack);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '종합영양제':
			setUpdownState(supplements);

			setTimeout(function () {
				//setUpdateState(supplements);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(supplements);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;

		case '물고기(날생선)':
			setUpdownState(raw_fish);

			setTimeout(function () {
				//setUpdateState(raw_fish);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(raw_fish);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '독버섯':
			setUpdownState(poisonous_mushroom);

			setTimeout(function () {
				//setUpdateState(poisonous_mushroom);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(poisonous_mushroom);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '바닷물':
			setUpdownState(sea);

			setTimeout(function () {
				//setUpdateState(sea);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(sea);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '고인물':
			setUpdownState(standing);

			setTimeout(function () {
				//setUpdateState(standing);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(standing);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		case '독사':
			setUpdownState(venomous_snake);

			setTimeout(function () {
				//setUpdateState(venomous_snake);
				//setDayUpdateState();
				//setRemoveUpdownStateDiv();
				setNewDay(venomous_snake);
				//setItemImage();
				//setDisalbeClickItem();
			}, 1000);

			break;
		default:
			break;
	}

	/*
				// 클릭한 해당 객체 데이터 가져와야 됨
				if(cilickedItem.innerText == "게"){
					// 해당 날짜 업데이트 된 내 상테 (현재 상태, 해당 객체 수치)
					setUpdateState(Crab);
					console.log(currentState.hungry);
					setNewDay();
					console.log(currentState.hungry);
				} else if(cilickedItem.innerText == "망고"){
					alert("망고입니다.");
					
				} else if(cilickedItem.innerText == "물고기"){
					alert("물고기입니다.");
				} else {
					alert("aaaaaaa");
				}
				*/
}

function setDisalbeClickItem() {
	//nextDay[0].style.pointerEvents = 'auto';
	//nextDay[1].style.pointerEvents = 'auto';
	left_item_name.style.pointerEvents = 'auto';
	left_item_img.style.pointerEvents = 'auto';
	right_item_name.style.pointerEvents = 'auto';
	right_item_img.style.pointerEvents = 'auto';
}

function setItemImage() {
	var itemList = [
		[
			crab,
			larva,
			fish,
			clam,
			scallop,
			octopus,
			abalone,
			snake,
			grasshopper,
			eel,
			deer,
			rabbit,
			rat,
			lizard,
			chicken,
			coconut_crab,
		],
		[
			medicinal_herbs,
			mugwort,
			sugar_cane,
			aloe,
			mushroom,
			pineapple,
			lemon,
			lime,
			blueberry,
			mango,
			guava,
			mangosteen,
			starfruit,
			durian,
			coconut,
		],
		[rain, valley, chocolate_bar, cola, hardtack, supplements],
		[raw_fish, poisonous_mushroom, sea, standing, venomous_snake],
	];

	var weight = [7, 7, 1, 5];
	var totalweight = new Function('return ' + weight.join('+'))();
	var weighedItem = new Array();
	var currentItem = 0;

	while (currentItem < itemList.length) {
		for (let i = 0; i < weight[currentItem]; i++)
			weighedItem[weighedItem.length] = itemList[currentItem];
		currentItem++;
	}

	console.log('weighedItem : ' + weighedItem[0][0].name);

	// 왼쪽 아이템
	var randNum = Math.floor(Math.random() * totalweight);

	console.log(weighedItem[randNum].length);
	var rand_left_item = Math.floor(Math.random() * weighedItem[randNum].length);
	var left_item_value = weighedItem[randNum][rand_left_item];
	left_item_name.innerHTML = left_item_value.name;
	left_item_name.title = left_item_value.name;
	left_item_img.src = left_item_value.img;
	left_item_img.title = left_item_value.name;

	// 오른쪽 아이템
	const weighedItem_2nd = weighedItem.filter(
		(weighedItem) => !weighedItem.includes(left_item_value)
	);
	var randNum_2nd = Math.floor(Math.random() * weighedItem_2nd.length);
	var rand_right_item = Math.floor(Math.random() * weighedItem_2nd[randNum_2nd].length);
	var right_item_value = weighedItem_2nd[randNum_2nd][rand_right_item];
	right_item_name.innerHTML = right_item_value.name;
	right_item_name.title = right_item_value.name;
	right_item_img.src = right_item_value.img;
	right_item_img.title = right_item_value.name;
}

function setInit() {
	day = 1;
	day_value_p = document.getElementById('day_value_p');
	day_value_p.innerHTML = day;

	nextDay = document.getElementsByClassName('nextDay');
	console.log(nextDay);
	//nextDay[0].addEventListener("click", nextDayFunc);
	//nextDay[1].addEventListener("click", nextDayFunc);

	left_item_name = document.getElementById('left_item_name');
	left_item_name.addEventListener('click', nextDayFunc);
	left_item_img = document.getElementById('left_item_img');
	left_item_img.addEventListener('click', nextDayFunc);

	right_item_name = document.getElementById('right_item_name');
	right_item_name.addEventListener('click', nextDayFunc);
	right_item_img = document.getElementById('right_item_img');
	right_item_img.addEventListener('click', nextDayFunc);

	hungry_progress = document.getElementById('hungry_progress');
	thirst_progress = document.getElementById('thirst_progress');
	tan_progress = document.getElementById('tan_progress');
	dan_progress = document.getElementById('dan_progress');
	ji_progress = document.getElementById('ji_progress');
	vi_progress = document.getElementById('vi_progress');
	mu_progress = document.getElementById('mu_progress');

	var hungry_value = document.getElementById('hungry_value');
	hungry_value.innerHTML = initState.hungry;
	hungry_progress.innerText = initState.hungry;
	var hungry_progress_value = Number(initState.hungry) / 2;
	hungry_progress.setAttribute('aria-valuenow', hungry_progress_value);
	hungry_progress.setAttribute('style', 'width:' + hungry_progress_value + '%');
	hungry_progress.setAttribute('aria-valuemin', progress_bar_min);
	hungry_progress.setAttribute('aria-valuemax', progress_bar_max);

	var thirst_value = document.getElementById('thirst_value');
	thirst_value.innerHTML = initState.thirst;
	thirst_progress.innerText = initState.thirst;
	var thirst_progress_value = Number(initState.thirst) / 2;
	thirst_progress.setAttribute('aria-valuenow', thirst_progress_value);
	thirst_progress.setAttribute('style', 'width:' + thirst_progress_value + '%');
	thirst_progress.setAttribute('aria-valuemin', progress_bar_min);
	thirst_progress.setAttribute('aria-valuemax', progress_bar_max);

	var tan_value = document.getElementById('tan_value');
	tan_value.innerHTML = initState.tan;
	tan_progress.innerText = initState.tan;
	var tan_progress_value = Number(initState.tan) / 2;
	tan_progress.setAttribute('aria-valuenow', tan_progress_value);
	tan_progress.setAttribute('style', 'width:' + tan_progress_value + '%');
	tan_progress.setAttribute('aria-valuemin', progress_bar_min);
	tan_progress.setAttribute('aria-valuemax', progress_bar_max);

	var dan_value = document.getElementById('dan_value');
	dan_value.innerHTML = initState.dan;
	dan_progress.innerText = initState.dan;
	var dan_progress_value = Number(initState.dan) / 2;
	dan_progress.setAttribute('aria-valuenow', dan_progress_value);
	dan_progress.setAttribute('style', 'width:' + dan_progress_value + '%');
	dan_progress.setAttribute('aria-valuemin', progress_bar_min);
	dan_progress.setAttribute('aria-valuemax', progress_bar_max);

	var ji_value = document.getElementById('ji_value');
	ji_value.innerHTML = initState.ji;
	ji_progress.innerText = initState.ji;
	var ji_progress_value = Number(initState.ji) / 2;
	ji_progress.setAttribute('aria-valuenow', ji_progress_value);
	ji_progress.setAttribute('style', 'width:' + ji_progress_value + '%');
	ji_progress.setAttribute('aria-valuemin', progress_bar_min);
	ji_progress.setAttribute('aria-valuemax', progress_bar_max);

	var vi_value = document.getElementById('vi_value');
	vi_value.innerHTML = initState.vi;
	vi_progress.innerText = initState.vi;
	var vi_progress_value = Number(initState.vi) / 2;
	vi_progress.setAttribute('aria-valuenow', vi_progress_value);
	vi_progress.setAttribute('style', 'width:' + vi_progress_value + '%');
	vi_progress.setAttribute('aria-valuemin', progress_bar_min);
	vi_progress.setAttribute('aria-valuemax', progress_bar_max);

	var mu_value = document.getElementById('mu_value');
	mu_value.innerHTML = initState.mu;
	mu_progress.innerText = initState.mu;
	var mu_progress_value = Number(initState.mu) / 2;
	mu_progress.setAttribute('aria-valuenow', mu_progress_value);
	mu_progress.setAttribute('style', 'width:' + mu_progress_value + '%');
	mu_progress.setAttribute('aria-valuemin', progress_bar_min);
	mu_progress.setAttribute('aria-valuemax', progress_bar_max);
}

function setNewDay(item) {
	// 이미지 영역에서 한번 클릭할 때마다 날짜가 하루씩 지남
	day++;

	setUpdateState(item);
	setDayUpdateState();
	setRemoveUpdownStateDiv();

	// 수치 값이 -가 되는지 검사
	checkState(item);
}

// 해당 객체를 선택했을 때 가감하는 수치
function setUpdownState(item) {
	var hungry_change_value,
		thirst_change_value,
		tan_change_value,
		dan_change_value,
		ji_change_value,
		vi_change_value,
		mu_change_value;

	state_upDown_hungry = document.createElement('div');
	state_upDown_hungry.setAttribute('class', 'state_upDown');
	state_upDown_thirst = document.createElement('div');
	state_upDown_thirst.setAttribute('class', 'state_upDown');
	state_upDown_tan = document.createElement('div');
	state_upDown_tan.setAttribute('class', 'state_upDown');
	state_upDown_dan = document.createElement('div');
	state_upDown_dan.setAttribute('class', 'state_upDown');
	state_upDown_ji = document.createElement('div');
	state_upDown_ji.setAttribute('class', 'state_upDown');
	state_upDown_vi = document.createElement('div');
	state_upDown_vi.setAttribute('class', 'state_upDown');
	state_upDown_mu = document.createElement('div');
	state_upDown_mu.setAttribute('class', 'state_upDown');

	if (item.hungry >= 0) {
		hungry_change_value = '+' + item.hungry;
		state_upDown_hungry.innerHTML = "<p class='upDownPlus'>" + hungry_change_value + '</p>';
	} else {
		hungry_change_value = item.hungry;
		state_upDown_hungry.innerHTML = "<p class='upDownMinus'>" + hungry_change_value + '</p>';
	}

	if (item.thirst >= 0) {
		thirst_change_value = '+' + item.thirst;
		state_upDown_thirst.innerHTML = "<p class='upDownPlus'>" + thirst_change_value + '</p>';
	} else {
		thirst_change_value = item.thirst;
		state_upDown_thirst.innerHTML = "<p class='upDownMinus'>" + thirst_change_value + '</p>';
	}

	if (item.tan >= 0) {
		tan_change_value = '+' + item.tan;
		state_upDown_tan.innerHTML = "<p class='upDownPlus'>" + tan_change_value + '</p>';
	} else {
		tan_change_value = item.tan;
		state_upDown_tan.innerHTML = "<p class='upDownMinus'>" + tan_change_value + '</p>';
	}

	if (item.dan >= 0) {
		dan_change_value = '+' + item.dan;
		state_upDown_dan.innerHTML = "<p class='upDownPlus'>" + dan_change_value + '</p>';
	} else {
		dan_change_value = item.dan;
		state_upDown_dan.innerHTML = "<p class='upDownMinus'>" + dan_change_value + '</p>';
	}

	if (item.ji >= 0) {
		ji_change_value = '+' + item.ji;
		state_upDown_ji.innerHTML = "<p class='upDownPlus'>" + ji_change_value + '</p>';
	} else {
		ji_change_value = item.ji;
		state_upDown_ji.innerHTML = "<p class='upDownMinus'>" + ji_change_value + '</p>';
	}

	if (item.vi >= 0) {
		vi_change_value = '+' + item.vi;
		state_upDown_vi.innerHTML = "<p class='upDownPlus'>" + vi_change_value + '</p>';
	} else {
		vi_change_value = item.vi;
		state_upDown_vi.innerHTML = "<p class='upDownMinus'>" + vi_change_value + '</p>';
	}

	if (item.mu >= 0) {
		mu_change_value = '+' + item.mu;
		state_upDown_mu.innerHTML = "<p class='upDownPlus'>" + mu_change_value + '</p>';
	} else {
		mu_change_value = item.mu;
		state_upDown_mu.innerHTML = "<p class='upDownMinus'>" + mu_change_value + '</p>';
	}

	hungry.appendChild(state_upDown_hungry);
	thirst.appendChild(state_upDown_thirst);
	tan.appendChild(state_upDown_tan);
	dan.appendChild(state_upDown_dan);
	ji.appendChild(state_upDown_ji);
	vi.appendChild(state_upDown_vi);
	mu.appendChild(state_upDown_mu);
}

// 가감 하는 수치를 보여준 후 div 삭제 함수
function setRemoveUpdownStateDiv() {
	hungry.removeChild(state_upDown_hungry);
	thirst.removeChild(state_upDown_thirst);
	tan.removeChild(state_upDown_tan);
	dan.removeChild(state_upDown_dan);
	ji.removeChild(state_upDown_ji);
	vi.removeChild(state_upDown_vi);
	mu.removeChild(state_upDown_mu);
}

// 해당 객체를 선탰했을 때 state 변화
function setUpdateState(item) {
	currentState.hungry = currentState.hungry + item.hungry;
	hungry_value.innerHTML = currentState.hungry;

	currentState.thirst = currentState.thirst + item.thirst;
	thirst_value.innerHTML = currentState.thirst;

	currentState.tan = currentState.tan + item.tan;
	tan_value.innerHTML = currentState.tan;

	currentState.dan = currentState.dan + item.dan;
	dan_value.innerHTML = currentState.dan;

	currentState.ji = currentState.ji + item.ji;
	ji_value.innerHTML = currentState.ji;

	currentState.vi = currentState.vi + item.vi;
	vi_value.innerHTML = currentState.vi;

	currentState.mu = currentState.mu + item.mu;
	mu_value.innerHTML = currentState.mu;
}

// 상태 수치가 마이너스가 되는지 검사
function checkState(item) {
	console.log('checkState 시작');
	console.log('currentState.thirst : ' + currentState.thirst);
	if (currentState.hungry <= 0) {
		location.href = 'survivegameResult.html?' + day + '&hungry';
	} else if (currentState.thirst <= 0) {
		console.log('thirst 부족');
		location.href = 'survivegameResult.html?' + day + '&thirst';
	} else if (currentState.tan <= 0) {
		location.href = 'survivegameResult.html?' + day + '&tan';
	} else if (currentState.dan <= 0) {
		location.href = 'survivegameResult.html?' + day + '&dan';
	} else if (currentState.ji <= 0) {
		location.href = 'survivegameResult.html?' + day + '&ji';
	} else if (currentState.vi <= 0) {
		location.href = 'survivegameResult.html?' + day + '&vi';
	} else if (currentState.mu <= 0) {
		location.href = 'survivegameResult.html?' + day + '&mu';
	} else {
		if (day < 21) {
			//setUpdateState(item);
			//setDayUpdateState();
			//setRemoveUpdownStateDiv();

			day_value_p.innerHTML = day;
			setItemImage();
			setDisalbeClickItem();
		} else {
			location.href = 'survivegameSuccess.html?' + day + '&success';
		}
	}
}

// 매일마다 떨어지는 수치
function setDayUpdateState() {
	currentState.hungry = currentState.hungry - 10;
	hungry_value.innerHTML = currentState.hungry;
	//hungry_progress.value = currentState.hungry;
	hungry_progress.innerText = currentState.hungry;
	var hungry_progress_value = Number(currentState.hungry) / 2;
	hungry_progress.setAttribute('aria-valuenow', hungry_progress_value);
	hungry_progress.setAttribute('style', 'width:' + hungry_progress_value + '%');
	hungry_progress.setAttribute('aria-valuemin', progress_bar_min);
	hungry_progress.setAttribute('aria-valuemax', progress_bar_max);

	currentState.thirst = currentState.thirst - 10;
	thirst_value.innerHTML = currentState.thirst;
	//thirst_progress.value = currentState.thirst;
	thirst_progress.innerText = currentState.thirst;
	var thirst_progress_value = Number(currentState.thirst) / 2;
	thirst_progress.setAttribute('aria-valuenow', thirst_progress_value);
	thirst_progress.setAttribute('style', 'width:' + thirst_progress_value + '%');
	thirst_progress.setAttribute('aria-valuemin', progress_bar_min);
	thirst_progress.setAttribute('aria-valuemax', progress_bar_max);

	currentState.tan = currentState.tan - 10;
	tan_value.innerHTML = currentState.tan;
	//tan_progress.value = currentState.tan;
	tan_progress.innerText = currentState.tan;
	var tan_progress_value = Number(currentState.tan) / 2;
	tan_progress.setAttribute('aria-valuenow', tan_progress_value);
	tan_progress.setAttribute('style', 'width:' + tan_progress_value + '%');
	tan_progress.setAttribute('aria-valuemin', progress_bar_min);
	tan_progress.setAttribute('aria-valuemax', progress_bar_max);

	currentState.dan = currentState.dan - 10;
	dan_value.innerHTML = currentState.dan;
	//dan_progress.value = currentState.dan;
	dan_progress.innerText = currentState.dan;
	var dan_progress_value = Number(currentState.dan) / 2;
	dan_progress.setAttribute('aria-valuenow', dan_progress_value);
	dan_progress.setAttribute('style', 'width:' + dan_progress_value + '%');
	dan_progress.setAttribute('aria-valuemin', progress_bar_min);
	dan_progress.setAttribute('aria-valuemax', progress_bar_max);

	currentState.ji = currentState.ji - 10;
	ji_value.innerHTML = currentState.ji;
	//ji_progress.value = currentState.ji;
	ji_progress.innerText = currentState.ji;
	var ji_progress_value = Number(currentState.ji) / 2;
	ji_progress.setAttribute('aria-valuenow', ji_progress_value);
	ji_progress.setAttribute('style', 'width:' + ji_progress_value + '%');
	ji_progress.setAttribute('aria-valuemin', progress_bar_min);
	ji_progress.setAttribute('aria-valuemax', progress_bar_max);

	currentState.vi = currentState.vi - 10;
	vi_value.innerHTML = currentState.vi;
	//vi_progress.value = currentState.vi;
	vi_progress.innerText = currentState.vi;
	var vi_progress_value = Number(currentState.vi) / 2;
	vi_progress.setAttribute('aria-valuenow', vi_progress_value);
	vi_progress.setAttribute('style', 'width:' + vi_progress_value + '%');
	vi_progress.setAttribute('aria-valuemin', progress_bar_min);
	vi_progress.setAttribute('aria-valuemax', progress_bar_max);

	currentState.mu = currentState.mu - 10;
	mu_value.innerHTML = currentState.mu;
	//mu_progress.value = currentState.mu;
	mu_progress.innerText = currentState.mu;
	var mu_progress_value = Number(currentState.mu) / 2;
	mu_progress.setAttribute('aria-valuenow', mu_progress_value);
	mu_progress.setAttribute('style', 'width:' + mu_progress_value + '%');
	mu_progress.setAttribute('aria-valuemin', progress_bar_min);
	mu_progress.setAttribute('aria-valuemax', progress_bar_max);
}

// 처음 시작시 도움말 팝업
function setHelpPopup() {
	var url = 'helpPage.html';
	var name = 'test';
	var option = 'width=500, height=500, top=100, left=200, location=no, status=no, toolbar=no';
	window.open(url, name, option);
}
