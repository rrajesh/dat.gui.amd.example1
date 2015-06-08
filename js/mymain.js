// Start the app
require( [ '../js/lib/dat.gui'], 
	function ( GUI ) {
	var FizzyText = function() {
		this.message = 'dat.gui';
		this.speed = 0.8;
		this.displayOutline = false;
	};
	
	
	var gui = new dat.GUI();
	var text = new FizzyText();
	gui.add(text, 'message');
	gui.add(text, 'speed', -5, 5);
	gui.add(text, 'displayOutline');
		
} );
