// facelook.html
/////
let URL;
var styleCount = 0;

URL = 'https://teachablemachine.withgoogle.com/models/LUwzuRc2j/';
// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

// the link to your model provided by Teachable Machine export panel

let model, webcam, labelContainer, labelDescContainer, maxPredictions;

// Load the image model and setup the webcam
async function init() {
	const modelURL = URL + 'model.json';
	const metadataURL = URL + 'metadata.json';

	// load the model and metadata
	// Refer to tmImage.loadFromFiles() in the API to support files from a file picker
	// or files from your local hard drive
	// Note: the pose library adds "tmImage" object to your window (window.tmImage)
	model = await tmImage.load(modelURL, metadataURL);
	maxPredictions = model.getTotalClasses();
	styleCount = maxPredictions;
	labelContainer = document.getElementById('label-container');
	labelDescContainer = document.getElementById('label-desc-container');

	for (let i = 0; i < 1; i++) {
		// and class labels
		labelContainer.appendChild(document.createElement('div'));
		labelDescContainer.appendChild(document.createElement('div'));
	}
}

// run the webcam image through the image model
async function predict() {
	// predict can take in an image, video or canvas html element
	var img = document.getElementById('upload_img');
	const prediction = await model.predict(img, false);
	prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));

	console.log(prediction);
	// 결과값 추가
	var progressBarNum;
	var resTitle;
	var res;
	var resLaber;
	var barColor;
	var resDesc;
	var resDescDiv;

	if (prediction[0].probability.toFixed(2) > 0.1) {
		progressBarNum = Math.round(prediction[0].probability.toFixed(2) * 100) + '%';
	} else if (prediction[0].probability.toFixed(2) >= 0.01) {
		progressBarNum = '4%';
	} else {
		progressBarNum = '2%';
	}

	if (prediction[0].className == 'smile') {
		resTitle = '웃는상';
		barColor = 'bg-primary';
		resDesc =
			'“웃어라, 온 세상이 너와 함께 웃을 것이다.”<br/>지금처럼 빵끗 웃는 얼굴로 세상을 가져보자!!';
	} else if (prediction[0].className == 'sad') {
		resTitle = '울상';
		barColor = 'bg-success';
		resDesc =
			'“왜들 그리 다운돼 있어?<br/>뭐가 문제야 say something.~”<br/>힘들 때 우는 자는 삼류다.<br/>힘들 때 참는 자는 이류다.<br/>힘들 때 웃는 자가 일류다.<br/>웃는 얼굴로 일류가 되어보자:D';
	} else if (prediction[0].className == 'jin') {
		resTitle = '진상';
		barColor = 'bg-info';
		resDesc =
			'워워 릴렉스~ 릴렉스~ 인상도 좀 펴고 눈에 독기도 좀 빼고 환하게 한번 웃어보세요. 지금보다 훨씬 맘에 드는 자신의 얼굴을 발견할 수 있을 거에요 :D';
	} else if (prediction[0].className == 'eat') {
		resTitle = '먹상';
		barColor = 'bg-warning';
		resDesc =
			'먹방요정 강림!! 오늘 저녁 메뉴는 모에여?<br/>맛있는 음식과 함께 행복이 그대 위장에 가득할지어다!!';
	} else if (prediction[0].className == 'fruit') {
		resTitle = '과즙상';
		barColor = 'bg-danger';
		resDesc =
			'어머 어머 얼굴에 무슨 짓을 한 건가요?<br/>싱그러움과 상큼함이 팡팡!!<br/>생기발랄 매력 터지는 당신의 얼굴!!<br/>사랑하지 않을 수 엄쒀♥';
	} else if (prediction[0].className == 'musang') {
		resTitle = '무념무상';
		barColor = 'bg-dark';
		resDesc =
			'나는 아무 생각이 없다…<br/>왜냐하면 아무 생각이 없기 때문이다.<br/>I have no idea because I have no idea.';
	}

	resLaber = "<div class='bar-label-container'>" + resTitle + '</div>';

	res =
		"<div class='bar-container'><div class='progress' style='height: 30px;'><div class='progress-bar " +
		barColor +
		"' role='progressBar' style='width:" +
		progressBarNum +
		"' aria-valuemin='0' aria-valuemax='100'><span class='d-block percent-text' style='font-size:18pt;'>" +
		Math.round(prediction[0].probability.toFixed(2) * 100) +
		'%</span></div></div>';

	resDescDiv = "<div class='bar-desc-container'>" + resDesc + '</div>';
	labelContainer.childNodes[0].innerHTML = resLaber + res;
	labelDescContainer.childNodes[0].innerHTML = resDescDiv;

	//for(let i=0; i<maxPredictions; i++){

	//}

	//for (let i = 0; i < maxPredictions; i++) {
	//	const classPrediction =
	//		prediction[i].className + ': ' + prediction[i].probability.toFixed(2);
	//	labelContainer.childNodes[i].innerHTML = classPrediction;
	//}
}

