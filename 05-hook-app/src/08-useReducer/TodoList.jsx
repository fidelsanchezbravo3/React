import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
        {
            todos.map( ({ id, description, done }) => (
              <TodoItem 
                key={ id } 
                id={ id } 
                done={ done }
                description={ description } 
                onDeleteTodo={ onDeleteTodo }
                onToggleTodo={ onToggleTodo } 
              />
            ))
        }
    </ul>
  );
}
