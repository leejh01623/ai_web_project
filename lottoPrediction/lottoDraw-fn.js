// lottoDraw.html
/////
var lottoArr, index, delay, row_num, lotto_count;
var lottoDrawSub, lottoDrawBtn, lottoDrawSub_part_timer, lottoListRow;

init();

function init() {
	lottoDrawSub = document.getElementById('lottoDrawSub');
	lottoDrawBtn = document.getElementById('lottoDrawBtn');

	row_num = 1;
	lotto_count = 0;

	newLottoListRowFunc();
}

function newLottoListRowFunc() {
	lottoListRow = document.createElement('div');
	lottoListRow.className = 'lottoListRow';
	lottoListRow.id = 'lottoListRow';
	document.getElementById('lottoList').appendChild(lottoListRow);
}

function lottoFunc() {
	lottoArr = new Array();
	index = 0;
	lottoDrawSub.innerHTML = '';
	lottoDrawSub_part_timer = '';
	delay = 0;
	lottoDrawBtn.disabled = true;

	if (lotto_count < 5) {
		lotto_count++;

		runLottoSys();
	} else if (lotto_count == 5) {
		alertFunc();
	}
}

function runLottoSys() {
	for (var i = 0; i < 7; i++) {
		var lotto = Math.floor(Math.random() * 45) + 1;

		// 중복 검사
		while (true) {
			if (lottoArr.indexOf(lotto) < 0) {
				lottoArr[index] = lotto;
				index++;
				break;
			} else {
				lotto = Math.floor(Math.random() * 45) + 1;
			}
		}
	}

	for (let j = 0; j < index; j++) {
		setTimeout(function () {
			if (0 < lottoArr[j] && lottoArr[j] < 11) {
				lottoDrawSub.innerHTML +=
					"<div class='lottoDrawSub_part' style='background-color:#fac400;'>" +
					lottoArr[j] +
					'</div>';
			} else if (10 < lottoArr[j] && lottoArr[j] < 21) {
				lottoDrawSub.innerHTML +=
					"<div class='lottoDrawSub_part' style='background-color:#69c8f2;'>" +
					lottoArr[j] +
					'</div>';
			} else if (20 < lottoArr[j] && lottoArr[j] < 31) {
				lottoDrawSub.innerHTML +=
					"<div class='lottoDrawSub_part' style='background-color:#ff7272;'>" +
					lottoArr[j] +
					'</div>';
			} else if (30 < lottoArr[j] && lottoArr[j] < 41) {
				lottoDrawSub.innerHTML +=
					"<div class='lottoDrawSub_part' style='background-color:#aaaaaa;'>" +
					lottoArr[j] +
					'</div>';
			} else if (40 < lottoArr[j] && lottoArr[j] < 46) {
				lottoDrawSub.innerHTML +=
					"<div class='lottoDrawSub_part' style='background-color:#b0d840;'>" +
					lottoArr[j] +
					'</div>';
			}

			if (j == 5) {
				lottoDrawSub.innerHTML += "<div class='lottoDrawSub_plus'> + </div>";
			}
		}, delay);
		delay = delay + 1000;
	}

	setTimeout(function () {
		lottoListRow.innerHTML += "<div class='lottoListNum'>" + row_num + '</div>';
		for (let h = 0; h < index; h++) {
			if (0 < lottoArr[h] && lottoArr[h] < 11) {
				lottoListRow.innerHTML +=
					"<div class='lottoListSub_part' style='background-color:#fac400;'>" +
					lottoArr[h] +
					'</div>';
			} else if (10 < lottoArr[h] && lottoArr[h] < 21) {
				lottoListRow.innerHTML +=
					"<div class='lottoListSub_part' style='background-color:#69c8f2;'>" +
					lottoArr[h] +
					'</div>';
			} else if (20 < lottoArr[h] && lottoArr[h] < 31) {
				lottoListRow.innerHTML +=
					"<div class='lottoListSub_part' style='background-color:#ff7272;'>" +
					lottoArr[h] +
					'</div>';
			} else if (30 < lottoArr[h] && lottoArr[h] < 41) {
				lottoListRow.innerHTML +=
					"<div class='lottoListSub_part' style='background-color:#aaaaaa;'>" +
					lottoArr[h] +
					'</div>';
			} else if (40 < lottoArr[h] && lottoArr[h] < 46) {
				lottoListRow.innerHTML +=
					"<div class='lottoListSub_part' style='background-color:#b0d840;'>" +
					lottoArr[h] +
					'</div>';
			}

			if (h == 5) {
				lottoListRow.innerHTML += "<div class='lottoListSub_plus'> + </div>";
			}
		}

		lottoListRow.innerHTML += '<br>';
		row_num++;
		lottoDrawBtn.disabled = false;
	}, 7000);
}

function alertFunc() {
	lottoDrawBtn.disabled = false;
	Swal.fire({
		title: '',
		text: '',
		html: '<b>기존 번호가 리셋됩니다.<br>계속하시겠습니까?</b>',
		icon: 'question',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: '계속',
		cancelButtonText: '취소',
		allowOutsideClick: false,
	}).then((result) => {
		if (result.isConfirmed) {
			lotto_count = 0;
			lottoListRow.remove();
			newLottoListRowFunc();
			row_num = 1;
		}
	});
}