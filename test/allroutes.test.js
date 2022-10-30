// This is an supertest folder
// here you can write all the unit test cases for your application
// This test case will be help to find out bugs in your application

const supertest = require('supertest');

const app = require('../server');

describe('Initial Endpoint', () => {
    test('just check response', async () => {
  
    const res = await supertest(app).get('/');
  
    expect(res.statusCode).toEqual(200);
  })
})

