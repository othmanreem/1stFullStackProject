import express from "express";
import { OAuth2Client } from "google-auth-library";
import mysql from "mysql2/promise";

const authClient = new OAuth2Client();
const app = express();
var payload;
const referrerPolicy = {
    setHeaders: res => {
        res.setHeader('Referrer-Policy', 'no-referrer-when-downgrade')
    }
};

app.use(express.static('./public/output', referrerPolicy));

const port = 3005;
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.json());
app.post('/login', (req, res) => {
    const credential = req.body.data.credential;

    verify(credential)
        .then((data) => { res.json(data) })
        .catch(err => res.status(400).json(err));
})

async function verify(token) {
    const ticket = await authClient.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
    });
    payload = ticket.getPayload();
    return payload;

}
const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}
/**
 * Endpoint för att verifiera om användaren finns i databasen eller ej
 */
app.post('/me', async (req, res) => {
    var id = req.body.id;
    var name = req.body.name;

    if (id = payload.sub) {
        const userInserted = await userExistence(id);
        if (userInserted) {
            res.json(id);
        } else {
            insertUser(id, name);
            res.json(id);
        }

    }
})
/**
 * 
 * sql begära med användarens id
 */
async function userExistence(id) {
    const conn = await mysql.createConnection(config);
    const sqlReq = "SELECT id FROM Users WHERE id = ?";
    const [rows, fields] = await conn.execute(sqlReq, [id]);
    await conn.end();
    return rows.length > 0;
}
/**
 * 
 *Sparar användarens id och namn i databasen
 */
async function insertUser(id, name) {
    const conn = await mysql.createConnection(config);
    const sqlReq = "INSERT INTO Users (id, user_full_name) VALUES (?, ?)";
    const [rows, fields] = await conn.execute(sqlReq, [id, name]);
    await conn.end();

}
/**
 * Sparar en array med fem ord, som är förknippad med en användare, i databasen
 */
app.post('/send', (req, res) => {
    const wordsArr = req.body.wordsArray;
    const userId = req.body.usrId
    insert(wordsArr, userId)
        .then((id) => { res.json(id) });

})
async function insert(wordsArr, userId) {
    const conn = await mysql.createConnection(config);
    const sqlReq = "INSERT INTO Words_array (user_id, array) VALUES (?, ?)";
    const [rows, fields] = await conn.execute(sqlReq, [userId, JSON.stringify(wordsArr)]);
    const sqlReqId = "SELECT id FROM Words_array WHERE array = ?";
    const [row, field] = await conn.execute(sqlReqId, [JSON.stringify(wordsArr)]);
    const arrId = row[0].id;
    await conn.end();
    return arrId;
}

// async function getId (wordsArr){
//     const conn = await mysql.createConnection(config);
//     const sqlReq = "SELECT id FROM Words_array WHERE array = ?";
//     const [rows, fields] = await conn.execute(sqlReq, [1]);
//     await conn.end();

// }

/**
 * Hämtar arrayen baserat på dens id
 */
app.post('/getArr', async (req, res) => {
    const id = req.body.id;

    const conn = await mysql.createConnection(config);
    const sqlReqArr = "SELECT array FROM Words_array WHERE id = ?";
    const [rows, fields] = await conn.execute(sqlReqArr, [id]);
    const wordsArray = JSON.parse(rows[0].array);

    await conn.end();
    res.json(wordsArray);
})
/**
 * Sparar aktuell användares score 
 */
app.post("/score", (req, res) => {
    const score = req.body.score;
    const userId = req.body.usrId;

    insertscore(score, userId)
    res.status(200).send("SCORE insterted :)))))");

})

async function insertscore(score, userId) {
    const conn = await mysql.createConnection(config);
    const sqlReq = "INSERT INTO Score (points, user_id, date) VALUES (?, ?, NOW())";
    const [rows, fields] = await conn.execute(sqlReq, [score, userId]);
    await conn.end();

}
/**
 * hämtar alla spelarnas score från tre dager tillbaka
 */
app.post("/getscore", async (req, res) => {

    const conn = await mysql.createConnection(config);
    const xDaysAgo = new Date();
    xDaysAgo.setDate(xDaysAgo.getDate - 3);
    const sqlReq = "SELECT points, date,  user_full_name FROM Score, Users WHERE Score.user_id = Users.id AND date >= ? ";
    const [rows, fields] = await conn.execute(sqlReq, [xDaysAgo]);
    await conn.end();
    res.json(rows);

})
