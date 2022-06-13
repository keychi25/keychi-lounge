import { Handler } from "aws-lambda";

export const handler: Handler = async (event) => {
  const { request } = event.Records[0].cf;

  // "/" へのリクエストはそのまま処理する
  if (request.uri === "/") {
    return request;
  }

  // ファイル名 ("/" で区切られたパスの最後) を取得
  const filename = request.uri.split("/").pop();

  if (!filename) {
    // ファイル名が空 (つまり "/" で終わる) の場合、末尾の "/" を除去してリダイレクト
    return {
      status: "302",
      statusDescription: "Found",
      headers: {
        location: [
          {
            key: "Location",
            value: request.uri.replace(/\/+$/, "") || "/",
          },
        ],
      },
    };
  } else if (!filename.includes(".")) {
    // ファイル名に拡張子がついていない場合、 ".html" をつける
    request.uri = request.uri.concat(".html");
  }

  return request;
};
