// survivegameDesc.html
/////
var desc_text;

desc_text = document.getElementById('desc_text');
desc_text.innerHTML =
	'게임방법<br><br>- 당신은 하루에 한번 식사를 할 수 있다.<br>- 두 개의 아이템 중 하나를 선택하면 아이템에 따라 나의 영양 상태가 변하게 된다.<br>- 7가지 영양상태 중 하나라도 0 이하로 떨어지면 당신은 돌아올 수 없는 강을 건너게 된다.<br>- 영양 상태를 골고루 유지하면서 구조될 때까지 최대한 살아남아 보자!!';

function startFunc() {
	location.href = 'survivegame.html';
}
