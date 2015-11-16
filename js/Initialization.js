//initializes the fullpage.js features
$(document).ready(function() {
	$('#wrap').fullpage({
		sectionsColor: ['rgb(0, 255, 153)','rgb(226, 251, 251)', 'rgb(208, 219, 245)', 'rgb(255, 231, 211)', 'rgb(255, 153, 153)'],
		anchors: ['intro','mileStoneOne', 'mileStoneTwo', 'mileStoneThree', 'mileStoneFour'],
		menu: '#menu',
		scrollingSpeed: 1000
	});
});