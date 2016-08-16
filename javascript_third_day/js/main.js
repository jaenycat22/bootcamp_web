//empty task array to hold future tasks
var taskArray = [];

var init = function(){
	//selecting
	var addButton = document.getElementById("addButton");
	addButton.addEventListener("click", function(e){
		//e.preventDefault;
		saveTask();
	});
};



var saveTask = function(){
	 var taskInput = document.getElementById("newTask");
	 var newTask = taskInput.value;

	 //add the value to the array
	 taskArray.push(newTask);
	 //updateTasks();
	 taskInput.value="";
	 console.log(taskArray);
};

window.onload = init();