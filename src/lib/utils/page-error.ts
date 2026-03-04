const ERROR_CODES = {
  NOT_FOUND: 'NOT_FOUND',
  LANGUAGE_NOT_FOUND: 'LANGUAGE_NOT_FOUND',
} as const;

type PageError = App.Error & {
  code: string;
};
/** そのページが存在しないときのエラー 普通の404 */
type PageNotFoundError = PageError & {
  code: typeof ERROR_CODES.NOT_FOUND;
};
/** そのページは存在するが、求められた言語版のページが存在しないときのエラー 一応404？ */
type LanguageNotFoundError = PageError & {
  code: typeof ERROR_CODES.LANGUAGE_NOT_FOUND;
};

/** PageNotFoundErrorを生成する */
export const createPageNotFoundError = (msg: string = 'ページが見つかりません'): PageNotFoundError => {
  return { message: msg, code: ERROR_CODES.NOT_FOUND };
};
/** LanguageNotFoundErrorを生成する */
export const createLanguageNotFoundError = (
  msg: string = '対応する言語版のページがありません',
): LanguageNotFoundError => {
  return { message: msg, code: ERROR_CODES.LANGUAGE_NOT_FOUND };
};

const isPageError = (error: App.Error): error is PageError => {
  return 'code' in error && typeof error.code === 'string';
};
const isPageNotFoundError = (error: PageError): error is PageNotFoundError => {
  return error.code === ERROR_CODES.NOT_FOUND;
};
const isLanguageNotFoundError = (error: PageError): error is LanguageNotFoundError => {
  return error.code === ERROR_CODES.LANGUAGE_NOT_FOUND;
};

/**
 * PageErrorをPageNotFoundErrorとLanguageNotFoundErrorに分類する
 * @param error App.Error
 * @returns エラーオブジェクトの型の名前の文字列 'PageNotFoundError' | 'LanguageNotFoundError' | 'UnknownError'
 */
export function getPageErrorType(error: PageNotFoundError): 'PageNotFoundError';
export function getPageErrorType(error: LanguageNotFoundError): 'LanguageNotFoundError';
export function getPageErrorType(error: App.Error): 'PageNotFoundError' | 'LanguageNotFoundError' | 'UnknownError';
export function getPageErrorType(error: App.Error): 'PageNotFoundError' | 'LanguageNotFoundError' | 'UnknownError' {
  if (!isPageError(error)) return 'UnknownError';
  if (isPageNotFoundError(error)) return 'PageNotFoundError';
  if (isLanguageNotFoundError(error)) return 'LanguageNotFoundError';
  return 'UnknownError';
}
