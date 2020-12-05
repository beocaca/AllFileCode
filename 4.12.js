const test = {
    prop: 42,
    func: function(i, j) {
        console.log(this);
        return (this.prop + i) * j;
    },
};
function hi() {
    return "hi"
}
//console.log(test.func.apply(test, [4, 2]));
//console.log(test.func.call(test, 4, 2));
console.log((test.func.bind(test))(4, 2))




