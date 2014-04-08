/**
 * @author
 */

var video = '<iframe width="560" height="315" src="http://www.youtube.com/embed/o2-RXqU4Lg8" frameborder="0" allowfullscreen></iframe>';

$(document).ready(function() {
	
	setNav();

});

function setNav() {
	
	$(".btn-cyclone").on("click", function() {
		$('#mymodal').modal();
		$(".modal-body").html(video);
	});
	
		$(".close").on("click", function()) {
				$(".modal-body").empty();
			
		});
}
