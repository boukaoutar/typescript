let greeter = (person: string): string => {
    return "hello, ${person}";
}

let user = "Jane Weslet"
document.body.innerHTML = greeter(user)