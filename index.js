// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]


  function superbowlWin(record) {
    function isWin(game) {
        return game.result === "W";
    }

    var win = record.find(isWin);

    if (win) {
        return win.year;
    } else {
        return undefined;
    }
}
console.log(superbowlWin(record)); 