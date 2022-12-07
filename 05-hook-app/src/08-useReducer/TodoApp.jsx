import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del Alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del Poder',
        done: false,
    }
];

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState )

  return (
    <>
        <h1>TodoApp</h1>
        <hr />
        <div className="row">
            <div className="col-7">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <form>
                    <input 
                        type="text"
                        placeholder="¿Qué hay que hacer?"
                        className="form-control"
                    />
                    <button 
                        className="btn btn-outline-primary mt-1"
                        type="submit"
                    >
                        Agregar
                    </button>
                </form>
            </div>
        </div>
    </>
  );
}
