// Type Assertion
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alsoEndsWithC = (message as string).endsWith('c');

// Interfaces
interface Book {
  id: number,
  title: string,
  author: string,
}