import { expect } from 'chai';
import { System } from '../src/system';
import { describe } from 'mocha';

const sys = new System({ twdReserve: 10000, usdReserve: 1000 });

describe('System', () => {
  describe('init system', () => {
    expect(sys.constProduct).to.equal(10000000);
    expect(sys.twdReserve).to.equal(10000);
    expect(sys.usdReserve).to.equal(1000);
  });
  describe('trade TWD to USD', () => {
    it(`is the trade of Twd to USD successful ?`, () => {
      expect(sys.tradeTwdtoUsd(6000)).to.equal(-375);
    });
    it(`is USD reserve correct ?`, () => {
      expect(sys.usdReserve).to.equal(625);
    });
    it(`is TWD reserve correct ?`, () => {
      expect(sys.twdReserve).to.equal(16000);
    });
    it(`does the product of TWD and USD reserves still be constant ?`, () => {
      expect(sys.twdReserve * sys.usdReserve).to.equal(sys.constProduct);
    });
  });
  describe('trade USD to TWD', () => {
    it(`is the trade of USD to TWD successful ?`, () => {
      expect(sys.tradeUsdtoTwd(375)).to.equal(-6000);
    });
    it(`is USD reserve correct ?`, () => {
      expect(sys.usdReserve).to.equal(1000);
    });
    it(`is TWD reserve correct ?`, () => {
      expect(sys.twdReserve).to.equal(10000);
    });
    it(`does the product of TWD and USD reserves still be constant ?`, () => {
      expect(sys.twdReserve * sys.usdReserve).to.equal(sys.constProduct);
    });
  });
});
