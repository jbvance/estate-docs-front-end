export function status(state='', action) {
    switch (action.type){
        case 'UPDATE_STATUS':
            return action.payload;        
        default:
            return state
    }
    
}

export function filename(state='', action) {
    switch (action.type){
        case 'UPDATE_FILENAME':        
            return action.payload;        
        default:
            return state
    }
    
}