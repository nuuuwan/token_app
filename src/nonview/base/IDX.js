export default class IDX {
  static build(arr, fArrItemToKey, fArrItemToValue) {
    let idx = {};
    for (let arrItem of arr) {
      idx[fArrItemToKey(arrItem)] = fArrItemToValue(arrItem);
    }
    return idx;
  }

  static map(idx, fKeyMap, fValueMap) {
    return Object.entries(idx).reduce(function (mappedIdx, [k, v]) {
      mappedIdx[fKeyMap(k)] = fValueMap(v);
      return mappedIdx;
    }, {});
  }
}
