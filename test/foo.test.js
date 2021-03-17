const foo = require(`../hw_3/foo.js`);

test(`bigTestyFoo`, () => {
    expect(foo()).toBe(`bar`)
});