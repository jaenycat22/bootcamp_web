// var places=["south america", "Europe", "Peru", "Alabama", "California","south america", "Europe", "Peru", "Alabama", "California"]

// for(var i = 0; i<places.length; i++){
// 	console.log("I have been to" + places[i]);
// }





// for(var i = 100; i>0; i--){
// 	console.log("hello!"+i);
// }







// var names = ["Jack","Jill","Frank","Peggy"]
// var place_i_travel_to = ["South America","Iceland","France","America"]
// var to_do_list =["go to bank", "grocery store"]
// var color =["#088A29", "#5FB404", "#58FA58", "#31B404", "#DF7401", "#F4FA58"]

// console.log(name[0] +"went to" + place_i_travel_to[0]);




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