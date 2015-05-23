 /*function replaceName() {
  var myNewname = window.prompt("Pick a new name!");
  document.getElementById('user-name').innerHTML = myNewname;
}
document.onclick = replaceName;>*/

/*$(document).ready(function() {
	$("copyright").click(function() {
		$(this).css('color','purple');
	});
});*/

document.getElementById('copyright').onclick = function() {
	this.style.color = 'purple';
}
