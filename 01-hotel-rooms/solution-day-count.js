// Approach 1: count guests per day
// Time: O(n * d)  |  Space: O(D)
function hotelRoomOverlap(bookings) {
  const rooms = new Array(100).fill(0);
  for (const booking of bookings) {
    const [checkIn, checkOut] = booking;
    for (let i = checkIn; i < checkOut; i++) {
      rooms[i]++;
    }
  }
  return Math.max(...rooms);
}

console.log(hotelRoomOverlap([[1, 4], [2, 5], [7, 9]])); // 2
console.log(hotelRoomOverlap([[1, 3], [3, 5]])); // 1
console.log(hotelRoomOverlap([[1, 10], [2, 3], [4, 6], [5, 7]])); // 3
console.log(hotelRoomOverlap([])); // 0

module.exports = hotelRoomOverlap;
