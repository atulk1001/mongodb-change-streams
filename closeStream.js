/**
 * 
 * @param {*} timeInMs 
 * @param {*} changeStream 
 * @returns 
 */

function closeChangeStream(timeInMs=60000, changeStream) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Closing the change stream");
            changeStream.close();
            resolve();
        }, timeInMs);
    });
}

module.exports = closeChangeStream;