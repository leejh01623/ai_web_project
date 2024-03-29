// survivegameResult.html
/////
var temp = location.href.split('?');
var data = temp[1].split('&');
var day = data[0] - 1;
var state = data[1];
var trans_state;

changeStateValueFunc(state);

var res_text = document.getElementById('res_text');
res_text.innerHTML = trans_state;
//res_text.innerHTML = "R.I.P…<br>당신은 무려 00일이나 버텼지만 탄수화물 부족으로 결국 사망하게 되었다.<br>우리 몸은 탄수화물이 부족하면 면역력이 저하되어 몸이 아프게 되고, 무기력해지며 조기에 사망할 확률이 올라간다.<br>적절한 탄수화물 섭취는 우리 몸을 건강하게 유지하는 데 도움을 준다. 반드시 적정량으로 매일 섭취하자!!";

function refreshFunc() {
	location.href = 'survivegameDesc.html';
}

function changeStateValueFunc(state) {
	switch (state) {
		case 'hungry':
			trans_state =
				'R.I.P…<br>당신은 무려 ' +
				day +
				'일이나 버텼지만 생존에 필요한 음식을 제때 섭취하지 못해 영양소 부족으로 결국 사망하게 되었다.<br>우리 몸은 필요량의 영양소를 섭취하지 못하면, 초기에는 체내 당원이 소모되고, 다음은 지방이 감소되면서 살이 빠지며, 최후로 단백질이 급격히 감소되어 사망한다.<br>현실세계에서 다이어트를 위해 무리한 단식을 하는 것은 건강을 해치게 되므로 올바른 식이요법과 운동을 병행하며 건강한 다이어트를 하자!';
			break;
		case 'thirst':
			trans_state =
				'R.I.P…<br>당신은 무려 ' +
				day +
				'일이나 버텼지만 수분부족으로 인해 탈수증상을 일으켜 결국 사망하게 되었다.<br>우리 몸은 60%이상이 수분으로 구성되어 있어 수분이 부족하면 누구나 탈수를 겪을 수 있다. 몸에서 5% 수분을 잃으면 탈수와 일사병 증상이 나타나게 되고 20%의 수분을 잃을 경우 사망에 이르게 된다.<br>충분한 수분 섭취는 탈수를 예방하는 데 도움이 된다. 하루 최소 1.2L 이상의 수분을 섭취하도록 하자.';

			break;
		case 'tan':
			trans_state =
				'R.I.P…<br>당신은 무려 ' +
				day +
				'일이나 버텼지만 탄수화물 부족으로 결국 사망하게 되었다.<br>우리 몸은 탄수화물이 부족하면 면역력이 저하되어 몸이 아프게 되고, 무기력해지며 조기에 사망할 확률이 올라간다.<br>적절한 탄수화물 섭취는 우리 몸을 건강하게 유지하는 데 도움을 준다. 반드시 적정량으로 매일 섭취하자!!';
			//"당신은 " + day + "일동안 생존하였습니다.<br>가장 부족했던 부분은 탄수화물이었습니다.";
			break;
		case 'dan':
			trans_state =
				'R.I.P…<br>당신은 무려 ' +
				day +
				'일이나 버텼지만 단백질 부족으로 인한 심혈관계 질환에 걸려 사망하게 되었다.<br>우리 몸 속 단백질이 부족하면 면역력 저하는 물론, 심혈관계질환 및 암에 걸릴 확률이 올라간다.<br>고기, 두부, 생선 등 적정량의 단백질 섭취로 우리 몸을 건강하고 활기차게 유지하자!!';
			//"당신은 " + day + "일동안 생존하였습니다.<br>가장 부족했던 부분은 단백질이었습니다.";
			break;
		case 'ji':
			trans_state =
				'R.I.P…<br>당신은 무려 ' +
				day +
				'일이나 버텼지만 지방 부족으로 인해 혓바늘이 심하게 돋아 아무것도 먹지 못해 사망하게 되었다.<br>우리 몸 속 지방이 오랫동안 부족하면 뇌에 제일 먼저 문제가 생긴다. 기억력 저하는 물론, 치매에 걸릴 확률도 올라간다.<br>한편 피부건조, 탈모, 구내염 등이 생길 수 있으니 견과류, 아보카도, 올리브오일, 등푸른생선, 고기 등 적정량의 지방 섭취로 우리 몸을 건강하고 윤기나게 유지하자!!';

			//"당신은 " + day + "일동안 생존하였습니다.<br>가장 부족했던 부분은 지방이었습니다.";
			break;
		case 'vi':
			trans_state =
				'R.I.P…<br>당신은 무려 ' +
				day +
				'일이나 버텼지만 비타민C 부족으로 인해 스트레스 호르몬을 조절할 수 없게 되어 돌연사하게 되었다.<br>비타민C는 체내에서 합성되지 않으며, 오로지 음식물 또는 영양제를 통해서만 섭취할 수 있는 필수 영양소이다.<br>비타민C가 부족할 경우 우리 몸의 면역력이 떨어져 질병에 취약하게 되니 신선한 채소와 과일을 꾸준히 섭취하거나 따로 영양제를 복용해 건강한 몸을 유지할 수 있도록 하자!!';
			break;
		case 'mu':
			trans_state =
				'R.I.P…<br>당신은 무려 ' +
				day +
				'일이나 버텼지만 무기질 부족으로 섭취한 영양소들이 제 기능을 하지 못해 급작스러운 심장마비로 사망하게 되었다.<br>무기질(미네랄)은 체내에서 합성되지 않으며, 오로지 음식물 또는 영양제를 통해서만 섭취할 수 있는 필수 영양소이다.<br>무기질은 신체의 각종 대사작용에 관여해 몸을 건강하게 유지하는 역할을 한다.<br>인스턴트식품 섭취를 줄이고 음식을 짜지 않게 먹는 등 올바른 식습관을 들여 균형잡힌 무기질을 섭취할 수 있도록 노력하자!';
			break;
		default:
			break;
	}
}