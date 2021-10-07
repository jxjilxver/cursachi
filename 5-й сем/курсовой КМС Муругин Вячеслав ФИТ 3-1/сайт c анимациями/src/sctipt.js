new WOW().init();

function ChangeImg(id) {
	let image = document.getElementById(id);
	image.style.display = "block";
}

function ChangeImage2(event) {
	event.style.display = "none";

}
function l_image(a) {
	document.example_img.src = a;
}
window.onload=function(){
	document.getElementById('linkId').focus();
	document.getElementById('linkId').click();
}