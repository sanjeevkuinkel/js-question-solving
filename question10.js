// Advance js:  Implement debounce function.

//Debounce is a technique that delays executing a function until a certain amount of time has passed since the last time it was called.

//Debounce requires clearing the previous timeout so that only the last function call executes after the delay.


//Debounce ensures:

// ❌ No unnecessary calls

// ✅ Only meaningful final call

//Very important clarification ⚠️

//Debounce does NOT actually cancel API requests
// It cancels the scheduled function call


// So:

// The API is never called for earlier actions

// Only the last one is executed

// Bonus: when NOT to use debounce ❌

// Button click that must happen immediately

// Payments

// Form submit

// Use throttle there instead.
let timer;
function callMyName(name){
	clearTimeout(timer);
	console.log(`timeout started`);
	timer=setTimeout((name)=>{
		console.log("Timout ended after 4sec")
	},4000)
	console.log(timer)
}
callMyName();

callMyName();