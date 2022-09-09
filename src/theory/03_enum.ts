// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// Direction2.Up = 'Upper' // ERROR Cannot assign to 'Up' because it is a read-only property.ts(2540)
console.log(Direction2.Up) // 'Up'
