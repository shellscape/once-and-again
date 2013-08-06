(function(_) {
    _.mixin({
        onceAndAgain: function(func) {
            var ran = false,
                memo,
                closureFunc = func;
                
            return function(forceReset) {
                if(forceReset) ran = false;
                if (ran) return memo;
                ran = true;
                memo = closureFunc.apply(this, arguments);
                func = null;
                return memo;
            };
        }
    });
}(_));