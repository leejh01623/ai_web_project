// 글자길이에 맞춰서 배경 메모 늘리기
//var offsetHeight = document.getElementById('res_back_id').offsetHeight;
//var changeHeight = offsetHeight + 50;

//document.getElementById("res_back_id").style.height = changeHeight + 'px';

//console.log(window.location.href);
//var currentURL = decodeURIComponent(window.location.href);
//console.log(currentURL);

//var addthis_share = {
//	url : currentURL,
//	title : "BBBBBBBBBB"
//}

// 넘어온 값 파싱
//const params = window.location.search;
//var num = parseInt(getParameterByName('num'));
//var me = getParameterByName('me');

//var param = getParameterByName('num');

// ?param=12&e
const params = window.location.search;
console.log(params);

var data = params.split('=');
//12e
console.log(data);

//var temp = location.href.split('?');
//var data = temp[1];

var num = parseInt(data[1].slice(0, -1));
var me = data[1].substr(data[1].length-1, 1);
console.log(num);
console.log(me);

//var temp = data[1].split('@');
//console.log(temp);

//var num = parseInt(temp[0]);
//console.log(num);

//var me = temp[1];
//console.log(me);

var res_arr;
var title, subtitle, tag, desc, jinro, job_1_title, job_1_desc, job_2_title, job_2_desc;
var mun_e_text_1, mun_e_text_2;

title = document.getElementById("res_center_title_text_id");
subtitle = document.getElementById("res_center_subtitle_text_id");
tag = document.getElementById("res_center_tag_text_id");
desc = document.getElementById("res_center_desc_text_id");
jinro = document.getElementById("res-center-jinro-desc-text_id");
job_1_title = document.getElementById("res-center-job-1-title-text_id");
job_1_desc = document.getElementById("res-center-job-1-desc-text_id");
job_2_title = document.getElementById("res-center-job-2-title-text_id");
job_2_desc = document.getElementById("res-center-job-2-desc-text_id");

// mbtiTestRes.txt 읽어오기
readFile("./raw/mbtiTestRes.txt");

// 문과 이과 체크해서 해당 타이틀 값 입력
munEChkFunc();

// 파싱한 값을 MBTI Type으로 변환 및 내용 입력
setMBTIType();


// 문과 이과 체크
function munEChkFunc(){
	// 1: 문과  2: 이과
	if(me == "m"){
		mun_e_text_1 = "지금 문과인 당신에게는";
		mun_e_text_2 = "내가 만약 이과라면?";
	} else if(me == "e"){
		mun_e_text_1 = "지금 이과인 당신에게는";
		mun_e_text_2 = "내가 만약 문과라면?";
	}

	job_1_title.innerHTML = mun_e_text_1;
	job_2_title.innerHTML = mun_e_text_2;
}

function readFile(file){
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function ()
	{
		if(rawFile.readyState === 4)
		{
			if(rawFile.status === 200 || rawFile.status == 0)
			{
				var allText = rawFile.responseText;
				res_arr = allText.split("\n");
			}
		}
	}
	rawFile.send(null);
}

// 해당 MBTI Type 별 내용 입력
function setMBTIRes(type){
	var res_sub_arr;

	for(var i=0; i<res_arr.length; i++){
		res_sub_arr = res_arr[i].split("/");

		if(res_sub_arr[0] == type){
			title.innerHTML = res_sub_arr[0];
			subtitle.innerHTML = res_sub_arr[1];
			tag.innerHTML = res_sub_arr[2];
			desc.innerHTML = res_sub_arr[3];
			jinro.innerHTML = res_sub_arr[4];

			if(me == "m"){
				job_1_desc.innerHTML = res_sub_arr[5];
				job_2_desc.innerHTML = res_sub_arr[6];
			} else if(me == "e"){
				job_1_desc.innerHTML = res_sub_arr[6];
				job_2_desc.innerHTML = res_sub_arr[5];
			}

			break;
		} 
	}
}

function setMBTIType(){
	switch(num){
		case 1:
			setMBTIRes("ENTJ");
			break;
		case 2:
			setMBTIRes("INTJ");
			break;
		case 3:
			setMBTIRes("ENTP");
			break;
		case 4:
			setMBTIRes("INTP");
			break;
		case 5:
			setMBTIRes("ENFP");
			break;
		case 6:
			setMBTIRes("INFP");
			break;
		case 7:
			setMBTIRes("ESTP");
			break;
		case 8:
			setMBTIRes("ISTP");
			break;
		case 9:
			setMBTIRes("ESFP");
			break;
		case 10:
			setMBTIRes("ISFP");
			break;
		case 11:
			setMBTIRes("ESTJ");
			break;
		case 12:
			setMBTIRes("ISTJ");
			break;
		case 13:
			setMBTIRes("ESFJ");
			break;
		case 14:
			setMBTIRes("ISFJ");
			break;
		case 15:
			setMBTIRes("ENFJ");
			break;
		case 16:
			setMBTIRes("INFJ");
			break;
	}
}

function restartFunc() {
	location.href = 'mbtiTest1Desc.html';
}

function getParameterByName(name) { 
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); 
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), 
		results = regex.exec(location.search); 
	return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")); 
}
