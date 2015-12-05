kw[0] = new itementry("back_acne","back_acne");

kw[1] = new itementry("cystic_acne","cystic_acne");

kw[2] = new itementry("rid_of_acne","rid_of_acne");

kw[3] = new itementry("asafoetida","asafoetida");

kw[4] = new itementry("ashoka","ashoka");

kw[5] = new itementry("bala","bala");

kw[6] = new itementry("bhringaraj","bhringaraj");

kw[7] = new itementry("boswellia","boswellia");

kw[8] = new itementry("boswellia_serrata","boswellia_serrata");

kw[9] = new itementry("calamus_root","calamus_root");

kw[10] = new itementry("calamust","calamus");

kw[11] = new itementry("goduchi","goduchi");

kw[12] = new itementry("guggulu","guggulu");

kw[13] = new itementry("amalaki","amalaki");

kw[14] = new itementry("arjuna","arjuna");

kw[15] = new itementry("ashwagandha","ashwagandha");

kw[16] = new itementry("ashwaganda","ashwaganda");

kw[17] = new itementry("herbal_energy","herbal_energy");

kw[18] = new itementry("withania_somnifera","withania_somnifera");

kw[19] = new itementry("withania","withania");

kw[20] = new itementry("ayurveda","ayurveda");

kw[21] = new itementry("ayurvedic_formulation","ayurvedic_formulation");

kw[22] = new itementry("ayurvedic_herbal_blend","ayurvedic_herbal_blend");

kw[23] = new itementry("ayurvedic_herb","ayurvedic_herb");

kw[24] = new itementry("ayurvedic_medicine","ayurvedic_medicine");

kw[25] = new itementry("ayurvedic_product","ayurvedic_product");

kw[26] = new itementry("ayurvedic_remedy","ayurvedic_remedy");

kw[27] = new itementry("ayurvedic_skin_care","ayurvedic_skin_care");

kw[28] = new itementry("ayurvedic","ayurvedic");

kw[29] = new itementry("bacopa_monniera","bacopa_monniera");

kw[30] = new itementry("bacopa_monnieri","bacopa_monnieri");

kw[31] = new itementry("bacopa","bacopa");

kw[32] = new itementry("blood_cleanser","blood_cleanser");

kw[33] = new itementry("skin_irritation","skin_irritation");

kw[34] = new itementry("boil_treatment","boil_treatment");

kw[35] = new itementry("treatment_for_boil","treatment_for_boil");

kw[36] = new itementry("boil","boil");

kw[37] = new itementry("brahmi","brahmi");

kw[38] = new itementry("brami","brami");

kw[39] = new itementry("chyavanprash","chyavanprash");

kw[40] = new itementry("hand_dermatitis","hand_dermatitis");

kw[41] = new itementry("dermatitis","dermatitis");

kw[42] = new itementry("eczema_and_psoriasis","eczema_and_psoriasis");

kw[43] = new itementry("eczema_cure","eczema_cure");

kw[44] = new itementry("eczema_remedy","eczema_remedy");

kw[45] = new itementry("hand_eczema","hand_eczema");

kw[46] = new itementry("treatment_for_eczema","treatment_for_eczema");

kw[47] = new itementry("eczema","eczema");

kw[48] = new itementry("fibromyalgia","fibromyalgia");

kw[49] = new itementry("gotu_kola","gotu_kola");

kw[50] = new itementry("gymnema_sylvestre","gymnema_sylvestre");

kw[51] = new itementry("hives_treatment","hives_treatment");

kw[52] = new itementry("skin_hives","skin_hives");

kw[53] = new itementry("treatment_for_hives","treatment_for_hives");

kw[54] = new itementry("hives","hives");

kw[55] = new itementry("kapha","kapha");

kw[56] = new itementry("kutki","kutki");

kw[57] = new itementry("turmeric","turmeric");

kw[58] = new itementry("mucina_pruriens","mucina_pruriens");

kw[59] = new itementry("sandalwood_oil","sandalwood_oil");

kw[60] = new itementry("sandalwood","sandalwood");

kw[61] = new itementry("neem_leaf","neem_leaf");

kw[62] = new itementry("neem_product","neem_product");

kw[63] = new itementry("neem_oil","neem_oil");

kw[64] = new itementry("sesame_oil","sesame_oil");

kw[65] = new itementry("sunflower_oil","sunflower_oil");

kw[66] = new itementry("neem","neem");

kw[67] = new itementry("neti_pot","neti_pot");

