/**
 *
 * @param person
 * @returns
 */
var greeter = function (person) {
    return "hello, ".concat(person);
};
var user = "Jane Weslet";
document.body.innerHTML = greeter(user);
