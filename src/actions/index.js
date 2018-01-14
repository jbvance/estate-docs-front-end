export const updateStatus = (statusText) => {
    return {
        type:'UPDATE_STATUS',
        payload: statusText
    }
};

export const updateFilename = (filename) => {
    return {
        type:'UPDATE_FILENAME',
        payload: filename
    }
};