let countryData = {
	"India": {
		"West Bengal": ["Kolkata", "Asansol", "Durgapur", "Siliguri", "Darjeeling"],
		"Bihar": ["Patna", "Muzaffarpur", "Bhagalpur", "Gaya", "Katihar"],
		"Jharkhand": ["Ranchi", "Patratu", "Bokaro", "Dhanbad", "Tatanagar"],
		"Karnataka": ["Bengaluru", "Mysuru", "Hubli", "Belgaum", "Mangalore"],
		"Tamil Nadu": ["Chennai", "Madurai", "Salem", "Hosur", "Coimbatore"]
	},
	
	"Finland": {
		"Uusimaa": ["Helsinki", "Espoo", "Vantaa", "Kerava", "Porvoo"],
		"Kymenlaakso": ["Kouvola", "Kotka", "Hamina", "Virolahti", "Kausala"],
		"Lappi": ["Rovaniemi", "Tornio", "Kemi", "Kemijärvi", "Ivalo"],
		"Pirkanmaa": ["Tampere", "Lempäälä", "Pirkkala", "Ylöjärvi", "Toijala"],
		"Pohjois-Pohjanma": ["Oulu", "Raahe", "Kempele", "Kuusamo", "Ylivieska"]
	},
};

function changeState() {
	let con = $("#country").val();
	let stt = $("#state").val();
	
	$("#city").empty();
	cities = countryData[con][stt];
	
	cities.forEach((c) => {
		$("#city").append(new Option(c));
	});
}

function changeCountry() {
	let con = $("#country").val();
	
	$("#state").empty();
	states = Object.keys(countryData[con]);
	
	states.forEach((s) => {
		$("#state").append(new Option(s));
	});
	
	changeState();
}

function loadRadio() {
	let chosen = $("input[name='favfood']:checked").val();
	console.log(chosen);
	
	if (chosen) {
		pic = document.createElement("img");
		pic.src = "img/" + chosen + ".jpg";
		$("#imgholder").empty().append(pic);
	}
}

function rater() {
	let val = parseFloat($("#nstars").val());
	
	if ((isNaN(val)) || (val < 0)) {
		val = 0;
		$("#nstars").val(val);
	}
	
	else if (val > 5) {
		val = 5;
		$("#nstars").val(val);
	}
	
	let fill_percent = (val * 100) / 5;
	let final_width = fill_percent + "%";
	
	$("#inner-starholder").css("width", final_width);
	console.log(final_width);
}

$(document).ready(() => {
	//	1B
	$("input[name='favfood']").click(loadRadio);
	loadRadio();
	
	//	1C
	countries = Object.keys(countryData);
	
	countries.forEach((c) => {
		$("#country").append(new Option(c));
	});
	
	changeCountry();
	
	$("#country").change(changeCountry);
	$("#state").change(changeState);
	
	//	1E
	$("#nstars").change(rater);
	rater();
});