// picturediary.html
/////
var canvas, context;
var lineWidthValue;
var defaultLineWidthValue;
var maxLineWidthValue, minLineWidthValue;
var defaultColor;
var strokeColor, tmpStrokeColor;
var year, month, day;
var downFileName;

function linePlusFunc() {
	defaultLineWidthValue++;

	if (defaultLineWidthValue <= maxLineWidthValue) {
		lineWidthValue.innerHTML = defaultLineWidthValue;
		context.lineWidth = defaultLineWidthValue;
	} else {
		defaultLineWidthValue = 10;
		lineWidthValue.innerHTML = 10;
	}
}

function lineMinusFunc() {
	defaultLineWidthValue--;

	if (defaultLineWidthValue >= minLineWidthValue) {
		lineWidthValue.innerHTML = defaultLineWidthValue;
		context.lineWidth = defaultLineWidthValue;
	} else {
		defaultLineWidthValue = 1;
		lineWidthValue.innerHTML = 1;
	}
}

function allClear() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function dailytextInput() {
	var bodyDiv = document.getElementById('bodyDiv');
	var bodyDivOW = bodyDiv.offsetWidth;
	var bodyDivOH = bodyDiv.offsetHeight;

	var bodyDivOWC = bodyDivOW / 2;
	var bodyDivOHC = bodyDivOH / 2;

	//alert( bodyDivOW + " : " + bodyDivOH);
	var win = window.open(
		'picturediarypopup.html',
		'PopupWin',
		'toolbar=no, location=no, status=no, menubar=no, resizable=no, directories=no, width=350, height=300, top=' +
			bodyDivOHC +
			', left=50'
	);
	//win.document.write('<div style="display: flex;border: 1px solid black;justify-content: center;align-items: center;"><textarea cols="40" rows="10" style="font-size:20pt"></textarea></div>');
}

$(function () {
	$('#shotBtn').on('click', function () {
		$('html').addClass('hide-scrollbar');

		// 캡쳐 라이브러리를 통해서 canvas 오브젝트를 받고 이미지 파일로 리턴한다.
		html2canvas(document.querySelector('#bodyDiv'), {
			scrollX: -window.scrollX,
			scrollY: -window.scrollY,
			scale: 1,
		}).then((canvas) => {
			var tmp_year, tmp_month, tmp_day;
			if (year.value == '') {
				tmp_year = '2020';
			} else {
				tmp_year = year.value;
			}

			if (month.value == '') {
				tmp_month = '1';
			} else if (month.value < 10 && month.value > 0) {
				tmp_month = numberPad(month.value, 2);
			} else {
				tmp_month = month.value;
			}

			if (day.value == '') {
				tmp_day = '1';
			} else if (day.value < 10 && day.value > 0) {
				tmp_day = numberPad(day.value, 2);
			} else {
				tmp_day = day.value;
			}

			downFileName = tmp_year + tmp_month + tmp_day + '_diary.png';
			//alert(downFileName);

			saveAs(canvas.toDataURL('image/png'), downFileName);
		});
		$('html').removeClass('hide-scrollbar');
	});
	function saveAs(uri, filename) {
		// 캡쳐된 파일을 이미지 파일로 내보낸다.
		var link = document.createElement('a');
		if (typeof link.download === 'string') {
			link.href = uri;
			link.download = filename;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} else {
			window.open(uri);
		}
	}
});

