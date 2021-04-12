// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {
  return (((m - 1) + s) % n) || n;
}

/**
 * n=no of prisoners
 * m=no of sweets
 * s=chair no to begin passing the sweets
 */
module.exports = saveThePrisoner