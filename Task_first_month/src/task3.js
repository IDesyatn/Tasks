module.exports = { every }

function every(arr, callback) {
    let result = true;
    /*if(!Array.isArray(arr))*/
    for (let i = 0; i < arr.length; i++){
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true;
}
