var greeter = function (person) {
    return "hello, ${person}";
};
var user = "Jane Weslet";
document.body.innerHTML = greeter(user);
