(function(_) {
    _.extend(_.prototype, {
        onceAndAgain: function(func) {
            var ran = false,
                memo;
                
            return function(forceReset) {
                if(forceReset) ran = false;
                if (ran) return memo;
                ran = true;
                memo = func.apply(this, arguments);
                func = null;
                return memo;
            };
        }
    });
}(_));