describe("Dino", function () {
  describe("#constructor", function () {
    it("should accept a color", function () {
      let dino = new Dino("red");
      expect(dino.color).toBe("red");
    });
  });

  describe("::generateRandomDino", function () {
    it("should generate a random colored Dino", function () {
      let dino = Dino.generateRandomDino();
      expect(dino instanceof Dino).toBe(true);
      expect(Dino.COLORS.includes(dino.color)).toBe(true);
    });
  });
});