// paradlideの仕様を理解できていないので介入させないためにコメントアウト
// import { deLocalizeUrl } from '$lib/paraglide/runtime';

// // アクセスされたパスの、SvelteKit内部での扱いを変更する
// // reroute関数は、アクセスされたURLの代わりに使用する他のURLを返す
// // 例えば、/ja/aboutにアクセスされたときに、あたかも/aboutにアクセスされたかのように振る舞わせることができる
// // prettier-ignore
// export const reroute = (request) => {
//   // deLocalizeUrl関数は、ローカライズされたURLから、ローカライズ部分を除く
//   // 例：https://example.com/ja/about -> https://example.com/about
//   return deLocalizeUrl(request.url).pathname;
// };
