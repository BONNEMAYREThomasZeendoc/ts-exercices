import React, {useState} from 'react';
import './App.css';
import ex1 from '../exercices/ex1';
import ex2 from '../exercices/ex2';
import ex3 from '../exercices/ex3';



export default function App() {

    const exercices : {id:number, handler:()=>void}[] = [
        {id:1, handler:ex1},
        {id:2, handler:ex2},
        {id:3, handler:ex3},
    ]
    const [currentEx, setCurrentEx] = useState<number>(1);

    const execute = exercices.find(ex => currentEx == ex.id);
    console.clear();
    console.log('%cBienvenue !!!', 'color:#F44;font-size:2em;')
    console.log(`=== EXERCICE ${currentEx} ===`);
    if (execute?.handler) {
        execute.handler();
    }

    return (
        <div className="step">
            <h1>README (TS)</h1>  
            <hr />
            <p>
                Pour commencer, ouvrir la console du navigateur. <br />
                Un message de bienvenue devrait apparaitre. <br />
                Ouvrir le dossier du projet dans VSCode. <br />
                Les exercices se situe dans le dossier <span className="evidence">src/exercices/</span>. <br />
            </p>

            {exercices.map(ex => (
                <button key={ex.id} onClick={() => setCurrentEx(ex.id)} className={(ex.id===currentEx)?"selected":""}>
                    Exercice {ex.id} <br />
                </button>
            ))}
        </div>
    )
}

