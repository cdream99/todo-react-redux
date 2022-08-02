const reducer = (state = [], action) => {

    switch (action.type) {
        case "ADD":
            return [...state, {
                id: state.length + 1,
                status: false,
                text: action.payload
            }]
        case "DELETE":
            return state.filter((i) => {
                return i.id !== action.payload;
            })
        case "UPDATE":
            return state.map((i) => {
                if (i.id === action.payload) {
                    return {
                        id: i.id,
                        text: i.text,
                        status: !i.status
                    }
                }
                return i;
            })

        default:
            return state;

    }

}

export default reducer;