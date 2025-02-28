var merge = function (intervals) {
  let dict = {};
  for (i in intervals) {
    if (dict[intervals[i][0]]) {
      console.log(dict[intervals[i][0]] < intervals[i][1]);

      if (dict[intervals[i][0]] < intervals[i][1]) {
        // dict[intervals[i][0]]
        dict[intervals[i][0]] = intervals[i][1] - intervals[i][0];
      }
    } else {
      dict[intervals[i][0]] = intervals[i][1] - intervals[i][0];
    }
  }
  console.log(dict);
  Object.keys(dict).forEach((key, index) => {
    console.log(
      parseInt(key) + dict[key],
      parseInt(key) + dict[key] >= Object.keys(dict)[index + 1],
      index
    );
  });
};

merge([
  [1, 3],
  [1, 4],
  [5, 6],
  [2, 10],
  [15, 18],
]);
