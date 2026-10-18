// Approach 2: sweep line (check-in = +1, check-out = -1)
// Time: O(n log n)  |  Space: O(n)
function hotelOverlapSweepLine(bookings) {
  const events = [];
  for (const [checkIn, checkOut] of bookings) {
    events.push([checkIn, +1]);
    events.push([checkOut, -1]);
  }
  // Sort by day; on the same day, check-outs (-1) come before check-ins (+1)
  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let current = 0;
  let max = 0;
  for (const [, change] of events) {
    current += change;
    max = Math.max(max, current);
  }
  return max;
}

console.log(hotelOverlapSweepLine([[1, 4], [2, 5], [7, 9]])); // 2
console.log(hotelOverlapSweepLine([[1, 3], [3, 5]])); // 1
console.log(hotelOverlapSweepLine([[1, 10], [2, 3], [4, 6], [5, 7]])); // 3
console.log(hotelOverlapSweepLine([])); // 0

module.exports = hotelOverlapSweepLine;
