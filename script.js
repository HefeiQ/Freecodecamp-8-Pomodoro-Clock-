
	var c = document.getElementById('inputSession').value * 60;
	var b = document.getElementById('inputBreak').value * 60;
	var t;
	var flag1 = "break";
	var flag2 = "stop";

	function clickClock() {
		if (flag2 === "stop") {
			flag2 = "count";
			countAndBreak();
		} else if (flag2 === "count") {
			flag2 = "stop";
			stopCount();
		}
	}
	
	
	function countAndBreak() {
		if (flag1 === "break") {
			sessionCountDown(); 
		}
		else if (flag1 === "session") {
			breakCountDown();
		}
		t = setTimeout("countAndBreak()",1000);
	}

	function sessionCountDown(){
		document.getElementById('showClock_p1').innerHTML= "Session";
		document.getElementById('showClock_p1').style["color"] = "#9ACD32";
		document.getElementById('showClock_p2').innerHTML= numToTime(c);
		document.getElementById('showClock_p2').style["color"] = "#9ACD32";
		if (c === 0) {
			flag1 = "session";
		}
		c--; 
		if (c == -1)
			c = document.getElementById('inputSession').value * 60;
	}
	
	function breakCountDown(){
		document.getElementById('showClock_p1').innerHTML = "Break";
		document.getElementById('showClock_p1').style["color"] = "red";
		document.getElementById('showClock_p2').innerHTML = numToTime(b);	
		document.getElementById('showClock_p2').style["color"] = "red";		
		if (b === 0) {
			flag1 = "break";
		}
		b--;
		if (b == -1)
			b = document.getElementById('inputBreak').value * 60;
	}

	function stopCount(){
		clearTimeout(t);
	}

	// Argument is in second
	function numToTime(n) {
		var h, m, s, time, hour, minute, second;
		h = Math.floor(n / 3600);
		m = Math.floor((n - h * 3600) / 60);
		s = Math.floor(n - h * 3600 - m * 60);
		time = (h > 0 ? checkTime(h) + ":" : "") + checkTime(m) + ":" + checkTime(s);
		return time;
	}

	function checkTime(t) {
		if (t < 10) {
			t = "0" + t;
		}
		return t;
	}
	
	function increase(id) {
		var temp = document.getElementById(id).value;
		temp++;
		document.getElementById(id).value = temp;		
	}
	
	function decrease(id) {
		var temp = document.getElementById(id).value;
		if (temp > 0) {
			temp--;
			document.getElementById(id).value = temp;
		}		
	}
	
	function clickIncrease(id) {
		if (flag2 == "stop") {
			increase(id);
			if (id == "inputSession") {
				var s = document.getElementById('inputSession').value;
				c = s * 60;
				if (document.getElementById('showClock_p1').innerHTML == "Session") {
					document.getElementById('showClock_p2').innerHTML = s;
				}			
			} else if (id == "inputBreak") {
				var s = document.getElementById('inputBreak').value;
				b = s * 60;
				if (document.getElementById('showClock_p1').innerHTML == "Break") {
					document.getElementById('showClock_p2').innerHTML = s;
				}
			}		
		}		
	}
	
	function clickDecrease(id) {
		if (flag2 == "stop") {
			decrease(id);
			if (id == "inputSession") {
				var s = document.getElementById('inputSession').value;
				c = s * 60;
				if (document.getElementById('showClock_p1').innerHTML == "Session") {
					document.getElementById('showClock_p2').innerHTML = s;
				}			
			} else if (id == "inputBreak") {
				var s = document.getElementById('inputBreak').value;
				b = s * 60;
				if (document.getElementById('showClock_p1').innerHTML == "Break") {
					document.getElementById('showClock_p2').innerHTML = s;
				}
			}	
		}		
	}
