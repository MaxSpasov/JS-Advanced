const { expect } = require('chai');
const findNewApartment = require('./findApartment');

describe("Tests", function () {
describe("Tests for isGoodLocation", function () {
it('Test 1: should throw error if city or nearPublicTransportation is not a string or boolean or boolean is not correct param', () => {
const city = 'Sofia';
const nearPublicTransportation = true;