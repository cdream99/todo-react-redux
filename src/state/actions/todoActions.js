export const addNewTodo = (text) => {

    if (text.length > 0) {
        return (dispatch) => {
            dispatch({
                type: "ADD",
                payload: text
            })
        }
    }

}


export const updateTodoStatus = (id) => {

    return (dispatch) => {
        dispatch({
            type: "UPDATE",
            payload: id
        })
    }
}


export const deleteTodo = (id) => {
    return (dispatch) => {
        dispatch(
            {
                type: "DELETE",
                payload: id
            }
        )
    }
}