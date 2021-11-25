// Typer les objets suivants ()

const tree = {
    title: 'what',
    children: [
        {
            title: 'do',
            children: ['hi', 'hello'],
        },
        {
            title: 'you',
            children: ['world', {
                title: 'do',
                children: ['today',
                    {
                        title: 'well',
                        children: [':)'],
                    }
                ]
            }]
        },
        {
            title: '?',
            children: [],
        },
    ]
}

// Typer correctement l'entrée et la sortie de la fonction suivante
// Faire en sorte que la fonction renvoi une chaine comme suit :
//      "what[do[hi,ho],you[world,do[today,well[:)]]],?[]]"

function treeConcat(tree : any) {
    return '';
}

export default function ex3() {
    console.log(treeConcat(tree));
}