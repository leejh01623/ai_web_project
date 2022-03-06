const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

var titleDiv = document.getElementById("titleDiv");
var titleSubDiv = document.getElementById("titleSubDiv");
var descDiv = document.getElementById("descDiv");
var descSubDiv = document.getElementById("descSubDiv");
var descSpan = document.getElementById("descSpan");
var startBtn = document.getElementById("startBtn");
var bottomImgDiv = document.getElementById("bottomImgDiv");
var bottomImgSubDiv = document.getElementById("bottomImgSubDiv");

var realtimeScore = document.getElementById("realtimeScore");
var realtimeScoreDiv = document.getElementById("realtimeScoreDiv");

var gameoverDiv = document.getElementById("gameoverDiv");
var gameoverSubDiv = document.getElementById("gameoverSubDiv");
var scoreDiv = document.getElementById("scoreDiv");
var scoreSubDiv = document.getElementById("scoreSubDiv");
var newScore = document.getElementById("newScore");
var bestScoreSpan = document.getElementById("bestScoreSpan");
var retryBtn = document.getElementById("retryBtn");

var spaceP = document.getElementById("spaceP");
var spaceP2 = document.getElementById("spaceP2");
var spaceP3 = document.getElementById("spaceP3");
var spaceP4 = document.getElementById("spaceP4");
var spaceP5 = document.getElementById("spaceP5");

let player, projectiles, enemies, particles;
var itemImg, playerImg, enemyImg0, enemyImg1, enemyImg2;
var playerWidth, playerHeight, playerRad;
var score, bestScore, spawnInterval;

const friction = 0.99; 

class Player {
	constructor(x, y, w, h, rad){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.rad = rad;
	}
	
	draw(){
		playerImg.draw(this.x / 2 - this.rad, this.y / 2 - this.rad, this.w, this.h);
	}
}

class Projectile{
	constructor(x, y, rad, cor, velocity){
		this.x = x;
		this.y = y; 
		this.rad = rad;
		this.cor = cor;
		this.velocity = velocity;
	}
	
	draw(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
		ctx.fillStyle = this.cor;
		ctx.fill();
	}
	
	update(){
		this.draw();
		this.x = this.x + this.velocity.x;
		this.y = this.y + this.velocity.y;
	}
}

class Enemy{
	constructor(x, y, rad, cor, velocity, rand){
		this.x = x;
		this.y = y; 
		this.rad = rad;
		this.cor = cor;
		this.velocity = velocity;
		this.rand = rand;
	}
	
	draw(){
		if(this.rand == 0){
			enemyImg0.draw(this.x - this.rad, this.y - this.rad, this.rad * 2, this.rad * 2);
		} else if(this.rand == 1) {
			enemyImg1.draw(this.x - this.rad, this.y - this.rad, this.rad * 2, this.rad * 2);
		} else if(this.rand == 2) {
			enemyImg2.draw(this.x - this.rad, this.y - this.rad, this.rad * 2, this.rad * 2);
		}
	}
	
	update(){
		this.draw();
		this.x = this.x + this.velocity.x;
		this.y = this.y + this.velocity.y;
	}
}

class Particle {
	constructor(x, y, rad, rand, velocity){
		this.x = x;
		this.y = y; 
		this.rad = rad;
		this.rand = rand;
		this.velocity = velocity;
		this.alpha = 1;
	}
	
	draw(){
		ctx.save();
		ctx.globalAlpha = this.alpha;
		ctx.beginPath();
		
		// 원
		ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
		
		// 삼각형
		//ctx.moveTo(this.x, this.y);
		//ctx.lineTo(this.x, this.y + this.rad * 4);
		//ctx.lineTo(this.x + this.rad * 4, this.y + this.rad * 4);
		//ctx.closePath();
		
		if(this.rand == 0){
			ctx.fillStyle = '#fe5c16';
		} else if(this.rand == 1){
			ctx.fillStyle = '#7c4627';
		} else if(this.rand == 2){
			ctx.fillStyle = '#5eccd6';
		}
		
		ctx.fill();
		ctx.restore();
	}
	
	update(){
		this.draw();
		this.velocity.x *= friction;
		this.velocity.y *= friction;
		this.x = this.x + this.velocity.x;
		this.y = this.y + this.velocity.y;
		this.alpha -= 0.01;
	}
}

