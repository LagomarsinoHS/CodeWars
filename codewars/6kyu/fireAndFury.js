/**
 * FIRE and FURY
 * Kyu: 6
 */

export function fireAndFury(tweet) {
  let matches = tweet.match(/(FURY|FIRE)/g);

  if (/[^EFIRUY]/.test(tweet) || !matches) {
    return 'Fake tweet.';
  }

  const helper = (word, count) => {
    let phrase;
    if (word === 'FURY') {
      phrase = count < 2 ? 'I am furious.' : `I am ${"really ".repeat(count - 1)} furious.`
    } else {
      phrase = count < 2 ? 'You are fired!' : `You ${"and you ".repeat(count - 1)} are fired!`
    }

    return phrase;
  }


  let result = '';
  while (matches.length > 0) {
    let count = 1
    const thisWord = matches.shift()

    while (thisWord === matches[0]) {
      matches.shift()
      count++
    }
    result += " " + helper(thisWord, count)
  }

  return result.trim();
}