function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			var file = e.target.result;
			var options = {
				maxWidth: 500,
				canvas: true,
				pixelRatio: window.devicePixelRatio,
				downsamplingRatio: 0.5,
				orientation: true,
			};
			if (!file) {
				return;
			}
			displayImage(file, options);

			$('.image-upload-wrap').hide();
			//$('.file-upload-image').attr('src', newFile);
			$('.file-upload-content').show();
			$('.image-title').html(input.files[0].name);
			$('#loading').show();
		};

		reader.readAsDataURL(input.files[0]);
		init().then(() => {
			predict();
			$('#loading').hide();
		});
	} else {
		removeUpload();
		for (let i = 0; i < styleCount; i++) {
			labelContainer.childNodes[i].innerHTML = '';
		}
	}
}

function displayImage(file, options) {
	currentFile = file;
	if (!loadImage(file, updateResults, options)) {
		result.children().replaceWith();
	}
}

function updateResults(img, data) {
	var fileName = currentFile.name;
	var href = img.src;
	var dataURLStart;
	var content;
	if (!(img.src || img instanceof HTMLCanvasElement)) {
	} else {
		displayMetaData(img, data);
	}
}

function displayMetaData(img, data) {
	if (!data) return;
	var exif = data.exif;
	var iptc = data.iptc;

	if (exif) {
		if (exif.get('Orientation') == null) {
			orientation = 1;
		} else {
			orientation = exif.get('Orientation');
		}
	} else {
		orientation = 1;
	}

	//alert(orientation);

	var width = img.width;
	var height = img.height;
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	if (4 < orientation && orientation < 9) {
		canvas.width = height;
		canvas.height = width;
	} else {
		canvas.width = width;
		canvas.height = height;
	}

	switch (orientation) {
		case 2:
			ctx.transform(-1, 0, 0, 1, width, 0);
			break;
		case 3:
			ctx.transform(-1, 0, 0, -1, width, height);
			break;
		case 4:
			ctx.transform(1, 0, 0, -1, 0, height);
			break;
		case 5:
			ctx.transform(0, 1, 1, 0, 0, 0);
			break;
		case 6:
			ctx.transform(0, 1, -1, 0, height, 0);
			break;
		case 7:
			ctx.transform(0, -1, -1, 0, height, width);
			break;
		case 8:
			ctx.transform(0, -1, 1, 0, 0, width);
			break;
		default:
			break;
	}

	// draw image
	ctx.drawImage(img, 0, 0);

	let dataURI = canvas.toDataURL('image/jpeg');
	document.querySelector('#upload_img').src = dataURI;
}

function removeUpload() {
	//for(let i=0; i<styleCount; i++){

	//}

	labelContainer.childNodes[0].innerHTML = '';
	labelDescContainer.childNodes[0].innerHTML = '';
	$('.file-upload-input').replaceWith($('.file-upload-input').clone());
	$('.file-upload-content').hide();
	$('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
	$('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
	$('.image-upload-wrap').removeClass('image-dropping');
});