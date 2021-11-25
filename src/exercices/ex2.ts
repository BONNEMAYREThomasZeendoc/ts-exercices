// Typer les objets suivants

const users = {
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

function briefDescription(user: unknown) {
    return '';
}

export default function ex2() {
    Object.values(users).forEach(user => console.log(briefDescription(user)))
}

