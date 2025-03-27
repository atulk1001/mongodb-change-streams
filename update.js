const DBConnection = require("./mongoClientv2");
async function update() {
    const instance = new DBConnection();
    await instance.connect();
    const db = instance.getDb("sample_game");
    const res = db.collection("users").updateMany({ "username": "james009" }, { $set: { score: 1000 } });
    return res;
}
update().then((r) => { console.log("Updated document successfully", r) }).catch((err) => { console.error(err) });