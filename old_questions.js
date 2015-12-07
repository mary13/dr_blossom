function getScore() {

// split out results from cookies for quiz questions

  var vataValues = GetCookie("vatachecked");
  var pittaValues = GetCookie("pittachecked");
  var kaphaValues = GetCookie("kaphachecked");

  var vataArray = vataValues.split('?');
  var count = 0;
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 3; j++) {
      if (vataArray[count] == 'true') {
        document.forms["quiz"].elements["vata" + i][j].checked = true;
      }      count++;
    }

  }

  var pittaArray = pittaValues.split('?');

  count = 0;

  for (var i = 0; i < 10; i++) {

    for (var j = 0; j < 3; j++) {

      if (pittaArray[count] == 'true') {

        document.forms["quiz"].elements["pitta" + i][j].checked = true;

      }

      count++;

   }

  }

  var kaphaArray = kaphaValues.split('?');

  count = 0;

  for (var i = 0; i < 10; i++) {

    for (var j = 0; j < 3; j++) {

      if (kaphaArray[count] == 'true') {

        document.forms["quiz"].elements["kapha" + i][j].checked = true;

      }

      count++;

    }

  }

}


  var vataSum = 0;

  var pittaSum = 0;

  var kaphaSum = 0;

//cookie string variables

  var vataChecked = "";

  var pittaChecked = "";

  var kaphaChecked = "";

  for (var i = 0; i < 10; i++) {

      for (var j = 0; j < 3; j++) {

        if (document.forms["quiz"].elements["vata" + i][j].checked) {

	      vataSum += parseInt(document.forms["quiz"].elements["vata" + i][j].value);

          vataChecked += "true?";

        }

        else vataChecked += "false?";

      }

  }

  for (var i = 0; i < 10; i++) {

      for (var j = 0; j < 3; j++) {

        if (document.forms["quiz"].elements["pitta" + i][j].checked) {

          pittaSum += parseInt(document.forms["quiz"].elements["pitta" + i][j].value);

          pittaChecked += "true?";

        }

        else pittaChecked += "false?";

      }

  }

  for (var i = 0; i < 10; i++) {

      for (var j = 0; j < 3; j++) {

        if (document.forms["quiz"].elements["kapha" + i][j].checked) {

          kaphaSum += parseInt(document.forms["quiz"].elements["kapha" + i][j].value);

          kaphaChecked += "true?";

        }

        else kaphaChecked += "false?";

      }

  }

  // convert scores to percentage and display in text fields

  var typeSum = vataSum + pittaSum + kaphaSum;



  var vataScore = (Math.round ((vataSum / typeSum) * 1000)) / 10;

  var pittaScore = (Math.round ((pittaSum / typeSum) * 1000)) / 10;

  var kaphaScore = (Math.round ((kaphaSum / typeSum) * 1000)) / 10;

  //showUser(vataScore,pittaScore,kaphaScore);

  document.forms["quiz"].elements["vata_score"].value = vataScore;

  document.forms["quiz"].elements["pitta_score"].value = pittaScore;

  document.forms["quiz"].elements["kapha_score"].value = kaphaScore;

  //Prakriti: " Dosha Type"/"x%" Vata/"x%"pitta/"x%" Kapha

  document.getElementById('pkrscores').innerHTML = '';
  document.getElementById('pkrscores').innerHTML = 'Prakriti: " Dosha Type " ' + '"' + vataScore + '%" Vata';
  document.getElementById('pkrscores').innerHTML += ' "' + pittaScore + '%" Pitta';
  document.getElementById('pkrscores').innerHTML += ' "' + kaphaScore + '%" Kapha';



  high = Math.max(pittaScore, Math.max(kaphaScore, vataScore));

  //alert(high);

  //showUser(vataScore);

// determine Prakriti type, based on quiz results

  var isVata = ( vataScore >= 20);

  var isPitta = ( pittaScore >= 20);

  var isKapha = ( kaphaScore >= 20);

  var isTri = ( (vataScore >= 30) && (pittaScore >= 30) && (kaphaScore >= 30) );

  var myType = null;

  var myUrl = "#";

  if (isTri) {

    myType = "Vata-Pitta-Kapha";

    myUrl = "index.php?option=com_content&view=article&id=55&Itemid=80"

  }



