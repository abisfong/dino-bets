describe("DinoSprite", function () {
  describe("#constructor", function () {
    it("should accept a color", function () {
      let dinoSprite = new DinoSprite({color: "red"});
      expect(dinoSprite.color).toBe("red");
    });
  });

  describe("::generateRandomDino", function () {
    it("should generate a random colored Dino", function () {
      let dinoSprite = DinoSprite.generateRandomDino();
      expect(dinoSprite instanceof Dino).toBe(true);
      expect(DinoSprite.COLORS.includes(dinoSprite.color)).toBe(true);
    });
  });
});