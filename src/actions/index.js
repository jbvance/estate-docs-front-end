export const updateStatus = (statusText) => {
    return {
        type:'UPDATE_STATUS',
        payload: statusText
    }
};