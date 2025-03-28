const stream = require("stream");
const DBConnection = require("./mongoClientv2");

/**
 * 
 * @param {*} timeInMs 
 * @param {*} pipeline 
 */
async function monitorCollectionUsingStreamApi(timeInMs, pipeline = []) {
    const instance = new DBConnection();
    await instance.connect();
    const db = instance.getDb("sample_game");
    const collection = db.collection("users")
    const changeStream = collection.watch(pipeline);
    changeStream.stream().pipe(new stream.Writable({
        objectMode: true,
        write: (change, encoding, callback) => {
            console.log(change);
            callback();
        }
    }));
}
monitorCollectionUsingStreamApi(`60000`, []).then((r) => { console.log("Change stream called") }).catch((err) => { console.error(err) });