describe('Money', function () {
  let money = new Money();
  describe('#constructor', function () {
    it("should accept a starting amount that defaults to 100", function () {
      let moneyWithStartingAmount = new Money(350);
      expect(money.amount).toBe(100);
      expect(moneyWithStartingAmount.amount).toBe(350);
    });
  });

  describe('#deduct', function () {
    it("should deduct from the current amount", function () {
      money.deduct(25);
      expect(money.amount).toBe(75);
    });

    it("should throw an error when deducting more than the current amount", function () {
      expect(function () { money.deduct(76) }).toThrow(new Error("Insufficient funds"))
    });
  });
});