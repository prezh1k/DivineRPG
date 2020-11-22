var currentUIscreen;
Callback.addCallback("NativeGuiChanged", function(screenName){
	currentUIscreen = screenName;
});

var UIbuttons = {
	isEnabled: false,
	container: 0,
	Window: new UI.Window({
		location: {
			x: 940,
			y: UI.getScreenHeight()/2-100,
			width: 60,
			height: 180
		},
		drawing: [{type:"background", color: 0}],
		elements: {}
	}),
	
	enableButton: function(name){
		this.isEnabled = true;
		buttonMap[name] = true;
	},
	registerButton: function(name, properties){
		buttonContent[name] = properties;
	}
}

var buttonMap = {
  button_shoot: false,
  button_fly: false
}

function updateUIbuttons(){
	var buttonContent = {
		 button_fly: {
		 x:0,
			y: 1000,
			type: "button",
			bitmap: "fly_on_button",
			bitmap2: "fly_off_button",
			scale: 15
			}
}
	var elements = UIbuttons.Window.content.elements;
	for(var name in buttonMap){
		if(buttonMap[name]){
			if(!elements[name]){
				elements[name] = buttonContent[name];
			}
		}
		else{
			elements[name] = 0;
		}
	}
}
Callback.addCallback("tick", function(){
	updateUIbuttons();
	if(UIbuttons.isEnabled){
		if(!UIbuttons.container){
			UIbuttons.container = new UI.Container();
			 UIbuttons.container.openAs(UIbuttons.Window);
		} if(UIbuttons.container.isElementTouched("button_fly")){
var y = Player.getPosition().y;if(y < 256){if(World.getThreadTime() % (40/5) == 0){}var vel = Player.getVelocity();var vy = Math.min(32, 264-y) / 160;if(vel.y < 0.67){Player.addVelocity(0,Math.min(vy, 0.67-vel.y), 0);}}}
World.playSoundAtEntity(Player.get(), "ambient.weather.thunder", 0.5, 0.75);
}
	for(var name in buttonMap){
		buttonMap[name] = false;
	}
	UIbuttons.isEnabled = false;
});



Callback.addCallback("LevelLeft", function(){
	if(UIbuttons.container){
		var elements = UIbuttons.Window.content.elements;
		for(var i in elements){
			elements[i] = 0;
		}
	}
});
registerAPIUnit("UIbuttons", UIbuttons);

var Generation = {
genOreTiny: function(x, y, z, ore){for(var xx = -1; xx < 1; xx++){for(var yy = -1; yy < 1; yy++){var d = Math.sqrt(xx + yy*yy);var r = 1 - Math.random()/1;if(d < r){GenerationUtils.setLockedBlock(x+xx, y-yy, z);}}}}}
registerAPIUnit("Generation",Generation);