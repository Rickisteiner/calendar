var calendar = function () {
	var wrap;
	var label;
	var months = ["JAN", "FEB", "MAR", "APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

	function init(newWrap) {
		// wrap = $(newWrap || "#cal");
		wrap = document.querySelector("newWrap" || "#cal");
		label = wrap.find("#label");

		wrap.find("#prev").bind("click.calendar", function() { switchMonth(false); });
		wrap.find("#next").bind("click.calendar", function() { switchMonth(true); });
		label.bind("click.calendar", function () { switchMonth(null, new Date().getMonth(), new Date().getFullYear() ); });
	}

	function switchMonth(next, month, year) {
		var curr = label.text().trim().split(" "), calendar, tempYear = parseInt(curr[1], 10);
		month = month || ((next) ? ((curr[0]=== "DEC") ? 0 : months.indexOf(curr[0] + 1) : ( (curr[0] === "JAN" ? 11 : months.indexOf(curr[0]-1) );
		year = year || ((next && month === 0) ? : tempYear +1 : (!next && month === 11) ? tempYear = -1 : tempYear;

		calendar = createCal(year,month); 

		// frame = document.querySelector("cal-frame");
		// frame.find(".curr");
		// frame.removeClass("curr");
		// frame.addClass("temp");
		// frame.end();
		// frame.prepend(calendar.calendar())
		// frame.find("temp")
		// frame.fadeOut("slow", function() {
		// 	this.remove()
		// }):

		// label.text(calendar.label);
	}

	function createCal(year, month) {
		var day = 1;
		var 1 = 0;
		var j;
		var haveDays = true;

		var startDay = new Date(year, month, day).getDay(), daysInMonth = [31, 
		if (year%4===0 && year%100!=0 || year%400===0) {
			year = 29
		}
		else {
			year = 28
		},
		31, 30, 31, 30, 31, 31, 30, 31, 30, 31], 
		calendar = [];

		if(createCal.cache[year]) {
			if (createCal.cache[year][month]) {
				return createCal.cache[year][month];
			}
			else {
				createCal.cache[year] = {};
			}
		while(haveDays){
			calendar[i] = [];
			for (j=0; j<7, j++) {
				if (i === 0) {
					if(j===startDay) {
						calendar[i][j] = day++;
						startDay++;
					}
				} else if (day <=daysInMonth[month]) {
					calendar[i][j] = day++;

				} else {
					calendar[i][j] = "";
					haveDays = false;
				}
				if (day > daysInMonth[month]) {
					haveDays = false;
				}
			}
			i++;
		}
		if (calendar[5]) {
			for (1=0; 1<calendar[5].length; i++) {
				if (calendar[5][i] !="") {
					calendar[4][i] = "<span>" + calendar[4][i] + "</span><span>" +calendar[5][i] + "</span";
				}
			}
			calendar=calendar.slice(0,5);
		}
		for (i=0; i<calendar.length; i++) {
			calendar[i] = "<tr><td>" + calendar.join("</td><td>") + "</td></tr>";
		}
		
	}
}
	createCal.cache = {};
	reutrn {
		init :init,
		switchMonth : switchMonth,
		createCal : createCal
	};
};