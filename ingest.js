const request = require("request");
const cheerio = require("cheerio");

let buildRequestHeaders = () => ({
  "Content-Type": "application/json",
  "User-Agent": "oapicall",
  Accept: "*/*",
  "cache-control": "no-cache",
  Connection: "keep-alive",
});

const fetch = async () => {
  request.get(
    {
      url: "https://eqkg-dev12.apps.us.ocs.oraclecloud.com/api/knowledge-management/v2/articles/5D4F388508A54F9D99A94672708351E2?onlyData=true&fields=contentBody",
      headers: buildRequestHeaders(),
    },
    post_fetch
  );
};

const post_fetch = (error, response, body) => {
  if (error) console.log("error occured");

  let result = JSON.parse(response.body);
  //console.log(result);
  //console.log(result.contentBody.TITLE.value);
  //console.log(result.contentBody.TEXT.value);
  const $ = cheerio.load(result.contentBody.TEXT.value);
  //console.log($.html());
  console.log($("body").text());
};

fetch();
