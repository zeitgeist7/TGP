document.writeln("This is a day that I have been looking forward to for two and a half years!");

function Gibberish(world, number, nerdCompletion) {
	this.hello = world;
	this.zeitgeist = number;
	this.big = nerdCompletion;
};

Gibberish.prototype.prototypedFn = function() {
	console.log("This is a day that i have been looking forward to for and a half years");
};


var gibberish = new Gibberish("world", "7", "nerd ranch");

for(propertyName in gibberish) {
	var propString = propertyName + " : " + gibberish[propertyName];

	if (gibberish.hasOwnProperty(propertyName)) {
		console.log("Intrinsic property: " + propString);
	}
	else {
		console.log("prototyped property : " + propString);
	}
}

(function () {
	just_a_label:for (var i = 0; i < 10; i++) {
		console.log("Inside just_a_label loop\n");
		for (var j = 0; j < 10; j++) {
			console.log("\tInside-inside just_a_label");
			if (j === 2) {
				break just_a_label;
			}
		};
	};
})();

