var mbti_num, mbti_text = "";
var problem_arr;
var problem_count = 0;
var problem_back_img, problem_memo_img;
var problem_button_top, problem_button_bottom;
var problem_title, problem_choice_top, problem_choice_bottom;
var type_value, type_chk = 0, type_problem_count = 0;
var mun_e_chk, mun_e_value;

problem_back_img = document.getElementById("main_back_id");
problem_memo_img = document.getElementById("main_id");
problem_button_top = document.getElementById("main_center_button_top_id");
problem_button_bottom = document.getElementById("main_center_button_bottom_id");
problem_title = document.getElementById("main_top_text_id");
problem_choice_top = document.getElementById("main_center_top_id");
problem_choice_bottom = document.getElementById("main_center_bottom_id");

// mbtiTestDataSet.txt 읽어오기
readFile("./raw/mbtiTestDataSet.txt");

// 문제 set
setProblem();

function btnFunc(elmnt, type){
	setMBTITypeFunc(elmnt, type);
	setProblem();
}

function setBtnHeightFunc(){
	document.getElementById('main_center_button_top_id').style.height = "auto";
	document.getElementById('main_center_button_bottom_id').style.height = "auto";

	var button_top_offsetHeight = document.getElementById('main_center_button_top_id').offsetHeight;
	var button_bottom_offsetHeight = document.getElementById('main_center_button_bottom_id').offsetHeight;

	if(button_top_offsetHeight >= button_bottom_offsetHeight){
		document.getElementById('main_center_button_bottom_id').style.height = document.getElementById('main_center_button_top_id').offsetHeight;
	} else if(button_top_offsetHeight < button_bottom_offsetHeight){
		document.getElementById('main_center_button_top_id').style.height = document.getElementById('main_center_button_bottom_id').offsetHeight;
	}
}

function setMBTITypeFunc(elmnt, type){
	var problem_sub_arr = problem_arr[type_problem_count].split("/");
	// 문과-이과
	if(problem_sub_arr[4] == "0"){
		mun_e_chk = elmnt.firstChild.nextSibling.firstChild.nodeValue;
		
		if(mun_e_chk.replace(/ /g, "") == "문과"){
			mun_e_value = "m";
		}

		if(mun_e_chk.replace(/ /g, "") == "이과"){
			mun_e_value = "e";
		}
	}

	// E-I
	if(problem_sub_arr[4] == "1"){
		if(type_chk == 0){
			type_value = 0;
			type_chk = 1;
			calcValue(type);
		} else {
			calcValue(type);
		}

		if(problem_arr[problem_count].split("/")[4] != "1"){
			if(type_value >= 0){
				mbti_text = mbti_text + "E";
			} else if(type_value < 0){
				mbti_text = mbti_text + "I";
			}
		}
	}

	// S-N
	if(problem_sub_arr[4] == "2"){
		if(type_chk == 0){
			calcValue(type);
		} else if(type_chk == 1){
			type_value = 0;
			type_chk = 0;
			calcValue(type);
		}

		if(problem_arr[problem_count].split("/")[4] != "2"){
			if(type_value >= 0){
				mbti_text = mbti_text + "S";
			} else if(type_value < 0){
				mbti_text = mbti_text + "N";
			}
		}
	}

	// T-F
	if(problem_sub_arr[4] == "3"){					
		if(type_chk == 0){
			type_value = 0;
			type_chk = 1;
			calcValue(type);
		} else {
			calcValue(type);
		}

		if(problem_arr[problem_count].split("/")[4] != "3"){
			if(type_value >= 0){
				mbti_text = mbti_text + "T";
			} else if(type_value < 0){
				mbti_text = mbti_text + "F";
			}
		}
	}

	// J-P
	if(problem_sub_arr[4] == "4"){
		if(type_chk == 0){
			calcValue(type);
		} else if(type_chk == 1){
			type_value = 0;
			type_chk = 0;
			calcValue(type);
		}

		if(problem_arr[problem_count].split("/")[4] != "4"){
			if(type_value >= 0){
				mbti_text = mbti_text + "J";
			} else if(type_value < 0){
				mbti_text = mbti_text + "P";
			}
		}
	}

	type_problem_count++;
}

