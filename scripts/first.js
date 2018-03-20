

function concabloup(param) {
    if(typeof(param) === 'object') {
        throw new Error('no object');
    }
    return param+'bloup';
}