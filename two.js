var thirtyOne = ["JAN", "MAR", "MAY", "JUL","AUG","OCT","DEC"];
var thirty = ["APR","JUN","SEP","NOV"];
var feb = ["FEB"];

var makeDates = function(thirtyOne, thirty, feb) {
	
	var month = document.getElementById("label");
	var days = document.querySelector("td");
	
	if(month === feb) { 
		for (i=0; i < 28; i++) { 
			var daysMonth = document.create("td");
			daysMonth.innerhtml = i;
			days.class="unselected"
		}
	}
	if(month === thirtyOne) { 
		for (i=0; i < 31; i++) { 
			var daysMonth = document.create("td");
			daysMonth.innerhtml = i;
			days.class="unselected"
		}
	}
	if(month = thirty) {
		for (i=0; i < 30; i++) { 
			var daysMonth = document.create("td");
			daysMonth.innerhtml = i;
			days.class="unselected"
		}
	}
}

var button = document.getElementById("next");

button.addEventListener("click", function(){
	makeDates();
});