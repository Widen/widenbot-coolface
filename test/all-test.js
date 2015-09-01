var test = require('tape');

var coolface = require('../index');

test('sanity check', function(t){
    t.plan(1);
    t.ok(coolface);
});
