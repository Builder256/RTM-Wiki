/**
 * アイテム名の型
 */
export type Item = string;
/**
 * 引数がItem型か判定
 * @param value 判定する値
 * @return Item型ならtrue
 */
export function isItem(value: unknown): value is Item {
  return typeof value === 'string' && value !== '';
}

/**
 * スタック数を表す型 int 0~64
 */
export type StackAmount = BuildRange<64>;
/**
 * 引数がStackAmount型か判定（0〜64 の整数であるか）
 * @param value 判定する値
 * @return StackAmount型ならtrue
 */
export function isStackAmount(value: unknown): value is StackAmount {
  return (
    typeof value === 'number' &&
    Number.isInteger(value) &&
    value >= 0 &&
    value <= 64
  );
}

/**
 * スロットの内容を表す型
 * `Item`または`[Item, スタック数: int]`
 */
export type ItemStack = Item | [Item, StackAmount];
/**
 * 引数がItemStack型か判定
 * @param value 判定する値
 * @return ItemStack型ならtrue
 */
export function isItemStack(value: unknown): value is ItemStack {
  if (isItem(value)) return true;
  if (
    Array.isArray(value) &&
    value.length === 2 &&
    isItem(value[0]) &&
    isStackAmount(value[1])
  ) {
    return true;
  }
  return false;
}

/**
 * 0からNまでの範囲のintを表す型
 * 仕組みはよくわからない IDE見る限り正しく定義できてそうなのでヨシ！
 */
type BuildRange<
  N extends number,
  Result extends unknown[] = [],
> = Result['length'] extends N
  ? Result[number] | N
  : BuildRange<N, [...Result, Result['length']]>;
