once-and-again
==============

Resettable _.once()

Overrides _.prototype.once to return a function which accepts an argument to force a reset on the function, letting it run again. To reset the function:

    var runOnceFunction = _(function () {
        console.log('only run once');
    }).once();
    
    var initialResult = runOnceFunction(); // true result
    var memoResult = runOnceFunction(); // memoized result, function not run
    var newResult = runOnceFunction(true); // true result
