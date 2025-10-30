/**
 * コンポーネントに不正な属性が渡された時に投げられるエラー
 * @param message エラーメッセージ
 * @param page エラーが投げられたページのURL (`Astro.url`)
 */
export class InvalidComponentAttributeError extends Error {
  constructor(message: string, page: URL) {
    const msg = `${message}\nページ名: ${page}`;
    super(msg);
    this.name = 'InvalidComponentAttributeError';
  }
}
