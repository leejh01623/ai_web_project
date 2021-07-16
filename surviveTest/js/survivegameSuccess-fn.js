// survivegameSuccess.html
/////
var res_text = document.getElementById('res_text');
res_text.innerHTML =
	'당신은 운이 좋게도 생존한지 20일 만에 지나가는 배에 의해 발견되어 무사히 구조되었습니다.<br>균형잡힌 영양소 섭취가 생존의 열쇠임을 잊지 마세요.';

function refreshFunc() {
	location.href = 'survivegameDesc.html';
}