// JavaScript Document

var header = document.getElementById("overskrift1")

var date = new Date();

var hours= date.getHours();


if(hours >= 5 && hours<12){
	header.innerText = "God Morgen";
}
if(hours >= 12 &&  hours < 17){
	header.innerText = "God Dag"
}