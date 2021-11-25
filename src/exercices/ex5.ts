

const sayHelloTo = (name : string) => console.log(`Hello ${name} !`);
const users = ['John', 'Walter', 'Bob'];

// Typer correctement les entrees de cette fonction
function helloToEverybody(users : any, callback : any) : void {
    users.forEach(callback);
}

export default function ex5() {
    helloToEverybody(users, sayHelloTo);
}