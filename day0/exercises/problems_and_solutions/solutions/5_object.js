// complete the function such that it returns true if an object or any of its
// subobjects has any falsy values
// HINT: recursion may help here

function hasFalsyValue(obj) {
    if (!obj) return false;
    for (var p in obj) {
        if (!hasFalsyValue(obj[p])) return false;
    }
    return true;
}
var x = 1;
for (var p in x) {
    console.log(p)
}
