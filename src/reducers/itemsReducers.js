// Each reducer has its own state
const initialState = {
    items: [],
    error: null,
    loading: false
}

export default function(state = initialState, action){
    switch (action.type) {

        default:
            return state;
    }
}