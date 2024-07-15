const { Ship } = require("./classes.js");

test("Sunken ship", () => {
  let ship = new Ship((length = 2), (orient = 0), (position = [0, 0]));
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBeTruthy();
});

test("Non-Sunken ship", () => {
  let ship = new Ship((length = 3), (orient = 0), (position = [0, 0]));
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBeFalsy();
});
