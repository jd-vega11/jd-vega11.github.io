"use strict";

function callback(data) {

	console.log("callback");
	console.log(data);

	$("#experience")
	.append(data.map(function (d) { 

		var contenido = $("<div>")
		.addClass("resume-content")
		.html("<h3>" + d.activity + "</h3>"+
					"<div class='subheading mb-3'> Contacto: "+
						"<a href='"+ d.urlContacto + "'>" + d.contacto + "</a></div>" +
					"<p>"+ d.description + "</p>");



		var fecha = $("<div>")
		.addClass("resume-date text-md-right")
		.html("<span class='text-primary'>"+ d.date + "</span>");


		return $("<div>")
		.addClass("resume-item d-flex flex-column flex-md-row mb-5")
		.append(contenido)
		.append(fecha);
	})); 

}


console.log("pre-loading of activities");
$.getJSON("content/activities.json", callback);

console.log("process complete");