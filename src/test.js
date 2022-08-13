const supertest = require('supertest');
const router = require('./router');

describe('Tests for server requests and responses', () => {
    test('Test when the request endpoint is the root / ', (done) => {
        supertest(router)
        .get('/')
        .expect(200)
        .expect('Content-Type', 'text/html')
        .end((err) => {
            if(err) return done(err);
            done();
        });
    });
    test('Test when the request endpoint contains public and the file was found ', (done) => {
        supertest(router)
        .get('/public/main.css')
        .expect(200)
        .expect('Content-Type', 'text/css')
        .end((err) => {
            if(err) return done(err);
            done();
        });
    });
    test('Test when the request endpoint contains public and the file was  not found ', (done) => {
        supertest(router)
        .get('/public/home.html')
        .expect(404)
        .expect('Content-Type', 'text/html')
        .end((err) => {
            if(err) return done(err);
            done();
        });
    });
    test('Test when the request the endpoint is not handled (path is not found)', (done) => {
        supertest(router)
        .get('/notfound')
        .expect(404)
        .expect('Content-Type', 'text/html')
        .end((err) => {
            if(err) return done(err);
            done();
        });
    });
    test('Test when the request is for location suggestions', (done) => {
        supertest(router)
        .get('/location')
        .query('q=gaza')
        .expect(200)
        .expect('Content-Type', 'application/json')
        .end((err, res) => {
            if(err) return done(err);
            expect(Array.isArray(JSON.parse(res.text))).toBe(true);
            done();
        });
    });
});