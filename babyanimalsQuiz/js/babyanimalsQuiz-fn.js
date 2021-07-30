
// babyanimalsQuiz

var life_count_id_2, life_count_id_1, life_count_id_0, time_progress_id, answer_id, problem_img_id, problem_num_text_id;
var choice_arr, alphabet_arr, text_arr, text_line_arr, answer_tmp_arr;
var problem_num, problem_img, answer;
var problem_count = 0, life_count = 3, end_problem_num = 102;

var timeProgressChk = 0;
var wrongOrtimeEnd = "";
var startTime, timeProgressWidth;

// babyanimals.txt 읽어오기
readFile("./raw/babyanimals.txt");

setInit();

// 라이프 수
setLifeCount();

// 문제 풀이 제한 시간(24초)
setTimeProgress();

// 문제 번호 설정
setProblemNum();

// 문제 이미지 설정
setProblemImg();

// 문제 정답칸 설정
setAnswer();

// 문제 보기 설정
setChoiceBtn();

function setInit(){
	life_count_id_2 = document.getElementById("life_count_id_2");
	life_count_id_1 = document.getElementById("life_count_id_1");
	life_count_id_0 = document.getElementById("life_count_id_0");
	time_progress_id = document.getElementById("time_progress_id");
	answer_id = document.getElementById("answer_id");
	problem_img_id = document.getElementById("problem_img_id");

	problem_num_text_id = document.getElementById("problem_num_text_id");

	text_line_arr = text_arr[problem_count].split("/");
	problem_num = text_line_arr[0];
	problem_img = text_line_arr[1];
	answer = text_line_arr[2];
	answer = answer.toUpperCase();

	answer_tmp_arr = new Array(answer.length);
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
				text_arr = allText.split("\n");
			}
		}
	}
	rawFile.send(null);
}

function setLifeCount(){

}

function setTimeProgress(){
	if(timeProgressChk == 0){
		timeProgressChk = 1;
		timeProgressWidth = 10;
		startTime = setInterval(frame, 10);
	}
}

function frame() {
	if(timeProgressWidth >= 250){
		//clearInterval(startTime);
		wrongOrtimeEnd = "timeEnd";
		gameOverCheckFunc(wrongOrtimeEnd);
	} else {
		timeProgressWidth = timeProgressWidth + 0.1;
		time_progress_id.style.width = timeProgressWidth + "px";
	}
}

function gameOverCheckFunc(_wrongOrtimeEnd){
	life_count--;

	if(_wrongOrtimeEnd === "wrong"){
		// 문제 오답일 경우
		console.log("wrong");

	} else if(_wrongOrtimeEnd === "timeEnd"){
		// 시간이 지났을 경우
		timeProgressChk = 0;
		clearInterval(startTime);
		startTime = "";
		setTimeProgress();
	}

	if(life_count === 2){
		life_count_id_2.style.backgroundImage = "url('./img/emptylife.png')";
	} else if(life_count === 1){
		life_count_id_1.style.backgroundImage = "url('./img/emptylife.png')";
	} else if(life_count === 0){
		// 게임 종료 화면
		// 최대 몇문제 까지 갔는지 표시해주면될듯
		timeProgressChk = 0;
		startTime = "";
		clearInterval(startTime);
		life_count_id_0.style.backgroundImage = "url('./img/emptylife.png')";
		location.href = 'babyanimalsQuizResult.html?' + problem_num + '';
	} 
}

function setProblemNum(){
	problem_num_text_id.innerHTML = "Round " + problem_num;
}

function setProblemImg(){
	problem_img_id.innerHTML = "<img src='./img/" + problem_img + ".jpg' class='problem-img'>"
}

function setAnswer(){
	answer_id.innerHTML = "";
	for(var i=0; i<answer.length; i++){
		answer_id.innerHTML += "<button class='answer-btn' onclick='answerFunc(" + i + ");'><span class='answer-text' id='answer_" + i + "'></span></button>"
	}
}

