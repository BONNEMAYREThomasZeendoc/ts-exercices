
// Faire une fonction generique, qui prend en entree n'importe quel tableau et 
// qui renvoi le second element ou null si non existant




const names : string[] = ['Mickael', 'Steve', 'Mary', 'Dylan'];
const bingo : number[] = [12, 24, 15, 8, 5];
const computerUnit : string[] = ['o', 'Ko', 'Mo', 'Go', 'To', 'Po'];
const empty :any[] = [];


function getSecond(genTab : any[]) : any {
    if(genTab[2] !== undefined){
        return genTab[2];
    }
    return null;
}

export default function ex6() {
    console.log(getSecond(bingo));
    console.log(getSecond(names));
    console.log(getSecond(computerUnit));
    console.log(getSecond(empty));
}