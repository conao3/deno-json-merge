export function main(src: Object, otr: Object) {
  for (const key in otr) {
    if (src[key] == null) {
      src[key] = otr[key];
    } else if (typeof src[key] === "object" && typeof otr[key] === "object") {
      main(src[key], otr[key]);
    } else {
      src[key] = otr[key];
    }
  }
  return src;
}
