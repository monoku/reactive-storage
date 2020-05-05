# @monoku/reactive-storage
---
A reactive storage with zero dependency

#### Installation

Using npm:

`npm install @monoku/reactive-storage --save`

Using yarn:

`yarn add @monoku/reactive-storage`

Using unpkg:

`<script src="https://unpkg.com/@monoku/reactive-storage/lib/index.js" />`

#### Basic example:

```js
import ReactiveStorage from '@monoku/reactive-storage';


const MyReactiveStorage = new ReactiveStorage(localStorage); // use localStorage

MyReactiveStorage.setItem('foo', 'bar');

console.log(MyReactiveStorage.getItem('foo'));
// output 'bar'

// Subscribe to 'foo' changes
MyReactiveStorage.subscribe('foo', (event) => {
  console.log(event);
  // output {
  //   key: 'foo',
  //   newValue: 'lorem',
  //   oldValue: 'bar'   
  // }
});

// Set a new value
MyReactiveStorage.setItem('foo', 'lorem');
```

