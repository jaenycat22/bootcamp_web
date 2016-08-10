// document.getElementById("second_paragraph").style.display="inherit";
var paragraph_showing = false;

document.getElementById("read_more").addEventListener("click", displayElement);

function displayElement(){

	if(paragraph_showing == true){
	document.getElementById("second_paragraph").style.display="none"; 
	paragraph_showing = false;
}  else{
	document.getElementById("second_paragraph").style.display="inherit"; 
	paragraph_showing = true;
}
}