var initState = {
	kind : "init",
	hungry : 100,
	thirst : 100,
	tan : 100,
	dan : 100,
	ji : 100,
	vi : 100,
	mu : 100 
};

var currentState = {
	kind : "current",
	hungry : 100,
	thirst : 100,
	tan : 100,
	dan : 100,
	ji : 100,
	vi : 100,
	mu : 100 
};

var crab = {
	name : "게",
	kind : "animal",
	hungry : 35,
	thirst : -5,
	tan : 0,
	dan : 15,
	ji : 5,
	vi : 80,
	mu : 20,
	img : "./img2/crab.jpg"
};

var larva = {
	name : "애벌레",
	kind : "animal",
	hungry : 10,
	thirst : -5,
	tan : 0,
	dan : 10,
	ji : 10,
	vi : 80,
	mu : 30,
	img : "./img2/larva.jpg"
};

var fish = {
	name : "물고기",
	kind : "animal",
	hungry : 50,
	thirst : -10,
	tan : 0,
	dan : 15,
	ji : 5,
	vi : 15,
	mu : 15,
	img : "./img2/fish.jpg"
};

var clam = {
	name : "조개",
	kind : "animal",
	hungry : 30,
	thirst : -10,
	tan : 0,
	dan : 10,
	ji : 0,
	vi : 5,
	mu : 15,
	img : "./img2/clam.jpg"
};

var scallop = {
	name : "가리비",
	kind : "animal",
	hungry : 40,
	thirst : -10,
	tan : 0,
	dan : 10,
	ji : 0,
	vi : 15,
	mu : 15,
	img : "./img2/scallop.jpg"
};

var octopus = {
	name : "문어",
	kind : "animal",
	hungry : 50,
	thirst : -10,
	tan : 0,
	dan : 10,
	ji : 0,
	vi : 0,
	mu : 5,
	img : "./img2/octopus.jpg"
};

var abalone = {
	name : "전복",
	kind : "animal",
	hungry : 45,
	thirst : -10,
	tan : 0,
	dan : 10,
	ji : 0,
	vi : 10,
	mu : 10,
	img : "./img2/abalone.jpg"
};

var snake = {
	name : "뱀",
	kind : "animal",
	hungry : 70,
	thirst : -20,
	tan : 0,
	dan : 25,
	ji : 10,
	vi : 30,
	mu : 5,
	img : "./img2/snake.jpg"
};

var grasshopper = {
	name : "메뚜기",
	kind : "animal",
	hungry : 10,
	thirst : -5,
	tan : 0,
	dan : 10,
	ji : 10,
	vi : 40,
	mu : 60,
	img : "./img2/grasshopper.jpg"
};

var eel = {
	name : "뱀장어",
	kind : "animal",
	hungry : 80,
	thirst : -20,
	tan : 0,
	dan : 15,
	ji : 0,
	vi : 30,
	mu : 80,
	img : "./img2/eel.jpg"
};

var deer = {
	name : "사슴",
	kind : "animal",
	hungry : 80,
	thirst : -20,
	tan : 0,
	dan : 25,
	ji : 5,
	vi : 0,
	mu : 50,
	img : "./img2/deer.jpg"
};

var rabbit = {
	name : "토끼",
	kind : "animal",
	hungry : 50,
	thirst : -20,
	tan : 0,
	dan : 20,
	ji : 0,
	vi : 15,
	mu : 15,
	img : "./img2/rabbit.jpg"
};

var rat = {
	name : "쥐",
	kind : "animal",
	hungry : 30,
	thirst : -15,
	tan : 0,
	dan : 15,
	ji : 0,
	vi : 0,
	mu : 5,
	img : "./img2/rat.jpg"
};

var lizard = {
	name : "도마뱀",
	kind : "animal",
	hungry : 20,
	thirst : -15,
	tan : 0,
	dan : 10,
	ji : 5,
	vi : 0,
	mu : 5,
	img : "./img2/lizard.jpg"
};

