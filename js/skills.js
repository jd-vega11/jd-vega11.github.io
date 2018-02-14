"use strict";

function callback(data) {

	console.log("callback");
	console.log(data);

	$("#skillsList")
	.append(data.map(function (d) { 

		return $("<div>")
			.addClass("col-sm-4")
			.append($("<div>")
				.addClass("skill")
				.append($("<img>")
					.addClass("mx-auto rounded-circle")
					.attr("src", d.img)
					.attr("alt", d.skill + " skill image"))
				.append($("<h4>").text(d.skill)));
		
	})); 

}


console.log("pre-loading of skills");
$.getJSON("content/skills.json", callback);

console.log("process complete");