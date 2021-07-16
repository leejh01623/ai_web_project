// matchIdol.html
/////
let URL;
var genderChk = 0;

function manFunc() {
	document.getElementById('btn-man-id').style.backgroundColor = '#0489B1';
	document.getElementById('btn-woman-id').style.backgroundColor = '#2ECCFA';

	//URL = 'https://teachablemachine.withgoogle.com/models/XwYuu4q2y/';
	URL = 'https://teachablemachine.withgoogle.com/models/bj8oXwSm1/';
	genderChk = 1;
}

function womanFunc() {
	document.getElementById('btn-woman-id').style.backgroundColor = '#0489B1';
	document.getElementById('btn-man-id').style.backgroundColor = '#2ECCFA';

	//URL = "https://teachablemachine.withgoogle.com/models/1H7FkKybJ/";
	URL = 'https://teachablemachine.withgoogle.com/models/2pxtUgxLJ/';
	genderChk = 1;
}

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
	var className = prediction[0].className;
	var className2 = prediction[1].className;
	var className3 = prediction[2].className;

	var probability = prediction[0].probability;
	var probability2 = prediction[1].probability;
	var probability3 = prediction[2].probability;

	var probability_tmp = probability * 100;
	var probability_tmp2 = probability2 * 100;
	var probability_tmp3 = probability3 * 100;

	var probability_res = probability_tmp.toFixed(1);
	var probability_res2 = probability_tmp2.toFixed(1);
	var probability_res3 = probability_tmp3.toFixed(1);

	var name;
	var name2;
	var name3;

	var res;
	var res2;
	var res3;

	if (className.indexOf('_') != -1) {
		// 문자열에 _ 포함
		var className_arr = className.split('_');
		name = className_arr[0] + ' - ' + className_arr[1];
		//name = className_arr[0] + "<br>" + className_arr[1];
	} else {
		// 문자열에 _ 포함 안함
		name = className;
	}
	if (className2.indexOf('_') != -1) {
		// 문자열에 _ 포함
		var className_arr2 = className2.split('_');
		name2 = className_arr2[0] + ' - ' + className_arr2[1];
		//name2 = className_arr2[0] + "<br>" + className_arr2[1];
	} else {
		// 문자열에 _ 포함 안함
		name2 = className2;
	}
	if (className3.indexOf('_') != -1) {
		// 문자열에 _ 포함
		var className_arr3 = className3.split('_');
		name3 = className_arr3[0] + ' - ' + className_arr3[1];
		//name3 = className_arr3[0] + "<br>" + className_arr3[1];
	} else {
		// 문자열에 _ 포함 안함
		name3 = className3;
	}

	res =
		"<span class='name'>" +
		name +
		' ' +
		probability_res +
		'%</span><br>' +
		name2 +
		' ' +
		probability_res2 +
		'%<br>' +
		name3 +
		' ' +
		probability_res3 +
		'%';

	//res = "<div class='card-deck'><div class='card text-white bg-warning mb-3' style='max-width: 18rem;'><div class='card-body'><h3 class='card-title'>" + probability_res + "%</h3><h5 class='card-text'>" + name + "</h5></div></div><div class='card text-white bg-danger mb-3' style='max-width: 18rem;'><div class='card-body'><h3 class='card-title'>" + probability_res2 + "%</h3><h5 class='card-text'>" + name2 + "</h5></div></div><div class='card text-white bg-primary mb-3' style='max-width: 18rem;'><div class='card-body'><h3 class='card-title'>" + probability_res3 + "%</h3><h5 class='card-text'>" + name3 + "</h5></div></div></div>"

	//labelContainer.childNodes[0].innerHTML = prediction[0].className;
	labelContainer.childNodes[0].innerHTML = res;

	//for (let i = 0; i < maxPredictions; i++) {
	//	const classPrediction =
	//		prediction[i].className + ': ' + prediction[i].probability.toFixed(2);
	//	labelContainer.childNodes[i].innerHTML = classPrediction;
	//}
}

function genderFunc() {
	if (genderChk == 0) {
		console.log(genderChk);
		document.getElementById('fileUpload').disabled = true;
		alert('성별을 선택해 주세요!');
		location.reload();
		//if(confirm("성별을 선택해 주세요!")){
		//	document.getElementById("fileUpload").disabled = false;
		//} else {
		//	document.getElementById("fileUpload").disabled = false;
		//}
	} else if (genderChk == 1) {
	} else if (genderChk == 2) {
	}
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
		labelContainer.childNodes[0].innerHTML = '';
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
	labelContainer.childNodes[0].innerHTML = '';
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