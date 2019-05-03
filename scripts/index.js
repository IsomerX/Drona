$(document).ready(function(){
	var controller = new ScrollMagic.Controller();

	var ourScene = new ScrollMagic.Scene({
			triggerElement: '#hero'
	})
	.setClassToggle('#hero','fade-in')
	.addTo(controller)
	
})