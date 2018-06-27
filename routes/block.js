let express = require('express');
let router = express.Router();
let axios = require('axios');

let BITBOXCli = require('bitbox-cli/lib/bitbox-cli').default;
let BITBOX = new BITBOXCli();

//testnet creds
let BitboxHTTP = axios.create({
  baseURL: `http://167.99.110.201:18332/`
});
let username = 'bitcoin';
let password = 'rD9yw2Y9RkOnYjYnDX';

// mainnet creds
// let BitboxHTTP = axios.create({
//   baseURL: `http://138.68.54.100:8332/`
// });
// let username = 'bitcoin';
// let password = 'xhFjluMJMyOXcYvF';

router.get('/', (req, res, next) => {
  res.json({ status: 'block' });
});

router.get('/details/:id', (req, res, next) => {
  if(req.params.id.length !== 64) {
    BitboxHTTP({
      method: 'post',
      auth: {
        username: username,
        password: password
      },
      data: {
        jsonrpc: "1.0",
        id:"getblockhash",
        method: "getblockhash",
        params: [
          parseInt(req.params.id)
        ]
      }
    })
    .then((response) => {
      axios.get(`http://194.14.246.69/api/block/${response.data.result}`)
      .then((response) => {
        let parsed = response.data;
        res.json(parsed);
      })
      .catch((error) => {
        res.send(error.response.data.error.message);
      });
    })
    .catch((error) => {
      res.send(error.response.data.error.message);
    });
  } else {
    axios.get(`http://194.14.246.69/api/block/${req.params.id}`)
    .then((response) => {
      let parsed = response.data;
      res.json(parsed);
    })
    .catch((error) => {
      res.send(error.response.data.error.message);
    });
  }
});

module.exports = router;
