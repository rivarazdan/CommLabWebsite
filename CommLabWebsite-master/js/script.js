

var buttonAbuDhabi = document.getElementById('buttonAbuDhabi');
var buttonLondon = document.getElementById('buttonLondon');
var buttonMumbai = document.getElementById('buttonMumbai');

buttonAbuDhabi.addEventListener("click", showAbuDhabi);
buttonLondon.addEventListener("click", showLondon);
 buttonMumbai.addEventListener("click", showMumbai);



function showAbuDhabi(){
	// document.getElementById('text30').style.backgroundColor = "white";
	document.getElementById('textAbuDhabi').style.display = 'block';
	document.getElementById('textLondon').style.display = 'none';
	document.getElementById('textMumbai').style.display = 'none';

    document.getElementById("picAD").style.visibility = "visible";
	document.getElementById("picLon").style.visibility = "hidden";
	document.getElementById("picMum").style.visibility = "hidden";
}



function showLondon(){
	document.getElementById('textAbuDhabi').style.display = 'none';
	document.getElementById('textLondon').style.display = "block";
	document.getElementById('textMumbai').style.display = 'none';

	document.getElementById("picAD").style.visibility = "hidden";
	document.getElementById("picLon").style.visibility = "visible";
	document.getElementById("picMum").style.visibility = "hidden";
}



function showMumbai() {
	document.getElementById('textAbuDhabi').style.display = 'none';
	document.getElementById('textLondon').style.display = 'none';
	document.getElementById('textMumbai').style.display ="block"; 

	document.getElementById("picAD").style.visibility = "hidden";
	document.getElementById("picLon").style.visibility = "hidden";
	document.getElementById("picMum").style.visibility = "visible";

}

