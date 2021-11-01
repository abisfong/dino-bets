describe('Race', function () {
  let dino = Dino.generateRandomDino();
  let dinos = [dino, dino, dino, dino];
  let race = new Race(dinos, 300);

  describe('#constructor', function () {
    it("should accept an array of dinos and a time in seconds", function() {
      expect(race.dinos).toBe(dinos);
      expect(race.time).toBe(300);
    });

    it("should save the number of dinos in the current race", function () {
      expect(race.dinoCount).toBe(4);
    });

    it("should create a winner variable that is set to null", function () {
      expect(race.winner).toBe(null);
    });
  });

  describe('#finish', function () {
    it("should set the winner of the race", function () {
      race.finish(dino);
      expect(race.winner).toBe(dino)
    });

    it("should throw an error when attempting to set the winner to a dino not in the race", function () {
      expect(
        function () { race.finish(Dino.generateRandomDino()); }
      ).toThrow(new Error("Winner must be a part of the race"));
    });
  });

  describe('#isFinished', function () {
    it("should return true if the race is finished, false otherwise", function () {
      expect(race.isFinished()).toBe(true);
      expect((new Race([], 200)).isFinished()).toBe(false);
    });
  });
});