var chicken = {
	name : "야생닭",
	kind : "animal",
	hungry : 70,
	thirst : -20,
	tan : 0,
	dan : 20,
	ji : 5,
	vi : 15,
	mu : 15,
	img : "./img2/chicken.jpg"
};

var coconut_crab = {
	name : "코코넛크랩",
	kind : "animal",
	hungry : 70,
	thirst : -10,
	tan : 0,
	dan : 20,
	ji : 10,
	vi : 5,
	mu : 30,
	img : "./img2/coconut_crab.jpg"
};

var medicinal_herbs = {
	name : "약초",
	kind : "plant",
	hungry : 10,
	thirst : 0,
	tan : 0,
	dan : 5,
	ji : 0,
	vi : 100,
	mu : 100,
	img : "./img2/medicinal_herbs.jpg"
};

var mugwort = {
	name : "쑥",
	kind : "plant",
	hungry : 10,
	thirst : 0,
	tan : 0,
	dan : 5,
	ji : 0,
	vi : 90,
	mu : 80,
	img : "./img2/mugwort.jpg"
};

var sugar_cane = {
	name : "사탕수수",
	kind : "plant",
	hungry : 20,
	thirst : 70,
	tan : 20,
	dan : 0,
	ji : 0,
	vi : 10,
	mu : 20,
	img : "./img2/sugar_cane.jpg"
};

var aloe = {
	name : "알로에",
	kind : "plant",
	hungry : 5,
	thirst : 60,
	tan : 0,
	dan : 0,
	ji : 0,
	vi : 10,
	mu : 5,
	img : "./img2/aloe.jpg"
};

var mushroom = {
	name : "버섯",
	kind : "plant",
	hungry : 15,
	thirst : -10,
	tan : 15,
	dan : 5,
	ji : 0,
	vi : 50,
	mu : 50,
	img : "./img2/mushroom.jpg"
};

var pineapple = {
	name : "파인애플",
	kind : "plant",
	hungry : 20,
	thirst : 60,
	tan : 25,
	dan : 0,
	ji : 0,
	vi : 35,
	mu : 70,
	img : "./img2/pineapple.jpg"
};

var lemon = {
	name : "레몬",
	kind : "plant",
	hungry : 10,
	thirst : 65,
	tan : 10,
	dan : 0,
	ji : 0,
	vi : 45,
	mu : 25,
	img : "./img2/lemon.jpg"
};

var lime = {
	name : "라임",
	kind : "plant",
	hungry : 10,
	thirst : 65,
	tan : 15,
	dan : 0,
	ji : 0,
	vi : 20,
	mu : 20,
	img : "./img2/lime.jpg"
};

var blueberry = {
	name : "블루베리",
	kind : "plant",
	hungry : 15,
	thirst : 65,
	tan : 20,
	dan : 0,
	ji : 0,
	vi : 40,
	mu : 30,
	img : "./img2/blueberry.jpg"
};

var mango = {
	name : "망고",
	kind : "plant",
	hungry : 15,
	thirst : 60,
	tan : 20,
	dan : 0,
	ji : 0,
	vi : 15,
	mu : 25,
	img : "./img2/mango.jpg"
};

var guava = {
	name : "구아바",
	kind : "plant",
	hungry : 15,
	thirst : 65,
	tan : 10,
	dan : 0,
	ji : 0,
	vi : 70,
	mu : 15,
	img : "./img2/guava.jpg"
};

var mangosteen = {
	name : "망고스틴",
	kind : "plant",
	hungry : 15,
	thirst : 60,
	tan : 20,
	dan : 0,
	ji : 0,
	vi : 20,
	mu : 25,
	img : "./img2/mangosteen.jpg"
};

var starfruit = {
	name : "스타푸르트",
	kind : "plant",
	hungry : 15,
	thirst : 60,
	tan : 10,
	dan : 0,
	ji : 0,
	vi : 40,
	mu : 65,
	img : "./img2/starfruit.jpg"
};

