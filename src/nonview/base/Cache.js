const N_MAX_RETRY = 5;
export default class Cache {
  constructor(cacheKey) {
    this.cacheKey = cacheKey;
  }

  clear() {
    localStorage.setItem(this.cacheKey, "");
  }

  set(item) {
    for (let i = 0; i < N_MAX_RETRY; i++) {
      try {
        localStorage.setItem(this.cacheKey, JSON.stringify(item));
        return true;
      } catch {
        localStorage.clear();
      }
    }
    return false;
  }

  getHot() {
    const hotJSON = localStorage.getItem(this.cacheKey);
    if (Cache.isValidHotItem(hotJSON)) {
      return JSON.parse(hotJSON);
    }
    throw Error("Item not in cache: " + this.cacheKey);
  }

  async get(asyncFallback) {
    try {
      return this.getHot();
    } catch (e) {}

    const cold = await asyncFallback();
    this.set(cold);
    return cold;
  }

  static isValidHotItem(itemJSON) {
    return (
      itemJSON && itemJSON !== "" && itemJSON !== null && itemJSON !== "null"
    );
  }
}
