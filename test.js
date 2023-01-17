"use strict";
exports.__esModule = true;
var Merge_1 = require("./Merge");
function isSorted(col) {
    for (var i = 1; i < col.length; i++) {
        if (col[i - 1] > col[i]) {
            return false;
        }
    }
    return true;
}
var col1 = [1, 3, 5, 7, 9];
var col2 = [2, 4, 6, 8];
if (isSorted((0, Merge_1.merge)(col1, col2))) {
    console.log("test1 : Pass");
}
else {
    console.log("test1 : Failed");
}
col1 = [2, 2, 5, 7, 9];
col2 = [1, 8, 9, 12, 21, 30, 45, 60, 99, 120, 194, 265];
if (isSorted((0, Merge_1.merge)(col1, col2))) {
    console.log("test2 : Pass");
}
else {
    console.log("test2 : Failed");
}
col1 = [2, 2, 2, 2];
col2 = [99, 99, 99, 99, 99];
if (isSorted((0, Merge_1.merge)(col1, col2))) {
    console.log("test3 : Pass");
}
else {
    console.log("test3 : Failed");
}
