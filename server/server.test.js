const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

it('should return hello world response', (done) => {
    // request(app)
    //     .get('/')
    //     .expect(200)
    //     .expect(('Hello world!'))
    //     .end(done)

    request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
            expect(res.body).toInclude({
                erorr: 'Page not found'
            })
        })
        .end(done)
});

it('should return a set of users', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect(res.body).toInclude({
                name: 'Baz',
                age: 34
            })
        })
        .end(done)
});