const isValidDate = require('./dateValidator');
const assert = require('assert');

const goodDates = [
  '1900-02-25', '1992-02-29', '2000-01-01', '1992-12-31'
];

const badDates = {
  pattern: ['foo', '12-02-1992', '12/02/1992', '1992.12.02'],
  year: ['0292-12-20', '19992-12-20', '1800-12-20','2016-12-20'],
  month: ['1992-13-20', '1992-0-20', '1992-002-20'],
  day: [
    '1992-02-30', // leap year adjustment
    '1992-02-0', 
    '1992-02-300',
    '1992-01--30'
  ]
}

describe('isValidDate', () => {
  it('should check for invalid string pattern', () => {
    badDates.pattern.forEach((date) => {
      console.log('DATE: ', date);
      assert.strictEqual(isValidDate(date), false);
    });
  });
  it('should check for invalid year', () => {
    badDates.year.forEach((date) => {
      console.log('DATE: ', date);
      assert.strictEqual(isValidDate(date), false);
    });
  });
  it('should check for invalid month', () => {
    badDates.month.forEach((date) => {
      console.log('DATE: ', date);
      assert.strictEqual(isValidDate(date), false);
    });
  });
  it('should check for invalid day', () => {
    badDates.day.forEach((date) => {
      console.log('DATE: ', date);
      assert.strictEqual(isValidDate(date), false);
    });
  });
  it('should return true for valid dates', () => {
    goodDates.forEach((date) => {
      console.log('DATE: ', date);
      assert.strictEqual(isValidDate(date), true);
    });
  });
});