function numberPad(n, width) {
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

function colorOnClick(event) {
	context.strokeStyle = tmpStrokeColor;
}

function colorChange(event) {
	context.strokeStyle = event.target.value;
}

function removeFunc() {
	tmpStrokeColor = context.strokeStyle;
	context.strokeStyle = '#FFFFFF';
}

function init() {
	year = document.getElementById('year');
	month = document.getElementById('month');
	day = document.getElementById('day');

	defaultLineWidthValue = 3;
	maxLineWidthValue = 10;
	minLineWidthValue = 1;
	defaultColor = '#000000';

	strokeColor = document.getElementById('strokeColor');
	strokeColor.addEventListener('click', colorOnClick, false);
	strokeColor.addEventListener('change', colorChange, false);
	lineWidthValue = document.getElementById('lineWidthValue');
	canvas = document.getElementById('FRESH');

	context = canvas.getContext('2d');
	context.lineWidth = defaultLineWidthValue; // 선 굵기를 3로 설정
	context.strokeStyle = defaultColor;
	//context.lineWidth = lineRange.value;
	//context.strokeStyle = '#FF007F';

	// 마우스 리스너 등록. e는 MouseEvent 객체
	canvas.addEventListener(
		'mousemove',
		function (e) {
			move(e);
		},
		false
	);
	canvas.addEventListener(
		'touchmove',
		function (e) {
			move(e);
		},
		false
	);

	canvas.addEventListener(
		'mousedown',
		function (e) {
			down(e);
		},
		false
	);
	canvas.addEventListener(
		'touchstart',
		function (e) {
			down(e);
		},
		false
	);

	canvas.addEventListener(
		'mouseup',
		function (e) {
			up(e);
		},
		false
	);
	canvas.addEventListener(
		'touchend',
		function (e) {
			up(e);
		},
		false
	);

	canvas.addEventListener(
		'mouseout',
		function (e) {
			out(e);
		},
		false
	);
	canvas.addEventListener(
		'touchcancel',
		function (e) {
			out(e);
		},
		false
	);
}

var startX = 0,
	startY = 0; // 드래깅동안, 처음 마우스가 눌러진 좌표

var drawing = false;

function draw(curX, curY) {
	context.beginPath();
	context.moveTo(startX, startY);
	context.lineTo(curX, curY);
	context.stroke();
}

function down(e) {
	//alert(drawing);
	e.preventDefault();
	startX = e.offsetX;
	startY = e.offsetY;

	drawing = true;
}

function up(e) {
	//alert("up");
	e.preventDefault();
	drawing = false;
}

function move(e) {
	//alert(drawing);
	e.preventDefault();
	if (!drawing) return; // 마우스가 눌러지지 않았으면 리턴

	var curX, curY;
	var rect;
	if (e.type == 'touchmove') {
		rect = e.target.getBoundingClientRect();
		curX = e.targetTouches[0].clientX - rect.x;
		curY = e.targetTouches[0].clientY - rect.y;
	} else {
		curX = e.offsetX;
		curY = e.offsetY;
	}

	//alert(curX + ":" + curY);

	draw(curX, curY);

	startX = curX;
	startY = curY;
}

function out(e) {
	e.preventDefault();
	//drawing = false;
}

// picturediarypopup.html
/////
//var dailytitleTextarea = document.getElementById('dailytitleTextarea');

function init() {
	if (opener.document.getElementById('dailyParentValue').value == '') {
	} else {
		dailytitleTextarea.value = opener.document.getElementById('dailyParentValue').value;
	}
}

function textSizeChk(str, maxStr) {
	if (str.value.length > maxStr) {
		alert('글자수는 50자로 이내로 제한됩니다.');
		dailytitleTextarea.value = str.value.substring(0, 50);
	}
}

function inputFunc() {
	opener.document.getElementById('dailyParentValue').value = dailytitleTextarea.value;
	//opener.dailyParentValue = dailytitleTextarea.value;

	opener.document.getElementById('textNum1').innerHTML = dailytitleTextarea.value.substring(0, 1);
	opener.document.getElementById('textNum2').innerHTML = dailytitleTextarea.value.substring(1, 2);
	opener.document.getElementById('textNum3').innerHTML = dailytitleTextarea.value.substring(2, 3);
	opener.document.getElementById('textNum4').innerHTML = dailytitleTextarea.value.substring(3, 4);
	opener.document.getElementById('textNum5').innerHTML = dailytitleTextarea.value.substring(4, 5);
	opener.document.getElementById('textNum6').innerHTML = dailytitleTextarea.value.substring(5, 6);
	opener.document.getElementById('textNum7').innerHTML = dailytitleTextarea.value.substring(6, 7);
	opener.document.getElementById('textNum8').innerHTML = dailytitleTextarea.value.substring(7, 8);
	opener.document.getElementById('textNum9').innerHTML = dailytitleTextarea.value.substring(8, 9);
	opener.document.getElementById('textNum10').innerHTML = dailytitleTextarea.value.substring(
		9,
		10
	);

	opener.document.getElementById('textNum11').innerHTML = dailytitleTextarea.value.substring(
		10,
		11
	);
	opener.document.getElementById('textNum12').innerHTML = dailytitleTextarea.value.substring(
		11,
		12
	);
	opener.document.getElementById('textNum13').innerHTML = dailytitleTextarea.value.substring(
		12,
		13
	);
	opener.document.getElementById('textNum14').innerHTML = dailytitleTextarea.value.substring(
		13,
		14
	);
	opener.document.getElementById('textNum15').innerHTML = dailytitleTextarea.value.substring(
		14,
		15
	);
	opener.document.getElementById('textNum16').innerHTML = dailytitleTextarea.value.substring(
		15,
		16
	);
	opener.document.getElementById('textNum17').innerHTML = dailytitleTextarea.value.substring(
		16,
		17
	);
	opener.document.getElementById('textNum18').innerHTML = dailytitleTextarea.value.substring(
		17,
		18
	);
	opener.document.getElementById('textNum19').innerHTML = dailytitleTextarea.value.substring(
		18,
		19
	);
	opener.document.getElementById('textNum20').innerHTML = dailytitleTextarea.value.substring(
		19,
		20
	);

	opener.document.getElementById('textNum21').innerHTML = dailytitleTextarea.value.substring(
		20,
		21
	);
	opener.document.getElementById('textNum22').innerHTML = dailytitleTextarea.value.substring(
		21,
		22
	);
	opener.document.getElementById('textNum23').innerHTML = dailytitleTextarea.value.substring(
		22,
		23
	);
	opener.document.getElementById('textNum24').innerHTML = dailytitleTextarea.value.substring(
		23,
		24
	);
	opener.document.getElementById('textNum25').innerHTML = dailytitleTextarea.value.substring(
		24,
		25
	);
	opener.document.getElementById('textNum26').innerHTML = dailytitleTextarea.value.substring(
		25,
		26
	);
	opener.document.getElementById('textNum27').innerHTML = dailytitleTextarea.value.substring(
		26,
		27
	);
	opener.document.getElementById('textNum28').innerHTML = dailytitleTextarea.value.substring(
		27,
		28
	);
	opener.document.getElementById('textNum29').innerHTML = dailytitleTextarea.value.substring(
		28,
		29
	);
	opener.document.getElementById('textNum30').innerHTML = dailytitleTextarea.value.substring(
		29,
		30
	);

	opener.document.getElementById('textNum31').innerHTML = dailytitleTextarea.value.substring(
		30,
		31
	);
	opener.document.getElementById('textNum32').innerHTML = dailytitleTextarea.value.substring(
		31,
		32
	);
	opener.document.getElementById('textNum33').innerHTML = dailytitleTextarea.value.substring(
		32,
		33
	);
	opener.document.getElementById('textNum34').innerHTML = dailytitleTextarea.value.substring(
		33,
		34
	);
	opener.document.getElementById('textNum35').innerHTML = dailytitleTextarea.value.substring(
		34,
		35
	);
	opener.document.getElementById('textNum36').innerHTML = dailytitleTextarea.value.substring(
		35,
		36
	);
	opener.document.getElementById('textNum37').innerHTML = dailytitleTextarea.value.substring(
		36,
		37
	);
	opener.document.getElementById('textNum38').innerHTML = dailytitleTextarea.value.substring(
		37,
		38
	);
	opener.document.getElementById('textNum39').innerHTML = dailytitleTextarea.value.substring(
		38,
		39
	);
	opener.document.getElementById('textNum40').innerHTML = dailytitleTextarea.value.substring(
		39,
		40
	);

	opener.document.getElementById('textNum41').innerHTML = dailytitleTextarea.value.substring(
		40,
		41
	);
	opener.document.getElementById('textNum42').innerHTML = dailytitleTextarea.value.substring(
		41,
		42
	);
	opener.document.getElementById('textNum43').innerHTML = dailytitleTextarea.value.substring(
		42,
		43
	);
	opener.document.getElementById('textNum44').innerHTML = dailytitleTextarea.value.substring(
		43,
		44
	);
	opener.document.getElementById('textNum45').innerHTML = dailytitleTextarea.value.substring(
		44,
		45
	);
	opener.document.getElementById('textNum46').innerHTML = dailytitleTextarea.value.substring(
		45,
		46
	);
	opener.document.getElementById('textNum47').innerHTML = dailytitleTextarea.value.substring(
		46,
		47
	);
	opener.document.getElementById('textNum48').innerHTML = dailytitleTextarea.value.substring(
		47,
		48
	);
	opener.document.getElementById('textNum49').innerHTML = dailytitleTextarea.value.substring(
		48,
		49
	);
	opener.document.getElementById('textNum50').innerHTML = dailytitleTextarea.value.substring(
		49,
		50
	);

	window.close();
}

function cancelFunc() {
	window.close();
}