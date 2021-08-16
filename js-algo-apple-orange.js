// Imagine apple and oranges tree []
// Count how many fall in range of a starting (s) and end point (t) after
// each element in 'tree' array represents distances fruit falls from tree
// added location of tree(a or b) to each array
// print the amount for each apple and orange that falls within s-t

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let totalApples = 0;
  let totalOranges = 0;
  apples.forEach((element) => {
    element + a >= s && element + a <= t
      ? (totalApples += 1)
      : (totalApples += 0);
  });
  oranges.forEach((element) => {
    element + b >= s && element + b <= t
      ? (totalOranges += 1)
      : (totalOranges += 0);
  });

  console.log(totalApples);
  console.log(totalOranges);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
