var sample = require("../lib/Sample").Sample;

buster.testCase("test", {
    "test it": function() {
        assert.equals("Hoge", sample.getName());
    }
});
