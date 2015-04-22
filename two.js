var thirtyOne = ["JAN", "MAR", "MAY", "JUL","AUG","OCT","DEC"]
var thirty = ["APR","JUN","SEP","NOV"]
var feb = "FEB"]

//Then for each of these I am saying if this month then document.create this.

//this needs to be triggered by an eventlistener. This should show up whenever you click the next or previous. 
//Apr will just be hardcoded in. 

var makeDates = function(thirtyOne, thirty, feb) {
	var month = document.getElementById("month-year");
	if(month === feb) { 
		for (i=0; i < 28; i++) { 
			var days = document.create("<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
					<tr><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td></tr>
					<tr><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td></tr> 
					<tr><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td></tr> 
					<tr><td>27</td><td>28</td></tr>");
		days.innerhtml = i;
	}
	if(month === thirtyOne) { 
		for (i=0; i < 31; i++) { 
			var days = document.create("<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
					<tr><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td></tr>
					<tr><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td></tr> 
					<tr><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td></tr> 
					<tr><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td></tr>")
		days.innerhtml = i;
	}
	if(month = thirty) {
		for (i=0; i < 30; i++) { 
			var days = document.create("<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
					<tr><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td></tr>
					<tr><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td></tr> 
					<tr><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td></tr> 
					<tr><td>27</td><td>28</td><td>29</td><td>30</td></tr>")
		days.innerhtml = i;
	}
}