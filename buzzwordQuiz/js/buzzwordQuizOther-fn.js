// buzzwordQuizResult.html
			
var subject_id, score_id, grade_id, check_id, day_text_id;
var score = 0;
var problem_count_res = 1;

subject_id = document.getElementById("subject_id");
score_id = document.getElementById("score_id");
grade_id = document.getElementById("grade_id");
day_text_id = document.getElementById("day_text_id");

getOXData();
setGradeFunc();
setDayFunc();

function getOXData() {
	const oxData = localStorage.getItem("oxObj");
	var subject_res  = localStorage.getItem("subject");
	var years_res = localStorage.getItem("years");

	subject_id.innerHTML = subject_res + " (" + years_res + ")";
	if (oxData !== null) {
		const parsedOXData = JSON.parse(oxData);

		for (ox in parsedOXData) { 
			console.log("key: " + ox + ", value: " + parsedOXData[ox]);
			//test.innerHTML += "<span>" + ox + "</span><span>" + parsedOXData[ox] + "</span><br>";		
			if(parsedOXData[ox] === "O"){
				score++;
				var tmp_id = "check_id_" + problem_count_res;
				check_id = document.getElementById(tmp_id);
				check_id.innerHTML = "<img src='./img/correct.PNG' class='check-table-ox-img'>";
				problem_count_res++;
			} else if(parsedOXData[ox] === "X"){
				var tmp_id = "check_id_" + problem_count_res;
				check_id = document.getElementById(tmp_id);
				check_id.innerHTML = "<img src='./img/wrong.PNG' class='check-table-ox-img'>";
				problem_count_res++;
			}
		}
	}
	score_id.innerHTML = score + " 점";
}

function setGradeFunc(){
	switch(score){
		case 10:
		case 9:
			grade_id.innerHTML = "1 등급";
			break;
		case 8:
		case 7:
			grade_id.innerHTML = "2 등급";
			break;
		case 6:
		case 5:
			grade_id.innerHTML = "3 등급";
			break;
		case 4:
		case 3:
			grade_id.innerHTML = "4 등급";
			break;
		case 2:
		case 1:
			grade_id.innerHTML = "5 등급";
			break;
		case 0:
			grade_id.innerHTML = "6 등급";
			break;
		default:
			break;
	}
}

function setDayFunc(){
	let today = new Date();   

	let year = today.getFullYear(); 	// 년도
	let month = today.getMonth() + 1;   // 월
	let date = today.getDate();  		// 날짜
	let day = today.getDay();  			// 요일

	day_text_id.innerHTML = year + '. ' + month + '. ' + date;
}

function restartFunc(){
	location.href = "./buzzwordQuizDesc.html";
}

localStorage.clear();
//console.log(localStorage.length);
