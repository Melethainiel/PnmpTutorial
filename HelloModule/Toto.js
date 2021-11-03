define("HelloModule/Toto", [], function() {
    var toto = {
        hello: "Test Module",
        textHello: "Bonjour",
        fctHello: function(name) {
            return "Hello, " + name;
        }
    };
    return toto;
});