kw[68] = new itementry("sinusitus","sinusitus");

kw[69] = new itementry("parasite_cleanse","parasite_cleanse");

kw[70] = new itementry("pitta","pitta");

kw[71] = new itementry("psoriasis_treatment","psoriasis_treatment");

kw[72] = new itementry("psoriasis","psoriasis");

kw[73] = new itementry("skin_rash","skin_rash");

kw[74] = new itementry("rash","rash");

kw[75] = new itementry("ringworm_treatment","ringworm_treatment");

kw[76] = new itementry("treat_ringworm","treat_ringworm");

kw[77] = new itementry("treatment_for_ringworm","treatment_for_ringworm");

kw[78] = new itementry("ringworm","ringworm");

kw[79] = new itementry("scabies_treatment","scabies_treatment");

kw[80] = new itementry("treatment_for_scabies","treatment_for_scabies");

kw[81] = new itementry("scabies","scabies");

kw[82] = new itementry("shatavari","shatavari");

kw[83] = new itementry("shilajit","shilajit");

kw[84] = new itementry("trifala","trifala");

kw[85] = new itementry("triphala","triphala");

kw[86] = new itementry("vata","vata");

kw[87] = new itementry("acne","acne");



// Next, set a variable for the current url

var OurURL = location.pathname;

//var OurKey = "nothing_so_far";

var OurKey;

// Then, loop through all kw[] values and set the keyword if match, then exit loop

// Use variable se[j].page and se[j].key

// The loop should go at least to the highest number of the kw entries



for (var i=0;i<90;i++)

{

if (kw[i]) {

var testkw = OurURL.indexOf(kw[i].page);

if (testkw != -1)

  {

  OurKey = kw[i].key;

  break;

           }

  }

} // end i loop



// Then, loop through all se[] values and append the keyword if match, then exit loop

for (var j=0;j<10;j++)

{

if (se[j]) {

var testse = OurURL.indexOf(se[j].page);

if (testse != -1)

  {

  OurKey += se[j].key;

  break;

           }

  }

} // end j loop



// Lastly, set our keyword!

if (OurKey) { setKeyword(OurKey); }



//} // end of function CheckMe







// if cookies exist, write scores to text fields and record answers in checkboxes

function getScore() {

  document.forms["quiz"].elements["vata_score"].value = GetCookie("vata");

  document.forms["quiz"].elements["pitta_score"].value = GetCookie("pitta");

  document.forms["quiz"].elements["kapha_score"].value = GetCookie("kapha");

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

      }

      count++;

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



// script added by NET MAN 7/20/01 for Prakriti type questionnaire

function processData() {



// calculate total points for each type

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

  var high = null;

  var mtype = null;

  /*if((pittaScore==kaphaScore) && (pittaScore<vataScore))
  {
  	mytype = 'Vata';
  }
  else if((vataScore==kaphaScore) && (vataScore<pittaScore))
  {
  	mtype = 'Pitta';
  }
  else if((pittaScore==vataScore) && (pittaScore<kaphaScore))
  {
  	mtype = 'Kapha';
  }
  if((pittaScore<kaphaScore) && (kaphaScore<vataScore))
  {
  	mtype = 'Vata';
  }
  else if((vataScore<kaphaScore) && (kaphaScore<pittaScore))
  {
  	mtype = 'Pitta';
  }
  else if((pittaScore<vataScore) && (vataScore<kaphaScore))
  {
  	mtype = 'Kapha';
  }
  else if((vataScore==pittaScore) && (vataScore==kaphaScore))
  {
  	mtype = 'Vata';
  }

  if(((pittaScore<kaphaScore)<vataScore) || ((kaphaScore<pittaScore)<vataScore))
  {
  	mtype = 'Vata';
  }
  else if(((vataScore<kaphaScore)<pittaScore)||((kaphaScore<vataScore)<pittaScore))
  {
  	mtype = 'Pitta';
  }
  else if(((vataScore<pittaScore)<kaphaScore)||((pittaScore<vataScore)<kaphaScore))
  {
  	mtype = 'Kapha';
  }
  */

  if(pittaScore>kaphaScore) {

	if(pittaScore>vataScore)
	{
		mtype= "Pitta";
	}
	else {
		mtype= "Vata";
	}

  }
  else {
	if(kaphaScore>vataScore) {
		mtype= "Kapha";
	}
	else {
		mtype= "Vata";
	}
  }




  //alert(mtype);


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
