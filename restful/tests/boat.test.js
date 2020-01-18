require('dotenv').config({ path: './.env.test' });
const request = require('supertest');
const BoatModel = require('./../src/models/boat');
const app = require('./../src/index');

describe('Boat', () => {
  beforeAll(async () => {
    await BoatModel.create({
      _id: "5e21bd8da0d4f061a5cd372e",
      name: "Sample Boat 1",
      type: "MOTOR_BOAT",
      year: 1999,
      marina: "Sample",
      skipper: "MANDATORY",
      active: true,
      cabins: 1,
      length: 80,
      price: 1000.0,
    });
    await BoatModel.create({
      _id: "5e21c755a7c7a16feaa2f9bc",
      name: "Sample Boat 2",
      type: "MOTOR_BOAT",
      year: 1999,
      marina: "Sample",
      skipper: "MANDATORY",
      active: false,
      cabins: 1,
      length: 80,
      price: 1000.0,
    });
  });

  afterAll(async () => {
    await BoatModel.remove({})
  });

  test('Get All Boats', async () => {
    const responseOne = await request(app).get('/boats');
    expect(responseOne.statusCode).toEqual(200);
    expect(responseOne.body.meta.total).toEqual(2);

    const responseTwo = await request(app).get('/boats?active=true');
    expect(responseTwo.statusCode).toEqual(200)
    expect(responseTwo.body.meta.total).toEqual(1)
  });

  test('Get Boat by id', async () => {
    const responseOne = await request(app).get('/boats/5e21bd8da0d4f061a5cd372e');
    expect(responseOne.statusCode).toEqual(200)
    expect(responseOne.body.meta.total).toEqual(1)
    expect(responseOne.body.data[0].attributes.name).toEqual("Sample Boat 1");
  });

  test('Get Boat by id not exist', async () => {
    const responseOne = await request(app).get('/boats/5e21bd8da0d4f061a5cd372f');
    expect(responseOne.statusCode).toEqual(500);
  });

  test('Delete Boat', async () => {
    const response = await request(app).delete('/boats/5e21bd8da0d4f061a5cd372e');
    expect(response.statusCode).toEqual(200)
    expect(response.body.meta.total).toEqual(1)
    expect(response.body.data[0].attributes.isDeleted).toEqual(true);

    const responseOne = await request(app).get('/boats');
    expect(responseOne.statusCode).toEqual(200);
    expect(responseOne.body.meta.total).toEqual(1);
  });
});
