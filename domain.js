function domainName(url) {
  return url.replace(/www\.|http:\/\/|https:\/\/|\.\w+/g, "").split("/")[0];
}

let result = domainName("http://www.zombie-bites.com");
// result = domainName("https://www.cnet.com");
// result = domainName("http://github.com/carbonfive/raygun");

result = domainName("http://google.co.jp");

result = domainName("https://www.tntd2xqlcy1ve-x7h1-pe4eh.info/");
result = domainName(" http://www.xs12woy01z4o36n1--4u.pro/warez/");

console.log(result);
