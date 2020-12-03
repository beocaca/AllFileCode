var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.lastIndexOf(element);
while (idx != -1) {
    indices.push(idx);
    idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
}

console.log(indices)
;