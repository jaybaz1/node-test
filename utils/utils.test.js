const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
});

it('should async add two number', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    })
})

it('should async square number', (done) => {
    utils.asyncSquare(4, (sum) => {
        expect(sum).toBe(16).toBeA('number');
        done();
    })
})

it('should square a numbers', () => {
    var res = utils.square(3);

    expect(res).toBe(9).toBeA('number');
});

// it('should expect some values', () => {

//     //expect(12).toNotBe(13);
//     //expect({name: 'Baz'}).toEqual({name: 'Baz'});
//     //expect({name: 'Baz'}).toNotEqual({name: 'Baz1'});
//     //expect([2,3,4]).toInclude(3);
//     //expect([2,3,4]).toExclude(5);
//     expect({
//         name: 'Baz',
//         age: 25,
//         location: 'London'
//     }).toInclude({
//         age: 25
//     });
// });

it('should verify first and last names are set', () => {
    let res = utils.setName({
        age: 25,
        location: 'London'
    }, 'Baz Jay');

    expect(res).toInclude({firstName: 'Baz', lastName: 'Jay'}).toBeA('object');
});