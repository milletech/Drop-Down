
//============THE EVENTS===============

var button=document.getElementById("mybutton");
var content=document.getElementById("content");

button.onclick=function(){
	if(content.className=="open"){
		//shrink the box
		content.className="";
		button.innerHTML="Show More";

	}else{
		//Expand the box
		content.className="open";
		button.innerHTML="Showless";
	}
}