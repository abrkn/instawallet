var instawallet = require('../lib/instawallet')
, expect = require('expect.js')
, timeout = 10000;

describe('instawallet', function() {
    describe('create', function() {
        it('can be called indirectly', function(done) {
            this.timeout(timeout);
            instawallet(function(err, wallet) {
                if (err) return done(err);
                expect(wallet).to.be.ok();
                done();
            });
        });

        it('can be called with create', function(done) {
            this.timeout(timeout);
            instawallet.create(function(err, wallet) {
                if (err) return done(err);
                expect(wallet).to.be.ok();
                done();
            });
        });
    });

    describe('balance', function() {
        it('is zero for a new wallet', function(done) {
            this.timeout(timeout);
            instawallet(function(err, wallet) {
                if (err) return done(err);
                instawallet.balance(wallet, function(err, balance) {
                    if (err) return done(err);
                    expect(balance).to.be(0);
                    done();
                });
            });
        });
    });

    describe('send', function() {
        it('cannot be used from an empty wallet', function(done) {
            this.timeout(timeout);
            instawallet(function(err, wallet) {
                if (err) return done(err);
                instawallet.send(wallet, 1, '1Kk26TMvgxFavxuLTNdkmh7iHzs2A7524y', function(err, newBalance) {
                    expect(err).to.be.ok();
                    done();
                });
            });
        });
    });
});