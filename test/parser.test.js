const cronParser = require('../bin/cronparser');
const constant = require('../config/constants');
const typeValues = constant.values()

test('*/15 0 1,15 * 1-5 /usr/bin/find Test Example', () => {
    expect(cronParser('*/15 0 1,15 * 1-5 /usr/bin/find')).toEqual({
        'minute': '0 15 30 45',
        'hour': '0',
        'day of month': '1 15',
        'month': '1 2 3 4 5 6 7 8 9 10 11 12',
        'day of week': '1 2 3 4 5',
        'command': '/usr/bin/find'
    });
  });


  test('*/15 0 1,15 * 1-5 Not All arguments passed', () => {
    expect(cronParser('*/15 0 1,15 * 1-5')).toEqual('please add all 6 valid arguments');
  });



  test('*/15 */15 */5 */3 */2 /usr/bin/find All Interval Input', () => {
    expect(cronParser('*/15 */15 */5 */3 */2 /usr/bin/find')).toEqual({
        'minute': '0 15 30 45',
        'hour': '0 15',
        'day of month': '0 5 10 15 20 25 30',
        'month': '0 3 6 9',
        'day of week': '0 2 4 6',
        'command': '/usr/bin/find'
    });
  });



  test('1-15 1-15 1-15 1-12 1-5 /usr/bin/find ALL Range', () => {
    expect(cronParser('1-15 1-15 1-15 1-12 1-5 /usr/bin/find')).toEqual({
        'minute': '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15',
        'hour': '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15',
        'day of month': '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15',
        'month': '1 2 3 4 5 6 7 8 9 10 11 12',
        'day of week': '1 2 3 4 5',
        'command': '/usr/bin/find'
    });
  });


  test('1,15 1,15 1,15 1,12 1,5 /usr/bin/find defined Range', () => {
    expect(cronParser('1,15 1,15 1,15 1,12 1,5 /usr/bin/find')).toEqual({
        'minute': '1 15',
        'hour': '1 15',
        'day of month': '1 15',
        'month': '1 12',
        'day of week': '1 5',
        'command': '/usr/bin/find'
    });
  });


  test('* * * * * /usr/bin/find All Values', () => {
    expect(cronParser('* * * * * /usr/bin/find')).toEqual({
        'minute': typeValues['minutes'].join(' '),
        'hour': typeValues['hours'].join(' '),
        'day of month': typeValues['dayOfMonth'].join(' '),
        'month': typeValues['month'].join(' '),
        'day of week': typeValues['dayOfWeek'].join(' '),
        'command': '/usr/bin/find'
    });
  });


  test('*/15 0 1,15 * 1-5 /usr/bin/find Absolute value', () => {
    expect(cronParser('15 23 15 11 5 /usr/bin/find')).toEqual({
        'minute': '15',
        'hour': '23',
        'day of month': '15',
        'month': '11',
        'day of week': '5',
        'command': '/usr/bin/find'
    });
  });

//negative test


test('*/15 0 1,15 hk 1-5 /usr/bin/find Wrong Input', () => {
    expect(cronParser('*/15 0 1,15 hk 1-5 /usr/bin/find')).toEqual('please add valid arguments');
  });

  test('*/15 hk 1,15 * 1-5 /usr/bin/find Wrong Input' , () => {
    expect(cronParser('*/15 hk 1,15 * 1-5 /usr/bin/find')).toEqual('please add valid arguments');
  });