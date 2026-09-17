/**
 * Middle me
 * Kyu: 7
 *
 * console.log(createMessage("Hello")("World!")("how")("are")("you?")())
 */

export function middleMe(N, X, Y) {
  let str = ""
  /*     if (N % 2 != 0) return X
      for (let i = 0; i <= N; i++) {
          if (i == N / 2) str += X
          else str += Y
      }
      return str*/
  str = Y.repeat(N / 2)
  return N % 2 != 0 ? X : str + X + str
}
