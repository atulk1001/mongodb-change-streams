const DBConnection = require("./mongoClientv2");
const closeChangeStream = require("./closeStream");
/**
 * 
 * @param {*} timeInMs 
 * @param {*} pipeline 
 */
async function monitorCollection(timeInMs, pipeline = []) {
    const instance = new DBConnection();
    await instance.connect();
    const db = instance.getDb("sample_game");
    const collection = db.collection("users")
    const changeStream = collection.watch(pipeline);
    changeStream.on("change", (change) => {
        console.log(change);
        return change;
    });
}
const pipeline = [
    {
        $match: {
            $or: [
                { "operationType": "update" },
                { "operationType": "delete" }
            ],
            "fullDocument.username": "james009"
        }
    }
];

monitorCollection(`60000`, []).then((r) => { console.log("Change stream called") }).catch((err) => { console.error(err) });