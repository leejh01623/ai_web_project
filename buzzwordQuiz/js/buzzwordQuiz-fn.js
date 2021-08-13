// buzzwordQuizDesc.html

var subject_desc = "";

function subjectOneFunc(){
	subject_desc = "제1교시&1990년대";
	encodeNextPageFunc(subject_desc);
}

function subjectTwoFunc(){
	subject_desc = "제2교시&2000년대";
	encodeNextPageFunc(subject_desc);
}

function subjectThreeFunc(){
	subject_desc = "제3교시&2010년대";
	encodeNextPageFunc(subject_desc);
}

function encodeNextPageFunc(sub){
	var encodeSubject = encodeURIComponent(sub);
	location.href = 'buzzwordQuiz.html?' + encodeSubject;
}

// buzzwordQuiz.html

var subject_text_id, years_text_id;
var problem_title_text_id, problem_contents_div_id, bottom_count_left_text_id;
var choice_div_id;
var problem_arr;
var problem_count = 0;
var ten_count = 0;

// 채점한 내용 넘기기
var oxObj = new Object();

choice_div_id = document.getElementById("choice_div_id");
problem_title_text_id = document.getElementById("problem_title_text_id");
bottom_count_left_text_id = document.getElementById("bottom_count_left_text_id");

// 넘어온 값 파싱
var temp = location.href.split('?');
var data = decodeURIComponent(temp[1]);
var sub_temp = data.split('&');
var subject = sub_temp[0];
var years = sub_temp[1];

// 몇교시 몇년대 set
setSubjectYears();

// babyanimals.txt 읽어오기
readFile("./raw/problemset.txt");

// 문제 set
setYearsProblem();

function setYearsProblem(){
	if(years === problem_arr[0]){
		// 1990년대
		problem_count = 1;
		setProblem();
	} else if(years === problem_arr[11]){
		// 2000년대
		problem_count = 12;
		setProblem();
	} else if(years === problem_arr[22]){
		// 2010년대
		problem_count = 23;
		setProblem();
	}
}

function setProblem(){
	if(ten_count === 10){
		localStorage.setItem("oxObj", JSON.stringify(oxObj));

		localStorage.setItem("subject", subject);
		localStorage.setItem("years", years);
		//alert("끝!!!");

		location.href = "./buzzwordQuizResult.html";

	} else if(0 <= ten_count && ten_count < 10){
		var problem_sub_arr = problem_arr[problem_count].split('/');

		console.log(problem_sub_arr);

		// problem title
		problem_title_text_id.innerHTML = problem_sub_arr[2];

		// problem example img
		setProblemExImg(problem_sub_arr);

		// problem type
		setProblemType(problem_sub_arr);

		// bottom_count_left_text_id
		bottom_count_left_text_id.innerHTML = ten_count+1;

		problem_count++;
		ten_count++;
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

function setSubjectYears(){
	subject_text_id = document.getElementById("subject_text_id");
	years_text_id = document.getElementById("years_text_id");

	subject_text_id.innerHTML = subject;
	years_text_id.innerHTML = years;
}

function setProblemExImg(problem_sub_arr) {
	problem_contents_div_id = document.getElementById("problem_contents_div_id");
	problem_contents_div_id.innerHTML = "<img src='./img/bwq_" + problem_sub_arr[1] + ".PNG' class='problem-contents-img'>";
}

// img: 이미지문제
// garo: 가로넣기
// sang: 상황극
// ox: OX퀴즈
function setProblemType(problem_sub_arr){
	switch(problem_sub_arr[0]) {
		case "img":
			setChoiceType(problem_sub_arr);
			break;
		case "garo":
			setChoiceType(problem_sub_arr);
			break;
		case "sang":
			setChoiceType(problem_sub_arr);
			break;
		case "ox":
			setChoiceType(problem_sub_arr);
			break;
		default:
			break;
	}
}

function setChoiceType(problem_sub_arr){
	console.log("setChoiceType");
	console.log(problem_sub_arr[4]);
	if(problem_sub_arr[4] === "4"){
		// 보기 4개
		choice_div_id.innerHTML = "<div class='choice-line-div'><div class='choice-line-sub-div'><span>&#9312;&nbsp;</span><span class='choice-text' onclick='correctChkFunc(\"" + problem_sub_arr[3] + "\", this);'>" + problem_sub_arr[5] + "</span></div><div class='choice-line-sub-div'><span>&#9313;&nbsp;</span><span class='choice-text' onclick='correctChkFunc(\"" + problem_sub_arr[3] + "\", this);'>" + problem_sub_arr[6] + "</span></div></div><div class='choice-line-div'><div class='choice-line-sub-div'><span>&#9314;&nbsp;</span><span class='choice-text' onclick='correctChkFunc(\"" + problem_sub_arr[3] + "\", this);'>" + problem_sub_arr[7] + "</span></div><div class='choice-line-sub-div'><span>&#9315;&nbsp;</span><span class='choice-text' onclick='correctChkFunc(\"" + problem_sub_arr[3] + "\", this);'>" + problem_sub_arr[8] + "</span></div></div>";
	} else if(problem_sub_arr[4] === "2"){
		// 보기 2개
		choice_div_id.innerHTML = "<div class='choice-line-div'><div class='choice-line-sub-div'><span>&#9312;&nbsp;</span><span class='choice-text' onclick='correctChkFunc(\"" + problem_sub_arr[3] + "\", this);'>" + problem_sub_arr[5] + "</span></div><div class='choice-line-sub-div'><span>&#9313;&nbsp;</span><span class='choice-text' onclick='correctChkFunc(\"" + problem_sub_arr[3] + "\", this);'>" + problem_sub_arr[6] + "</span></div></div>";
	} else {
		// ox
		choice_div_id.innerHTML = "<div class='choice-ox-div'><div class='choice-o-div'><img src='./img/o.png' class='choice-ox-img' alt='quiz_O' onclick='correctOXChkFunc(\"" + problem_sub_arr[3] + "\",this);'></div><div class='choice-ox-center-div'></div><div class='choice-x-div'><img src='./img/x.png' class='choice-ox-img' alt='quiz_X' onclick='correctOXChkFunc(\"" + problem_sub_arr[3] + "\",this);'></div></div>";
	}
}

function correctChkFunc(correctValue, choiceValue){
	console.log(choiceValue.innerText);
	var choiceValue_tmp = choiceValue.innerText;

	if(correctValue === choiceValue_tmp){
		//console.log("정답!!!");
		var tmp = ten_count.toString();
		oxObj[tmp] = "O";
	} else {
		//console.log("오답!!!");
		var tmp = ten_count.toString();
		oxObj[tmp] = "X";
	}

	setProblem();
}

function correctOXChkFunc(correctValue, choiceValue){
	console.log(choiceValue.alt);
	var choiceValue_tmp = choiceValue.alt.split('_');
	var choiceValue_tmp_ox = choiceValue_tmp[1];

	console.log(choiceValue_tmp);
	console.log(choiceValue_tmp_ox);
	console.log(correctValue);
	if(correctValue === choiceValue_tmp_ox){
		//console.log("정답!!!");
		var tmp = ten_count.toString();
		oxObj[tmp] = "O";
	} else {
		//console.log("오답!!!");
		var tmp = ten_count.toString();
		oxObj[tmp] = "X";
	}

	setProblem();
}
