var test = require("./index.js");
test("Test function returns 1 when 1 is passed to it", () => {
    expect(test(1)).toBe(1)
})
