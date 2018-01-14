export function status(state='INITIAL STATUS', action) {
    switch (action.type){
        case 'UPDATE_STATUS':
            return action.payload || "NO STATUS CHANGE PROVIDED";
        default:
            return ''
    }
    
}