// new code 2/16/02 - if all are over 20, but lower 2 are equal



  else if (isVata && isPitta && isKapha) {

    if ( (kaphaScore < vataScore) && (kaphaScore < pittaScore) ) {

      myType = "Vata-Pitta";

	  myUrl = "index.php?option=com_content&view=article&id=52&Itemid=80";

    }

    else if ( (pittaScore < vataScore) && (pittaScore < kaphaScore) ) {

      myType = "Vata-Kapha";

      myUrl = "index.php?option=com_content&view=article&id=52&Itemid=80";

    }

    else if ( (vataScore < pittaScore) && (vataScore < kaphaScore) ) {

      myType = "Pitta-Kapha";

      myUrl = "index.php?option=com_content&view=article&id=52&Itemid=80";

    }

    // below adds check for 2 lower items being equal

    else if ( (kaphaScore == vataScore) && (kaphaScore < pittaScore) ) {

	    myType = "Pitta";

	    myUrl = "index.php?option=com_content&view=article&id=49&Itemid=80";

    }

    else if ( (kaphaScore == pittaScore) && (kaphaScore < vataScore) ) {

	    myType = "Vata";

	    myUrl = "index.php?option=com_content&view=article&id=48&Itemid=80";

    }

    else if ( (pittaScore == vataScore) && (pittaScore < kaphaScore) ) {

	    myType = "Kapha";

	    myUrl = "index.php?option=com_content&view=article&id=50&Itemid=80";

    }

  }



  else if (isVata && isPitta) {

    myType = "Vata-Pitta";

    myUrl = "index.php?option=com_content&view=article&id=52&Itemid=80";

  }

  else if (isVata && isKapha) {

    myType = "Vata-Kapha";

    myUrl = "index.php?option=com_content&view=article&id=52&Itemid=80";

  }

  else if (isPitta && isKapha) {

    myType = "Pitta-Kapha";

    myUrl = "index.php?option=com_content&view=article&id=52&Itemid=80";

  }

  else if (isVata) {

    myType = "Vata";

    myUrl = "index.php?option=com_content&view=article&id=48&Itemid=80";

  }

  else if (isPitta) {

    myType = "Pitta";

    myUrl = "index.php?option=com_content&view=article&id=49&Itemid=80l";

  }

  else if (isKapha) {

    myType = "Kapha";

    myUrl = "index.php?option=com_content&view=article&id=50&Itemid=80"

  }

  else {

  }


// save score for current session

  SetCookie("vata", vataScore);

  SetCookie("pitta", pittaScore);

  SetCookie("kapha", kaphaScore);

  SetCookie("mytype", myType);

  SetCookie("mtype", mtype);

  SetCookie("myurl", myUrl);

  SetCookie("vatachecked", vataChecked);

  SetCookie("pittachecked", pittaChecked);

  SetCookie("kaphachecked", kaphaChecked);

  SetCookie("high", high);

//showUser(vataScore,pittaScore,kaphaScore,myType);

  highs = GetCookie ('high');

showUser(vataScore,pittaScore,kaphaScore,highs,mtype);

// display Prakriti type

//  location.href= "http://banyanbotanicals.com/constitutions/index.html#results";

//  location.href= "index2.html#results";

 // location.reload(true);



 document.getElementById('writetype').innerHTML='<h2>Based on your answers to the above<br>questions, your ayurvedic constitution is </h2><h3>' + GetCookie("mytype") + '</h3><h4><a href="' + GetCookie("myurl") + '">Click to read more about ' + GetCookie("mytype") + '</h4>';


window.location.reload();

}

window.onload = function() {

  document.forms["quiz"].elements["vata_score"].value = GetCookie ('vata');

  document.forms["quiz"].elements["pitta_score"].value = GetCookie ('pitta');

  document.forms["quiz"].elements["kapha_score"].value = GetCookie ('kapha');

}



/* Function Update in DB */



//function showUser(vata,pitta,kapha)

//function showUser(vata,pitta,kapha,mtype)

function showUser(vata,pitta,kapha,high,mtype)

{

//if (vata=="" && pitta=="" && kapha=="" && mtype=="")
if (vata=="" && pitta=="" && kapha=="" && high=="")

//if (vata=="")

  {

  //document.getElementById("txtHint").innerHTML="";

  return;

  }




/* End Function*/







  if (GetCookie ('mytype')) {



    document.write('<tr align="center"><td colspan="4"><h2>Based on your answers to the above<br>questions, your ayurvedic constitution is </h2><h3>' + GetCookie("mytype") + '</h3><h4><a href="' + GetCookie("myurl") + '">Click to read more about ' + GetCookie("mytype") + '</h4></td></tr>');

  }

}

