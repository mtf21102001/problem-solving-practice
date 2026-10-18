# 01 - Minimum Hotel Rooms (Meeting Rooms II)

## Problem
Given hotel bookings as `[checkIn, checkOut]` (integer days), return the minimum number of rooms needed so every booking gets a room. A guest checks out in the morning, so a room is free again on the `checkOut` day.

```js
minRooms([[1, 4], [2, 5], [7, 9]]);          // 2
minRooms([[1, 3], [3, 5]]);                  // 1
minRooms([[1, 10], [2, 3], [4, 6], [5, 7]]); // 3
minRooms([]);                                // 0
```

## Approach 1 - Count guests per day (`solution-day-count.js`)
For every booking, add one guest to each day from `checkIn` up to (not including) `checkOut`. The answer is the busiest day.
- Time: O(n x d), Space: O(D)
- Simple and clear, but slow when bookings are very long.

## Approach 2 - Sweep line (`solution-sweep-line.js`)
Turn each booking into two events: check-in `+1` and check-out `-1`. Sort events by day (check-outs first on the same day), walk through them keeping a running count, and track the maximum.
- Time: O(n log n), Space: O(n)
- Only depends on the number of bookings, not on how long they are.

## Run
```bash
node solution-day-count.js
node solution-sweep-line.js
```
