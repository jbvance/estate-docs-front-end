export function status(state='INITIAL STATUS', action) {
    switch (action.type){
        case 'UPDATE_STATUS':
            return action.payload
        default:
            return 'NO STATUS UPDATE'
    }
    
}