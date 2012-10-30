instawallet
=====

node.js module to access the instawallet api

[![Build Status](https://travis-ci.org/abrkn/instawallet.png)](https://travis-ci.org/abrkn/instawallet)

installation
-----

`npm install instawallet`

donations
-----

1Kk26TMvgxFavxuLTNdkmh7iHzs2A7524y

methods
-----

- **create**(callback(err, wallet)): create wallet (can also be called as `require('instawallet')(...)`)
- **address**(wallet, callback(err, address)): get receiving address for wallet
- **balance**(wallet, callback(err, balance)): get balance (in satoshis)
- **send**(wallet, satoshis, address, callback(err, newBalance)): send btc from wallet to address