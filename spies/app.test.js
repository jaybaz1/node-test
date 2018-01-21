const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');



describe('App', () => {
    let db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('should call the spy correctly', () => {
        let spy = expect.createSpy();
        spy('Baz', 25);

        expect(spy).toHaveBeenCalledWith('Baz', 25);
    });

    it('should call saveUser with user object', () => {
        var email = 'test@test.com';
        var password = '123abc';

        app.handleSignup(email, password);

        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});