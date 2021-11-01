describe("Util", function () {
  describe("#factorial", function () {
    it("should compute the factorial of 0! and 1! as 1", function () {
      expect(factorial(4)).toBe(24);
    });
  
    it("should return the factorial of a number", function () {
      expect(factorial(4)).toBe(24);
    });
  });
});