var QUnit = require("steal-qunit");
var DefineMap = require("can-define-map");
var canSymbol = require("can-symbol");

QUnit.module("can-define-map");

QUnit.test("basics", function(assert) {
    var MyMap = DefineMap.extend({
        prop: {},
        aList: {
            default: function() {
                return [];
            }
        }
    });

    var map = new MyMap();

    assert.equal(map.aList[canSymbol.for("can.isListLike")], true, "Arrays are converted to DefineLists");

    map.on("prop", function(ev, newVal, oldVal){
        assert.equal(newVal, "BAR");
        assert.equal(oldVal, undefined);
    });

    map.prop = "BAR";
});