function main(){
	let filter = 'win16|win32|win64|mac|macintel';
	if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
		//console.log("Client platform : Mobile");
		document.body.style.width = '400px';
		document.body.style.height = '430px';
		canvas.width = 400;
		canvas.height = 400;
		titleSubDiv.style.marginTop = "30px";
		descSubDiv.style.marginTop = "110px";
		descSubDiv.style.width = "60%";
		spaceP.style.fontSize = "8px";
		spaceP2.style.fontSize = "9px";
		spaceP3.style.fontSize = "7px";
		descSpan.innerHTML = "지구를 향해 날아오는<br>운석과 UFO로 부터<br>지구를 구해주세요!<br>화면 클릭으로 공격할 수 있어요!"
		bottomImgSubDiv.style.marginTop = "320px";
		bottomImgSubDiv.style.width = "400px";
		bottomImgSubDiv.style.height = "80px";
		
		realtimeScore.style.fontSize = "30px";
		gameoverSubDiv.style.marginTop = "30px";
		scoreSubDiv.style.marginTop = "110px";
		scoreSubDiv.style.width = "70%";
		spaceP4.style.fontSize = "7px";
		spaceP5.style.fontSize = "7px";
	} else {
		//console.log("Client platform : PC");
		document.body.style.width = '800px';
		document.body.style.height = '830px';
		canvas.width = 600;
		canvas.height = 600;
		titleSubDiv.style.marginTop = "100px";
		descSubDiv.style.marginTop = "200px";
		descSubDiv.style.width = "45%";
		spaceP.style.fontSize = "13px";
		spaceP2.style.fontSize = "14px";
		spaceP3.style.fontSize = "9px";
		descSpan.innerHTML = "지구를 향해 날아오는<br>운석과 UFO로 부터 지구를 구해주세요!<br> 화면 클릭으로 공격할 수 있어요!"
		bottomImgSubDiv.style.marginTop = "500px";
		bottomImgSubDiv.style.width = "600px";
		bottomImgSubDiv.style.height = "100px";
		
		realtimeScore.style.fontSize = "50px";
		gameoverSubDiv.style.marginTop = "100px";
		scoreSubDiv.style.marginTop = "200px";
		scoreSubDiv.style.width = "45%";
		spaceP4.style.fontSize = "14px";
		spaceP5.style.fontSize = "9px";
	}
	
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	backgroundFunc();
	
	playerWidth = 50;
	playerHeight = 50;
	playerRad = 25;
	player = new Player(canvas.width, canvas.height, playerWidth, playerHeight, playerRad);
	
	itemImg = new Image();
	itemImg.src = "./img/item.png";
	playerImg = new spriteFunc(0, 0, 1000, 1000);
	enemyImg0 = new spriteFunc(1000, 0, 1000, 1000);
	enemyImg1 = new spriteFunc(0, 1000, 1000, 1000);
	enemyImg2 = new spriteFunc(1000, 1000, 1000, 1000);

	projectiles = [];
	enemies = [];
	particles = [];
	score = 0;

	realtimeScoreDiv.style.display = 'none';
	gameoverDiv.style.display = 'none';
	scoreDiv.style.display = 'none';
}

function backgroundFunc(){
	// 캔버스 전체 영역
	for(let i = 0; i < 70; i++){
		var rand_x = Math.floor(Math.random() * canvas.width) + 1;
		var rand_y = Math.floor(Math.random() * canvas.height) + 1;
		// 0.1 ~ 2.0
		var rand_rad = (Math.floor(Math.random() * 20) + 1) / 10;
		
		ctx.beginPath();
		ctx.arc(rand_x, rand_y, rand_rad, 0, Math.PI * 2, false);
		ctx.fillStyle = 'white';
		ctx.fill();
	}
}

function init(){
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	projectiles = [];
	enemies = [];
	particles = [];
	score = 0;
	newScore.innerHTML = score;
	realtimeScore.innerHTML = score;
	realtimeScoreDiv.style.display = 'flex';
	gameoverDiv.style.display = 'none';
	scoreDiv.style.display = 'none';
}

