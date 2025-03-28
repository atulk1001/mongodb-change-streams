const DBConnection = require("./mongoClientv2");
const closeChangeStream = require("./closeStream");
/**
 * 
 * @param {*} timeInMs 
 * @param {*} pipeline 
 */
async function monitorCollectionWithHasNext(timeInMs, pipeline = []) {
    const instance = new DBConnection();
    await instance.connect();
    const db = instance.getDb("sample_game");
    const collection = db.collection("users")
    const changeStream = collection.watch(pipeline);
    closeChangeStream(timeInMs, changeStream);
    try {
        while (await changeStream.hasNext()) {
            const change = await changeStream.next();
            console.log(change);
        }
    } catch (err) {
        console.error(err);
        if (changeStream.closed) {
            console.log("Change stream closed");
        }
    }
}

monitorCollectionWithHasNext(`600000`, []).then((r) => { console.log("Change stream called") }).catch((err) => { console.error(err) });