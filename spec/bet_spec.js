describe("Bet", function () {
  let type = "win";
  let choice = Dino.generateRandomDino();
  let amount = 15.75;
  let race = new Race([choice, choice, choice, choice], 300);
  let bet = new Bet(type, choice, amount, race);

  describe("#constructor", function () {
    it("should accept a type, choice, amount, and Race object", function () {
      expect(bet.type).toBe("win");
      expect(bet.choice).toBe(choice);
      expect(bet.amount).toBe(amount);
      expect(bet.race).toBe(race);
    }); 
  });

  describe('#matches', function () {
    it("should compare the bet's choice to the choice passed in", function () {
      expect(bet.matches(choice)).toBe(true);
    });
  });
  
  describe('#earnings', function () {
    it("should calculate the earnings winning the bet would generate", function () {
      expect(bet.earnings()).toBe(63);
      bet.type = "show";
      expect(bet.earnings()).toBe(21);
      bet.type = "sequence"
      expect(bet.earnings()).toBe(378);
    });
  });
});