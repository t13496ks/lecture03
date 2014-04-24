var helloWorld = function(){
	var message = document.getElementById("helloWorld");
	message.setAttribute("class", "");
};

var showHelloWorldButton = document.getElementById("showHelloWorld");
showHelloWorldButton.addEventListener("click", helloWorld);

var helloearth = function(){
	var message = document.getElementById("helloearth");
	message.setAttribute("class", "");
};

var showHelloearthButton = document.getElementById("showHelloearth");
showHelloearthButton.addEventListener("click", helloearth);
