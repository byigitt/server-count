const express = require('express');
const app = express();

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const cors = require('cors');
app.use(cors());

const key = "insert your steam api key here";

app.get('/', async (req, res) => {
    let url = `https://api.steampowered.com/IGameServersService/GetServerList/v1/?key=${key}&limit=40000&filter=\\appid\\730\\name_match\\Valve%20CS:GO*Server*\\`;
    let data = await fetch(url);
    data = await data.json();

    let servers = data.response.servers;
    res.send('CSGO servers left: <b>' + servers.length + '</b>');
});

app.listen(3000, () => console.log('http://localhost:3000 - started'));