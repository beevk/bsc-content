export function greet(name: string = "stranger") {
    console.log(`Hello ${name}`);
}

export function bye(name = "stranger") {
    console.log(`Bye ${name}`);
}