/**
 * Beginner - Reduce but Grow
 * Kyu: 8
 *
 * console.log(bears2(3, '88Bifk8hB8BB8BBBB888chl8BhBfd'))
 */

export function grow(x) {
  return x.reduce((acc, ele) => acc * ele)
}
