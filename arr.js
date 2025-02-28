// var productExceptSelf = function (nums) {
//   //   let value = 1;
//   //   let result = [];
//   //   for (let i = 0; i < nums.length; i++) {
//   //     for (let j = 0; j < nums.length; j++) {
//   //       if (i !== j) {
//   //         value = value * nums[j];
//   //       }
//   //     }
//   //     result.push(value);
//   //     value = 1;
//   //   }
//   //   console.log(result);

//   let dict = {};
//   for (let i = 0; i < nums.length; i++) {
//     dict[i] = nums[i];
//   }
//   console.log(dict);
// };

// productExceptSelf([1, 2, 3, 4]);

var rotate = function (matrix) {

  let dict = {
    0: { 0: matrix[matrix.length - 1][0] },
    [matrix.length - 1]: { 0: matrix[matrix.length - 1][matrix.length - 1] },
  };
  for (i in matrix) {
    for (j in matrix) {
      dict[i] = { ...dict[i], [j]: matrix[matrix.length - 1 - j][i] };
    }
  }
  for (i in matrix) {
    matrix[i] = Object.values(dict[i]);
  }
  console.log(dict);

  console.log("final>>>>>>>>>>>>", matrix);
};

rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]);

// rotate([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);
