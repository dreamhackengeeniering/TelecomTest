"use strict";
var request = require("supertest");
var app = require("../index.js");

var request = request("http://localhost:3000");

describe("weather", function () {
  describe("GET", function () {
    it("Should return json as default data format", function (done) {
      request
        .get("/v1/current")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });
    it("Should return json with city", function (done) {
      request
        .get("/v1/current/Mendoza")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });
    it("Should return not found ", function (done) {
      request.get("/v1/hola").expect(404, done);
    });
    it("Should return json as forecast data format", function (done) {
      request
        .get("/v1/forecast")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });
    it("Should return json as forecast with city data format", function (done) {
      request
        .get("/v1/forecast/Mendoza")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });
    it("Should return json as location data format", function (done) {
      request
        .get("/v1/location")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });
    it("Should return not found route", function (done) {
      request.get("/v1/location/hola").expect(404, done);
    });
  });
});
