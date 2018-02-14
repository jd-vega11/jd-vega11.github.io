"use strict";

function callback(data) {

	console.log("callback");
	console.log(data);

	$("#projects")
	.append(data.map(function (d, index) { 

		var col1 = $("<div>")
		.addClass("col-lg-6")
		.html("<a class='project-item' href='#'>"+
			"<span class='caption'>" +
			"<span class='caption-content'>"+							
			"<p class='mb-0'>"+d.description+"</p>"+
			"</span></span>"+
			"<img class='img-fluid projectImg' src="+d.img+" alt=''></a>");



		var col2 = $("<div>")
		.addClass("col-lg-6")
		.addClass("projectsInfo")
		.html("<h3 class='section-heading mb-4'>" + 
			"<span class='section-heading-upper'>"+ d.name+"</span>"+
			"<span class='section-heading-lower'>"+ d.date + "</span></h3>"+
			"<p>"+ d.detail +"</p>"+
			"<h5> Languages </h5>"+
			"<p>"+ d.lang + "</p>"+
			"<h5> Tools </h5>"+
			"<p>"+d.tec +"</p>");


		if(index % 2 === 0)
		{
			return $("<div>")
			.addClass("row singleProject")
			.append(col1)
			.append(col2);
		}
		else
		{
			return $("<div>")
			.addClass("row singleProject")
			.append(col2)
			.append(col1);
		}
		
	})); 

}


console.log("pre-loading of projects");
$.getJSON("content/projects.json", callback);

console.log("process complete");