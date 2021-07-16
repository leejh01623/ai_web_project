// facestyle.html
/////
let URL;
var styleCount = 0;

URL = 'https://teachablemachine.withgoogle.com/models/_6b3J9Tw-/';
// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

// the link to your model provided by Teachable Machine export panel

let model, webcam, labelContainer, maxPredictions;

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
	for (let i = 0; i < maxPredictions; i++) {
		// and class labels
		labelContainer.appendChild(document.createElement('div'));
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

	for (let i = 0; i < maxPredictions; i++) {
		if (prediction[i].probability.toFixed(2) > 0.1) {
			progressBarNum = Math.round(prediction[i].probability.toFixed(2) * 100) + '%';
		} else if (prediction[i].probability.toFixed(2) >= 0.01) {
			progressBarNum = '4%';
		} else {
			progressBarNum = '2%';
		}

		if (prediction[i].className == 'Egg') {
			resTitle = '계란형';
			barColor = 'bg-primary';
		} else if (prediction[i].className == 'Circle') {
			resTitle = '둥근형';
			barColor = 'bg-success';
		} else if (prediction[i].className == 'Rhombus') {
			resTitle = '마름모형';
			barColor = 'bg-info';
		} else if (prediction[i].className == 'Triangle') {
			resTitle = '역삼각형';
			barColor = 'bg-warning';
		} else if (prediction[i].className == 'Square') {
			resTitle = '정사각형';
			barColor = 'bg-danger';
		} else if (prediction[i].className == 'Rectangle') {
			resTitle = '직사각형';
			barColor = 'bg-dark';
		}

		resLaber = "<div class='bar-label-container'>" + resTitle + '</div>';

		res =
			"<div class='bar-container'><div class='progress' style='height: 30px;'><div class='progress-bar " +
			barColor +
			"' role='progressBar' style='width:" +
			progressBarNum +
			"' aria-valuemin='0' aria-valuemax='100'><span class='d-block percent-text'>" +
			Math.round(prediction[i].probability.toFixed(2) * 100) +
			'%</span></div></div>';

		labelContainer.childNodes[i].innerHTML = resLaber + res;
	}

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
	for (let i = 0; i < styleCount; i++) {
		labelContainer.childNodes[i].innerHTML = '';
	}
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