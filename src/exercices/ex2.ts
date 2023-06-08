// Typer les objets suivants
interface singleUser {
    firstName: string;
    lastName: string;
    sex: 'M' | 'F';
    age?: number;
    accountChecked: boolean;
}

interface Users {
    [userId: string]: singleUser;
}

const users : Users = {
    "48f2f7d6-00bc-4d13-9fb3-4e1ca0ca93ec": {
        firstName: "Wava",
        lastName: "D'Amore",
        sex: 'F',
        accountChecked: true,
    },
    "9b98f02e-1bcb-4a2e-b908-7829616eb6de": {
        firstName: "Kailee",
        lastName: "Jones",
        sex: 'M',
        age: 21,
        accountChecked: false,
    },
    "0efdccb1-d5d9-4f69-aa77-8aec3a5e1e2b": {
        firstName: "Beverly",
        lastName: "D'Amore",
        sex: 'F',
        accountChecked: false,
    },
}


// Typer correctement l'entrée (un utilisateur) et la sortie (une chaine de char) de la fonction suivante
// Retourner dans une chaine, le nom en majuscule, le prénom et l'age si présent

function briefDescription(user: singleUser): string {
    let res =  user.firstName + ' ' + user.lastName.toUpperCase()
    if(!(user.age === undefined)){
        res+= ' '+user.age
    }
    return res;
}
function briefDescription_opti(user: singleUser): string {
    const res1 = `${user.firstName} ${user.lastName.toUpperCase()}`;
    const res2 = user.age !== undefined ? ` ${user.age}` : '';
    return res1 + res2;
}


export default function ex2() {
    Object.values(users).forEach(user => console.log(briefDescription(user)))
}

