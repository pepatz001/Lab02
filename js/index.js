var check = true;
var check2 = true;

function upper(myField) {
	if(myField.id == "shift"){
		if(check == true){
			var letter = document.getElementsByClassName("letter");
			//alert(letter[0].innerHTML);
			for (var i = 0; i < letter.length; i++) {
				document.getElementsByClassName("letter")[i].innerHTML = letter[i].innerHTML.toUpperCase();
			}
			check = false;
			//document.getElementById("a").innerHTML = "A";
		} else if(check == false){
			var letter = document.getElementsByClassName("letter");
			//alert(letter[1].innerHTML);
			for (var i = 0; i < letter.length; i++) {
				document.getElementsByClassName("letter")[i].innerHTML = letter[i].innerHTML.toLowerCase();
			}
			check = true;
			//document.getElementById("a").innerHTML = "A";
		}
	} else if(myField.id == "#+="){
		if(check2 == true){
			var letter = document.getElementsByClassName("letter");
			var num = ["[", "]", "{", "}", "#", "%", "^", "*", "+", "=", '\\', "|", "<", ">", "$", "&", "@", "'", '"', ".", ",", "?", "!", "", "", ""];
			//alert(letter[0].innerHTML);
			for (var i = 0; i < letter.length; i++) {
				document.getElementsByClassName("letter")[i].innerHTML = num[i];
			}
			check2 = false;
			//document.getElementById("a").innerHTML = "A";
		} else if(check2 == false){
			var letter = document.getElementsByClassName("letter");
			var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "_", "/", ":", ";", "(", ")", "$", "&", "@", "'", '"', ".", ",", "?", "!"];
			//alert(letter[1].innerHTML);
			for (var i = 0; i < letter.length; i++) {
				document.getElementsByClassName("letter")[i].innerHTML = num[i];
			}
			check2 = true;
			//document.getElementById("a").innerHTML = "A";
		}
	}
}

function getText(text){
	insertAtCursor(document.getElementById('textarea'), text.innerHTML);
	if(check == false){
		var letter = document.getElementsByClassName("letter");
		//alert(letter[1].innerHTML);
		for (var i = 0; i < letter.length; i++) {
			document.getElementsByClassName("letter")[i].innerHTML = letter[i].innerHTML.toLowerCase();
		}
		check = true;
			//document.getElementById("a").innerHTML = "A";
	}
	//document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML + text.innerHTML;
}

function backspace(){
	deleteAtCursor(document.getElementById('textarea'));
	//document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML.slice(0,-1);
}

function space(){
	insertAtCursor(document.getElementById('textarea'), " ");
	//document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML + " ";
}

function enter(){
	insertAtCursor(document.getElementById('textarea'), "&#10;");
	//document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML + "&#10;";
}

function insertAtCursor(myField, myValue) {
    var startPos = myField.selectionStart;
    var endPos = myField.selectionEnd;
    myField.value = myField.value.substring(0, startPos)
        + myValue
        + myField.value.substring(endPos, myField.value.length);

    document.getElementById("textarea").focus();
    document.getElementById("textarea").selectionEnd = startPos + 1;
}

function deleteAtCursor(myField) {
    var startPos = myField.selectionStart;
    var endPos = myField.selectionEnd;
    myField.value = myField.value.substring(0, startPos - 1)
        + myField.value.substring(endPos, myField.value.length);

    document.getElementById("textarea").focus();
    document.getElementById("textarea").selectionEnd = startPos - 1;
}

function changeToNum(myField){
	if(myField.id == "123"){
		var letter = document.getElementsByClassName("letter");
		var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "_", "/", ":", ";", "(", ")", "$", "&", "@", "'", '"', ".", ",", "?", "!"];
		//alert(letter[0].innerHTML);
		for (var i = 0; i < letter.length; i++) {
			document.getElementsByClassName("letter")[i].innerHTML = num[i];
		}
		document.getElementById("123").innerHTML = "ABC";
		document.getElementById("123").id = "ABC";
		document.getElementById("shift").innerHTML = "#+=";
		document.getElementById("shift").id = "#+=";
		//alert(document.getElementById("#+=").id);
	} else if(myField.id == "ABC"){
		var letter = document.getElementsByClassName("letter");
		var num = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", 'c', "v", "b", "n", "m"];
		//alert(letter[0].innerHTML);
		for (var i = 0; i < letter.length; i++) {
			document.getElementsByClassName("letter")[i].innerHTML = num[i];
		}
		document.getElementById("ABC").innerHTML = "123";
		document.getElementById("ABC").id = "123";
		document.getElementById("#+=").innerHTML = "shift";
		document.getElementById("#+=").id = "shift";
		//alert(document.getElementById("shift").id);
	}
	
}