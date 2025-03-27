const DBConnection = require("./mongoClientv2");
async function insert() {
    const instance = new DBConnection();
    await instance.connect();
    const db = instance.getDb("sample_game");
    const res = db.collection("users").insertOne({
        "dob": {
            "$date": "1997-01-01T00:00:00.000Z"
        },
        "username": "james009",
        "inactive": false,
        "score": 1800
    });
    return res;
}

insert().then((r) => { console.log("Inserted document successfully", r) }).catch((err) => { console.error(err) });
