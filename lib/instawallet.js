var request = require('request')
, _ = require('underscore')
, url = 'https://www.instawallet.org';
 
var instawallet = module.exports = _.extend(function() {
    return instawallet.create.apply(this, arguments);
}, {
    create: function(callback) {
        request({
            method: 'POST',
            json: true,
            url: url + '/api/v1/new_wallet'
        }, function(err, res, body) {
            if (err) return callback(err);
            if (!body.successful) return callback(new Error(body.message));
            callback(null, body.wallet_id);
        });
    },

    address: function(id, callback) {
        request({
            json: true,
            url: url + '/api/v1/w/' + id + '/address'
        }, function(err, res, body) {
            if (err) return callback(err);
            if (!body.successful) return callback(new Error(body.message));
            callback(null, body.address);
        });
    },

    balance: function(id, callback) {
        request({
            json: true,
            url: url + '/api/v1/w/' + id + '/balance'
        }, function(err, res, body) {
            if (err) return callback(err);
            if (!body.successful) return callback(new Error(body.message));
            callback(null, +body.balance);
        });
    },

    send: function(id, amount, to, green, callback) {
        if (_.isFunction(green)) {
            callback = green;
            green = false;
        }

        request({
            method: 'POST',
            json: { 
                address: to, 
                amount: amount,
                use_green_address: !!green
            },
            url: url + '/api/v1/w/' + id + '/payment'
        }, function(err, res, body) {
            if (err) return callback(err);
            if (!body.successful) return callback(new Error(body.message));
            callback(null, +body.balance);
        });
    }
});