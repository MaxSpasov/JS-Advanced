const { expect } = require('chai')
const findNewApartment = require('./findApartment')
 
describe('findNewApartment', function () {
    describe('isGoodLocation', function () {
      it('returns "You can go on home tour!" if city is valid and nearPublicTransportation is true', function () {
        assert.equal(findNewApartment.isGoodLocation('Sofia', true), 'You can go on home tour!');
      });
  
      it('should return "There is no public transport in area." if city is valid and nearPublicTransportation is false', function () {
        assert.equal(findNewApartment.isGoodLocation('Varna', false), 'There is no public transport in area.');
      });
  
      it('throws error if city is not a string', function () {
        assert.throw(() => { findNewApartment.isGoodLocation(123, true) }, Error, 'Invalid input!');
      });
  
      it('throws error if nearPublicTransportation is not a boolean', function () {
        assert.throw(() => { findNewApartment.isGoodLocation('Plovdiv', 'yes') }, Error, 'Invalid input!');
      });
  
      it('returns "This location is not suitable for you." if city is not valid', function () {
        assert.equal(findNewApartment.isGoodLocation('Burgas', true), 'This location is not suitable for you.');
      });
    });
  
    describe('isLargeEnough', function () {
      it('returns the result for valid input', function () {
        assert.equal(findNewApartment.isLargeEnough([50, 70, 100], 70), '70, 100');
      });
  
      it('throws error if apartments is not an array', function () {
        assert.throw(() => { findNewApartment.isLargeEnough(50, 70) }, Error, 'Invalid input!');
      });
  
      it('throws error if minimalSquareMeters is not a number', function () {
        assert.throw(() => { findNewApartment.isLargeEnough([50, 70, 100], '70') }, Error, 'Invalid input!');
      });
  
      it('throws error if apartments array is empty', function () {
        assert.throw(() => { findNewApartment.isLargeEnough([], 70) }, Error, 'Invalid input!');
      });
    });
  
    describe('isItAffordable', function () {
      it('returns "You can afford this home!" if price is less than budget', function () {
        assert.equal(findNewApartment.isItAffordable(100000, 150000), 'You can afford this home!');
      });
  
      it('returns "You don\'t have enough money for this house!" if price is greater than budget', function () {
        assert.equal(findNewApartment.isItAffordable(200000, 150000), 'You don\'t have enough money for this house!');
      });
  
      it('throws error if price is not a number', function () {
        assert.throw(() => { findNewApartment.isItAffordable('100000', 150000) }, Error, 'Invalid input!');
      });
  
      it('throws error if budget is not a number', function () {
        assert.throw(() => { findNewApartment.isItAffordable(100000, '150000') }, Error, 'Invalid input!');
      });
    })
  })
