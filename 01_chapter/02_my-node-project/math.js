function add (n1, n2) {
    return n1 + n2;
}

function sub (n1, n2) {
    return n1 - n2;
}

function mul (n1, n2) {
    return n1 * n2;
}

function div (n1, n2) {
    return n1 / n2;
}

exports.mod = (a, b) => a % b;

// Untill exported contents are private in this file, export to make public
module.exports = {
    add,
    sub,
    mul,
    div
}