var durian = {
	name : "두리안",
	kind : "plant",
	hungry : 30,
	thirst : 50,
	tan : 50,
	dan : 5,
	ji : 5,
	vi : 60,
	mu : 60,
	img : "./img2/durian.jpg"
};

var coconut = {
	name : "코코넛",
	kind : "plant",
	hungry : 40,
	thirst : 70,
	tan : 15,
	dan : 5,
	ji : 35,
	vi : 5,
	mu : 80,
	img : "./img2/coconut.jpg"
};

var rain = {
	name : "빗물",
	kind : "good",
	hungry : 0,
	thirst : 90,
	tan : 0,
	dan : 0,
	ji : 0,
	vi : 0,
	mu : 5,
	img : "./img2/rain.jpg"
};

var valley = {
	name : "계곡물",
	kind : "good",
	hungry : 0,
	thirst : 90,
	tan : 0,
	dan : 0,
	ji : 0,
	vi : 0,
	mu : 5,
	img : "./img2/valley.jpg"
};

var chocolate_bar = {
	name : "초코바",
	kind : "good",
	hungry : 100,
	thirst : -20,
	tan : 30,
	dan : 30,
	ji : 30,
	vi : 30,
	mu : 30,
	img : "./img2/chocolate_bar.jpg"
};

var cola = {
	name : "콜라",
	kind : "good",
	hungry : 10,
	thirst : 80,
	tan : 10,
	dan : 10,
	ji : 10,
	vi : 10,
	mu : 10,
	img : "./img2/cola.jpg"
};

var hardtack = {
	name : "건빵",
	kind : "good",
	hungry : 100,
	thirst : -80,
	tan : 15,
	dan : 15,
	ji : 15,
	vi : 15,
	mu : 15,
	img : "./img2/hardtack.jpg"
};

var supplements = {
	name : "종합영양제",
	kind : "good",
	hungry : 0,
	thirst : 0,
	tan : 100,
	dan : 100,
	ji : 100,
	vi : 100,
	mu : 100,
	img : "./img2/supplements.jpg"
};

var raw_fish = {
	name : "물고기(날생선)",
	kind : "bad",
	hungry : 30,
	thirst : -10,
	tan : -10,
	dan : -10,
	ji : -10,
	vi : -10,
	mu : -10,
	img : "./img2/raw_fish.jpg"
};

var poisonous_mushroom = {
	name : "독버섯",
	kind : "bad",
	hungry : 15,
	thirst : -5,
	tan : -5,
	dan : -5,
	ji : -5,
	vi : -5,
	mu : -5,
	img : "./img2/poisonous_mushroom.jpg"
};

var sea = {
	name : "바닷물",
	kind : "bad",
	hungry : 0,
	thirst : -20,
	tan : -20,
	dan : -20,
	ji : -20,
	vi : -20,
	mu : -20,
	img : "./img2/sea.jpg"
};

var standing = {
	name : "고인물",
	kind : "bad",
	hungry : 0,
	thirst : -20,
	tan : -30,
	dan : -30,
	ji : -30,
	vi : -30,
	mu : -30,
	img : "./img2/standing.jpg"
};

var venomous_snake = {
	name : "독사",
	kind : "bad",
	hungry : 30,
	thirst : -20,
	tan : -40,
	dan : -40,
	ji : -40,
	vi : -40,
	mu : -40,
	img : "./img2/venomous_snake.jpg"
};



export{initState , currentState , crab, larva, fish, clam, scallop, octopus, abalone, snake, grasshopper, eel, deer, rabbit, rat, lizard, chicken, coconut_crab, medicinal_herbs, mugwort, sugar_cane, aloe, mushroom, pineapple, lemon, lime, blueberry, mango, guava, mangosteen, starfruit, durian, coconut, rain, valley, chocolate_bar, cola, hardtack, supplements, raw_fish, poisonous_mushroom, sea, standing, venomous_snake};