import './ToDoList.css'

function ToDoList(props) {
    const renderFunc = props.children || props.render
    
    return (
        <section className='toDoList'>
            {props.error      && props.onError()}
            {props.loading    && props.onLoading()}
            {(!props.totalToDos && !props.loading) && props.onEmptyToDos()}
            {(!!props.totalToDos && !props.listaFiltradaToDos.length) && props.onEmptySearch(props.toDoSearch)}
            {props.listaFiltradaToDos.map(renderFunc)}
        </section>
    )
}

export { ToDoList }