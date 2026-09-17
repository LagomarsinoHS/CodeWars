/**
 * Easy Balance Checking
 * Kyu: 6
 *
 * console.log(duplicateEncode("Success"));//")())())","should ignore case"
 */

export function balance(book) {
  const round = x => Number(x).toFixed(2);
  book = book.split("\n").filter(Boolean).map(x => x.replace(/[^a-z0-9.]/gi, " ").split(" ").filter(Boolean));
  let balance = book[0];
  let totalExpence = 0;
  let result = ["Original Balance: " + round(balance)];
  book.forEach((x, i) => {
    if (i > 0) {
      totalExpence += Number(book[i][2]);
      balance -= Number(book[i][2])
      result.push(book[i][0] + " " + book[i][1] + " " + round(book[i][2]) + " Balance " + round(balance));
    }
  });
  result.push("Total expense  " + round(totalExpence));
  result.push("Average expense  " + round(totalExpence / (book.length - 1)));
  return result.join("\r\n");
}
