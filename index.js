function web() {
	window.location.assign("index.html");
}

function contact() {
	window.location.assign("https://forms.gle/ccQvEqtB1R6RaouM8");
}
function Navtop() {
	document.getElementById("Nav").style.position = "sticky";
	document.getElementById("Nav").style.position = " -webkit-sticky";
	document.getElementById("Navtop").style.backgroundColor = " #111111";
	document.getElementById("Navtop").style.color = " #EEEEEE";
	document.getElementById("Navnottop").style.backgroundColor = " #EEEEEE";
	document.getElementById("Navnottop").style.color = " #111111";
}
function Navnottop() {
	document.getElementById("Nav").style.position = "static";
	document.getElementById("Nav").style.position = " -webkit-static";
	document.getElementById("Navtop").style.backgroundColor = " #EEEEEE";
	document.getElementById("Navtop").style.color = " #111111";
	document.getElementById("Navnottop").style.backgroundColor = " #111111";
	document.getElementById("Navnottop").style.color = " #EEEEEE";
}