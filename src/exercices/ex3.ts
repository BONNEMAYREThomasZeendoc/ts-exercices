// Typer les objets suivants ()
interface Treee {
    title: string;
    children: (Treee| string)[];

}
const tree : Treee = {
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


function treeConcat(tree: Treee): string {
    const childrenStr : string[]  = tree.children.map(childd => {
        if (typeof childd === 'string') {
            return childd;
        }
        return treeConcat(childd);
    });
    return `${tree.title} [ ${childrenStr.join(',')} ]`;
}

export default function ex3() {
    console.log(treeConcat(tree));
}

/*function treeConcatold(tree : Treee): string {
    let result = "";
    if(tree.title !== undefined){
        result+=tree.title;
    }
    if (typeof tree.children === 'string') {
        return tree.children;
    }//else return treeConcat(tree.children)

    tree.children.forEach(
        childd =>{
            if(typeof childd instanceof String){
                return childd;
            }
            return treeConcatold(childd) // question ici !!!


        }
    )

    return result;
}*/

