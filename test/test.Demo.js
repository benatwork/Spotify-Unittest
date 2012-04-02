var sp      = getSpotifyApi(1);

describe('Demo Tests', function () {

    it('Should do this and that', function() {
    	expect('Demo String').to.equal('Demo String');
    	expect([1, 2, 3]).to.have.length(3);
    });

    it('Should handle async tests', function(done) {
    	setTimeout(function() {
    		expect([1, 2, 3]).to.not.be.eql(null);
    		done();
    	}, 1000);
    });

});