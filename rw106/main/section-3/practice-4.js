'use strict';


module.exports = function createUpdatedCollection(collectionA, objectB) {
    var collectionC = [];
    collectionC = Back(collectionA, collectionC);

    for (var k = 0; k < collectionC.length; k++) {
        for (var j = 0; j < objectB.value.length; j++) {
            if (collectionC[k].key === objectB.value[j]) {
                var result = parseInt(collectionC[k].count / 3);
                collectionC[k].count -= result;
            }
        }
    }
    return collectionC;

    function Exist(element, collectionC) {
        var keyCount = element.split("-");
        var key = keyCount.length === 1 ? element : keyCount[0];
        var count = keyCount.length === 1 ? 1 : keyCount[1];
        for (var i = 0; i < collectionC.length; i++) {
            if (collectionC[i].key === key) {
                collectionC[i].count += parseInt(count);
                return collectionC;
            }
        }
        collectionC.push({"key": key, "count": parseInt(count)});
        return collectionC;

        function isExsit(element, collectionC) {
            for (var i = 0; i < collectionC.length; i++) {
                if (element == collectionC[i])
                    return true;
            }
        }
    }
}
function Back(collectionA, collectionC) {
    for (var i = 0; i < collectionA.length; i++) {
        collectionC = Exist(collectionA[i], collectionC);
    }
    return collectionC;
}