function encodeTypeText(){
	switch(mbti_text){
		case "ENTJ":
			mbti_num = 1;
			break;
		case "INTJ":
			mbti_num = 2;
			break;
		case "ENTP":
			mbti_num = 3;
			break;
		case "INTP":
			mbti_num = 4;
			break;
		case "ENFP":
			mbti_num = 5;
			break;
		case "INFP":
			mbti_num = 6;
			break;
		case "ESTP":
			mbti_num = 7;
			break;
		case "ISTP":
			mbti_num = 8;
			break;
		case "ESFP":
			mbti_num = 9;
			break;
		case "ISFP":
			mbti_num = 10;
			break;
		case "ESTJ":
			mbti_num = 11;
			break;
		case "ISTJ":
			mbti_num = 12;
			break;
		case "ESFJ":
			mbti_num = 13;
			break;
		case "ISFJ":
			mbti_num = 14;
			break;
		case "ENFJ":
			mbti_num = 15;
			break;
		case "INFJ":
			mbti_num = 16;
			break;
	}
}

function calcValue(type){
	if(type == "one"){
		// E
		type_value++;
	} else if(type == "two"){
		// I
		type_value--;
	}
}

function setProblem(){
	var problem_sub_arr = problem_arr[problem_count].split("/");

	if(problem_sub_arr == "END"){
		// 검사가 끝났으므로 결과페이지로 고고~
		encodeTypeText();
		var param = mbti_num + mun_e_value;
		location.href = 'mbtiTest1Result.html?param=' + param;
	} else {
		// 문제별 배경 이미지 & 메모 이미지 변경
		setBackGround(problem_sub_arr[3]);

		// 문제별 보기 이미지 변경
		setButtonBackColor(problem_sub_arr[4]);

		problem_title.innerHTML = problem_sub_arr[0];
		problem_choice_top.innerHTML = problem_sub_arr[1];
		problem_choice_bottom.innerHTML = problem_sub_arr[2];

		setBtnHeightFunc();

		problem_count++;
	}


}

function setBackGround(backValue){
	if(backValue == "first"){
		document.body.style.backgroundColor = "#D2F0FD";
		problem_back_img.style.backgroundImage = "url('./img/problem_back_1.png')";
		problem_memo_img.style.backgroundImage = "url('./img/problem_memo_back_1.png')";
	} else if(backValue == "second"){
		document.body.style.backgroundColor = "#F4E8DB";
		problem_back_img.style.backgroundImage = "url('./img/problem_back_2.png')";
		problem_memo_img.style.backgroundImage = "url('./img/problem_memo_back_2.png')";
	}
}

function setButtonBackColor(colorValue){
	switch(colorValue){
		case "0":
		case "1":
			problem_button_top.style.backgroundImage = "url('./img/choice_a_1.png')";
			problem_button_bottom.style.backgroundImage = "url('./img/choice_a_2.png')";
			break
		case "2":
			problem_button_top.style.backgroundImage = "url('./img/choice_b_1.png')";
			problem_button_bottom.style.backgroundImage = "url('./img/choice_b_2.png')";
			break;
		case "3":
			problem_button_top.style.backgroundImage = "url('./img/choice_sub_a_1.png')";
			problem_button_bottom.style.backgroundImage = "url('./img/choice_sub_a_2.png')";
			break;
		case "4":
			problem_button_top.style.backgroundImage = "url('./img/choice_sub_b_1.png')";
			problem_button_bottom.style.backgroundImage = "url('./img/choice_sub_b_2.png')";
			break;
		default:
			break;
	}
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
				problem_arr = allText.split("\n");
			}
		}
	}
	rawFile.send(null);
}