var QUnit = require("steal-qunit");
var DefineMap = require("can-define-map");
var canSymbol = require("can-symbol");

QUnit.module("can-define-map");

QUnit.test("basics", function() {
    var MyMap = DefineMap.extend({
        prop: {},
        aList: {
            default: function() {
                return [];
            }
        }
    });

    var map = new MyMap();

    QUnit.equal(map.aList[canSymbol.for("can.isListLike")], true, "Arrays are converted to DefineLists");

    map.on("prop", function(ev, newVal, oldVal){
        QUnit.equal(newVal, "BAR");
        QUnit.equal(oldVal, undefined);
    });

    map.prop = "BAR";
});