function writeType2() {

  if (GetCookie ('mytype')) {

    document.write('<h2>Based on your answers to the questions, your ayurvedic constitution is </h2><h3>' + GetCookie("mytype") + '</h3><h4><a href="' + GetCookie("myurl") + '">Click to read more about ' + GetCookie("mytype") + '</a></h4>');

  }

  if (GetCookie ('vata')) {document.write("<h2>Your Vata Prakriti Score is " + GetCookie ('vata') + "%</h2>");}

  if (GetCookie ('pitta')) {document.write("<h2>Your Pitta Prakriti Score is " + GetCookie ('pitta') + "%</h2>");}

  if (GetCookie ('kapha')) {document.write("<h2>Your Kapha Prakriti Score is " + GetCookie ('kapha') + "%</h2>");}

}





// script added by NET MAN 4/26/02 for Vikriti type questionnaire

function processVikriti() {

// calculate total points for each type

  var vataSum = 0;

  var pittaSum = 0;

  var kaphaSum = 0;

//cookie string variables

  var vataChecked = "";

  var pittaChecked = "";

  var kaphaChecked = "";

  for (var i = 0; i < 10; i++) {

      for (var j = 0; j < 2; j++) {

        if (document.forms["quiz"].elements["vata" + i][j].checked) {

          vataSum += parseInt(document.forms["quiz"].elements["vata" + i][j].value);

          vataChecked += "true?";

        }

        else vataChecked += "false?";

      }

  }

  for (var i = 0; i < 10; i++) {

      for (var j = 0; j < 2; j++) {

        if (document.forms["quiz"].elements["pitta" + i][j].checked) {

          pittaSum += parseInt(document.forms["quiz"].elements["pitta" + i][j].value);

          pittaChecked += "true?";

        }

        else pittaChecked += "false?";

      }

  }

  for (var i = 0; i < 10; i++) {

      for (var j = 0; j < 2; j++) {

        if (document.forms["quiz"].elements["kapha" + i][j].checked) {

          kaphaSum += parseInt(document.forms["quiz"].elements["kapha" + i][j].value);

          kaphaChecked += "true?";

        }

        else kaphaChecked += "false?";

      }

  }

// convert scores to points for results

  var vataScore = vataSum * 10;

  var pittaScore = pittaSum * 10;

  var kaphaScore = kaphaSum * 10;

// determine Vikriti type, based on quiz results

  var isVata = ( vataScore > 0);

  var isPitta = ( pittaScore > 0);

  var isKapha = ( kaphaScore > 0);

  var isBalance = ( !isVata && !isPitta && !isKapha);

  var myType = null;

  var summary = null;

  if (isBalance) {

  	myType = "Balanced";

  	summary = "vikriti_res_balance.html";

  }

  if (!isBalance) {

  	if ((pittaScore == kaphaScore) && (vataScore == pittaScore) && (vataScore == kaphaScore)) {

  	  myType = "Vata-Pitta-Kapha";

  	  summary = "vikriti_res_tri.html";

	  }

	  else if ((vataScore == pittaScore) && (vataScore > kaphaScore)) {

	    myType = "Vata-Pitta";

  	  summary = "vikriti_res_vat_pit.html";

	  }

	  else if ((vataScore == kaphaScore) && (vataScore > pittaScore)) {

	    myType = "Vata-Kapha";

  	  summary = "vikriti_res_vat_kap.html";

	  }

	  else if ((pittaScore == kaphaScore) && (pittaScore > vataScore)) {

	    myType = "Pitta-Kapha";

  	  summary = "vikriti_res_pit_kap.html";

	  }

	  else if ((isVata) && (vataScore > kaphaScore) && (vataScore > pittaScore)) {

	    myType = "Vata";

  	  summary = "vikriti_res_vata.html";

	  }

	  else if ((isPitta) && (pittaScore > kaphaScore) && (pittaScore > vataScore)){

	    myType = "Pitta";

  	  summary = "vikriti_res_pitta.html";

	  }

	  else if ((isKapha) && (kaphaScore > vataScore)&& (kaphaScore > pittaScore)){

	    myType = "Kapha";

  	  summary = "vikriti_res_kapha.html";

	  }

	  else {

	  }

	}

// save score for current session

  SetCookie("v_vata", vataScore);

  SetCookie("v_pitta", pittaScore);

  SetCookie("v_kapha", kaphaScore);

  SetCookie("v_mytype", myType);

  SetCookie("v_vatachecked", vataChecked);

  SetCookie("v_pittachecked", pittaChecked);

  SetCookie("v_kaphachecked", kaphaChecked);

  SetCookie("v_summary", summary);

  location.href= summary;

}






function processVikriti234 () {

	var randomnumber=Math.floor(Math.random()*101);

	document.getElementById('vkscr').innerHTML = "Your  score is " + randomnumber + "%";

}
// -->
