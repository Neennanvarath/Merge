"use strict";
exports.__esModule = true;
exports.merge = void 0;
function merge(col1, col2) {
    var newAr = [];
    var index1 = 0;
    var index2 = 0;
    while (index1 < col1.length && index2 < col2.length) {
        if (col1[index1] < col2[index2]) {
            newAr.push(col1[index1]);
            index1++;
        }
        else {
            newAr.push(col2[index2]);
            index2++;
        }
    }
    while (index1 < col1.length) {
        newAr.push(col1[index1]);
        index1++;
    }
    while (index2 < col2.length) {
        newAr.push(col2[index2]);
        index2++;
    }
    return newAr;
}
exports.merge = merge;