let animateFlag;
function animate(){
	animateFlag = requestAnimationFrame(animate);
	ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	player.draw();
	particles.forEach((particle, idx) => {
		if(particle.alpha <= 0){
			particles.splice(idx, 1);
		} else {
			particle.update();
		}
	});
	
	projectiles.forEach((projectile, idx) => {
		projectile.update();
		
		if(projectile.x + projectile.rad < 0 || 
		   projectile.x - projectile.rad > canvas.width || 
		   projectile.y + projectile.rad < 0 || 
		   projectile.y - projectile.rad > canvas.height) {
			setTimeout(() => {
				projectiles.splice(idx, 1);
			}, 0);
		}
	});
	
	enemies.forEach((enemy, eIdx) => {
		enemy.update();

		// 게임 오버
		var dist = Math.hypot(canvas.width / 2 - enemy.x, canvas.height / 2 - enemy.y);
		if(dist - enemy.rad - playerRad < 1){
			cancelAnimationFrame(animateFlag);
			clearInterval(spawnInterval);
			realtimeScoreDiv.style.display = 'none';
			gameoverDiv.style.display = 'flex';
			scoreDiv.style.display = 'flex';
			newScore.innerHTML = score;
			
			bestScore = localStorage.getItem("score");

			if(bestScore != null){
				if(score > bestScore){
					localStorage.setItem("score", score);
					bestScore = score;
				}
			} else {
				localStorage.setItem("score", score);
			}
			
			bestScoreSpan.innerHTML = "Best Score " + bestScore;
		}
		
		projectiles.forEach((projectile, pIdx) => {
			// projectile과 enemy가 부딪혔을 때
			const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y);
			if(dist - enemy.rad - projectile.rad < 1){
				// particle 생성
				for(let i=0; i < enemy.rad; i++){
					particles.push(new Particle(projectile.x, 
												projectile.y, 
												Math.random() * 2,
												enemy.rand, 
												{
													x: Math.random() - 0.5 * (Math.random() * 2), 
													y: Math.random() - 0.5 * (Math.random() * 2)
												}
											   )
								  );
				}
				// projectile과 enemy 없애고 점수 구분
				if(enemy.rad - 10 > 11) {
					if(enemy.rand == 0){
						// ufo 이미지일 때
						score += 50;
						realtimeScore.innerHTML = score;
						setTimeout(() => {
							enemies.splice(eIdx, 1);
							projectiles.splice(pIdx, 1);
						}, 0);
					} else {
						score += 10;
						realtimeScore.innerHTML = score;
						gsap.to(enemy, {
							rad: enemy.rad - 10
						});
						
						setTimeout(() => {
							projectiles.splice(pIdx, 1);
						}, 0);
					}
				} else {
					if(enemy.rand == 0){
						score += 50;
						realtimeScore.innerHTML = score;
					} else {
						score += 20;
						realtimeScore.innerHTML = score;
					}

					setTimeout(() => {
						enemies.splice(eIdx, 1);
						projectiles.splice(pIdx, 1);
					}, 0);
				}
			}
		});
	});
}

function spawnFunc(){
	spawnInterval = setInterval(() =>{
		const maxEnemyRad = 30;
		const minEnemyRad = 10;
		const enemyTotalNum = 3;
		const threshold = 0.5;
		const rad = Math.random() * (maxEnemyRad - minEnemyRad) + minEnemyRad;
		let x;
		let y;
		
		if(Math.random() < threshold) {
			x = Math.random() < threshold ? 0 - rad : canvas.width + rad;
			y = Math.random() * canvas.height;
		} else {
			x = Math.random() * canvas.width;
			y = Math.random() < threshold ? 0 - rad : canvas.height + rad;
		}

		const color = 'white';
		
		const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x);
		const velocity = {
			x: Math.cos(angle),
			y: Math.sin(angle)
		}
		
		const rand = Math.floor(Math.random() * enemyTotalNum);
		
		enemies.push(new Enemy(x, y, rad, color, velocity, rand));
	}, 700);
}

function spriteFunc(x, y, width, height){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	
	this.draw = function(cx, cy, cw, ch){
		ctx.drawImage(itemImg, this.x, this.y, this.width, this.height, cx, cy, cw, ch);
	}
}

canvas.addEventListener('click', (e) => {
	const angle = Math.atan2(e.pageY - canvas.height / 2 - 150, e.clientX - window.innerWidth / 2);
	const velocity = {
		x: Math.cos(angle) * 5,
		y: Math.sin(angle) * 5
	}
	
	projectiles.push(new Projectile(canvas.width / 2, canvas.height / 2, 5, 'white', velocity))
});

realtimeScoreDiv.addEventListener('click', (e) => {
	const angle = Math.atan2(e.clientY - canvas.height / 2 - 150, e.clientX - window.innerWidth / 2);
	const velocity = {
		x: Math.cos(angle) * 5,
		y: Math.sin(angle) * 5
	}
	
	projectiles.push(new Projectile(canvas.width / 2, canvas.height / 2, 5, 'white', velocity))
});

startBtn.addEventListener('click', (e) => {
	titleDiv.style.display = 'none';
	descDiv.style.display = 'none';
	bottomImgDiv.style.display = 'none';
	realtimeScoreDiv.style.display = 'flex';
	animate();
	spawnFunc();
});

retryBtn.addEventListener('click', (e) => {
	init();
	animate();
	spawnFunc();
});

main();



