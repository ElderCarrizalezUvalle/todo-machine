import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from '../TodoContext';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm'

function AppUI(){
    const { 
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)
    return(
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch />
            <TodoList>
                {loading && <p>Estamos cargando...</p>}
                {error && <p>Hubo un error</p>}
                {(!loading && !searchedTodos.length && !error) && <p>Crea tu primer TODO!</p>}
                {searchedTodos.map(
                    todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}

                    />
                    )
                )}
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            
            <CreateTodoButton 
                setOpenModal={setOpenModal}
                openModal={openModal}
            />
        </React.Fragment>
    );
}

export { AppUI };