function setChoiceBtn(){
	// 중복 문자 제거 정답
	var answer_arr = answer.split("");
	const set = new Set(answer_arr);
	const unique_answer_arr = [...set];
	var tmp_answer = unique_answer_arr.join('');

	// 배열에 정답 넣기
	choice_arr = new Array(10);
	for(var i=0; i<tmp_answer.length; i++){
		choice_arr[i] = tmp_answer.substring(i, i+1);
	}

	// 알파벳 배열
	alphabet_arr = Array.from({length:26}, (v,i) => String.fromCharCode(i+65));
	var tmp_alphabet_arr = alphabet_arr;

	// 정답과 중복 검사
	for(var i=0; i<tmp_alphabet_arr.length; i++){
		for(var j=0; j<answer.length; j++){
			if(tmp_alphabet_arr[i] === answer.substring(j, j+1)){
				tmp_alphabet_arr.splice(i, 1);
			}
		}
	}

	// choice_arr 나머지부분 알파벳 채우기
	for(var i=0; i<choice_arr.length; i++){
		if(!choice_arr[i]){
			var rand = Math.floor(Math.random() * tmp_alphabet_arr.length);
			if(!duplicateChk(tmp_alphabet_arr[rand])){
				choice_arr[i] = tmp_alphabet_arr[rand];
			} else {
				i--;
			}
		}
	}

	// choice_arr 섞기
	shuffle(choice_arr);

	// 버튼에다가 choice_arr 값 넣기
	for(var i=0; i<choice_arr.length; i++){
		var choice = document.getElementById('choice_' + i);
		choice.innerHTML = choice_arr[i];
	}
}

function answerFunc(num){
	var answer_btn = document.getElementById('answer_' + num);
	if(answer_btn.textContent){
		answer_btn.innerHTML = "";
		answer_tmp_arr[num] = "";
	} 
	console.log(answer_tmp_arr);
}

function choiceFunc(num){
	var choice_btn = document.getElementById('choice_' + num);
	var answer_btn;
	var full_count = 0;

	for(var i=0; i<answer_tmp_arr.length; i++){
		if(!answer_tmp_arr[i]){
			answer_tmp_arr[i] = choice_btn.textContent;
			break;
		}
	}

	console.log(answer_tmp_arr);

	for(var i=0; i<answer_tmp_arr.length; i++){
		if(answer_tmp_arr[i]){
			answer_btn = document.getElementById('answer_' + i);
			answer_btn.innerHTML = answer_tmp_arr[i];
		} 
	}

	for(var i=0; i<answer_tmp_arr.length; i++){
		if(answer_tmp_arr[i]){
			full_count++;
		}
	}

	// 정답칸이 모두 채워줬을 경우 정답유무 판별
	// 정답이면 다음 문제
	// 오답이면 정답칸 다 지워주기(배열 비우기)
	if(full_count === answer.length){
		var choiceAnswer = answer_tmp_arr.join('');
		console.log(choiceAnswer);
		console.log(answer);
		if(choiceAnswer === answer){
			// 정답
			clearInterval(startTime);
			timeProgressChk = 0;
			startTime = "";
			console.log("problem_num : " + problem_num);

			if(problem_num == end_problem_num){
				location.href = 'babyanimalsQuizSuccess.html?' + problem_num + '';
			} else {
				problem_count++;
				setInit();
				setTimeProgress();
				setProblemNum();
				setProblemImg();
				setAnswer();
				setChoiceBtn();
			}
		} else {
			// 오답
			wrongOrtimeEnd = "wrong";
			answer_tmp_arr = new Array(answer.length);
			for(var i=0; i<answer.length; i++){
				answer_btn = document.getElementById('answer_' + i);
				answer_btn.innerHTML = "";
			}

			gameOverCheckFunc(wrongOrtimeEnd);
			/*
			life_count--;
			life_count_id.innerHTML = life_count;

			if(life_count == 0){
				// 게임 종료 화면
				// 최대 몇문제 까지 갔는지 표시해주면될듯
			}
			*/
		}
	}
}

function duplicateChk(value){
	return choice_arr.find((e) => (e === value));
}

function shuffle(array) {
	array.sort(() => Math.random() - 0.5);
}