window.onscroll = function() {
	sticky()
};

var header = document.getElementById("info");
var stick = header.offsetTop;

function sticky() {
	if (window.pageYOffset >= stick) {
		header.classList.add("is-sticky")
	}
	else {
		header.classList.remove("is-sticky");
	}
}