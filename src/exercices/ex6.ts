
// Faire une fonction generique, qui prend en entree n'importe quel tableau et 
// qui renvoi le second element ou null si non existant




const names : string[] = ['Mickael', 'Steve', 'Mary', 'Dylan'];
const bingo : number[] = [12, 24, 15, 8, 5];
const computerUnit : string[] = ['o', 'Ko', 'Mo', 'Go', 'To', 'Po'];
const empty :any[] = [];


function getSecond<T>(genTab : T[]) : (T|null) {
    return genTab[1] ?? null;
}

//pierre tips :
//o?.age?.toString()

export default function ex6() {
    console.log(getSecond(bingo));
    console.log(getSecond(names));
    console.log(getSecond(computerUnit));
    console.log(getSecond(empty));
}