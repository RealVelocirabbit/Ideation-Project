// need to install supertest in devdependencies

const request = require('supertest');
const server = 'http://localhost:8081';

describe('Route Integration', () => {
  describe('/data', () => {
    describe('GET', () => {
      it('responds with 200 status', () => {
        return request(server)
          .get('/data')
          .expect(200)
      })
    })
  })
  describe('/', () => {
    describe('PUT', () => {
      it('responds with 200 status', () => {
        return request(server)
          .put('/')
          .send({
            company: "Codesmith",
            title: "King",
            salary: 10389,
            status: "Interested",
            link: "blah"
          })
          .expect(200)
      })
    })
  })
})