var div;
var board = document.querySelector(".board");
var letters = [, "A", "B", "C", "D", "E", "F", "G", "H"];


for (var i = 0; i < 8; i++) {
	for (var j = 0; j < 4; j++) {
		if (i % 2 == 0) {
			div = document.createElement("div");
			div.classList.add("cell", "black");
			board.appendChild(div);

			div = document.createElement("div");
			div.classList.add("cell", "white");
			board.appendChild(div);
		} else {
			div = document.createElement("div");
			div.classList.add("cell", "white");
			board.appendChild(div);

			div = document.createElement("div");
			div.classList.add("cell", "black");
			board.appendChild(div);
		}
	}
}

var cells = document.querySelectorAll(".cell");
var c = 0;
for (i = 1; i < 9; i++) {
	for (j = 1; j < 9; j++) {
		cells[c++].classList.add(letters[i] + j); //добавляем класс с номером ячейки
	}
}


function setStarnPosition() {
	//пешки
	for (i = 1; i < 9; i++) {
		document.getElementsByClassName(letters[i] + 2)[0].classList.add("whitePawn");
	}
	for (i = 1; i < 9; i++) {
		document.getElementsByClassName(letters[i] + 7)[0].classList.add("blackPawn");
	}
	//ладьи
	document.querySelector(".A1").classList.add("whiteRook");
	document.querySelector(".H1").classList.add("whiteRook");
	document.querySelector(".A8").classList.add("blackRook");
	document.querySelector(".H8").classList.add("blackRook");
	//кони
	document.querySelector(".B1").classList.add("whiteKnight");
	document.querySelector(".G1").classList.add("whiteKnight");
	document.querySelector(".B8").classList.add("blackKnight");
	document.querySelector(".G8").classList.add("blackKnight");
	//слоны
	document.querySelector(".C1").classList.add("whiteBishop");
	document.querySelector(".F1").classList.add("whiteBishop");
	document.querySelector(".C8").classList.add("blackBishop");
	document.querySelector(".F8").classList.add("blackBishop");
	//королевы
	document.querySelector(".D1").classList.add("whiteQueen");
	document.querySelector(".D8").classList.add("blackQueen");
	//короли
	document.querySelector(".E1").classList.add("whiteKing");
	document.querySelector(".E8").classList.add("blackKing");
	//пустые клетки
	for (i = 1; i < 9; i++) {
		for (j = 3; j < 7; j++) {
			document.getElementsByClassName(letters[i] + j)[0].classList.add("empty");
		}
	}
}

setStarnPosition();

//var active;
//var turn = "begin";
//for (i = 0; i < 64; i++) {
//	document.querySelectorAll(".cell")[i].addEventListener("click", function () {
//		if (turn === "begin" && (this.classList[3] !== "empty")) {
//			active = this;
//			this.classList.add("highlighted");
//			turn = "end";
//		} else if (turn === "end") {
//			if (this.classList[3][0] !== active.classList[3][0]) {
//				this.classList.replace(this.classList[3], active.classList[3]);
//				active.classList.replace(active.classList[3], "empty");
//			}
//			turn = "begin";
//			active.classList.remove("highlighted");
//		}
//	})
//}

var active;
var turn = "begin";

document.querySelector(".board").addEventListener("click", function (e) {
	if (turn === "begin" && (e.target.classList[3] !== "empty")) {
		active = e.target;
		e.target.classList.add("highlighted");
		turn = "end";
	} else if (turn === "end") {
		if (e.target.classList[3][0] !== active.classList[3][0]) {
			e.target.classList.replace(e.target.classList[3], active.classList[3]);
			active.classList.replace(active.classList[3], "empty");
		}
		turn = "begin";
		active.classList.remove("highlighted");
	}
})
