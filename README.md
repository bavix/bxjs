# bxjs

## model system

```js
var person = new bx.model({
  name: 'Ondrei',
  age: 22
});

person.age++;
console.log(person.age); // 23
```

## simple framework

```js
bx.ready(function () {

  bx.el.find('h1.title[data-attribute]'); // first element
  bx.el.findAll('h1.title[data-attribute]'); // all element's
  bx.each([1, 2, 3], console.log); // console.log(key, value);

  var person = {
    name: 'Ondrei',
    age: 22
  };

  person.watch('age', (prop, oldVal, newVal) => {
    console.log(prop, oldVal, newVal);
    return newVal; // save on current model
  }); 

  person.age++; // console.log('age', 22, 23);

});
```

---
Supported by

[![Supported by JetBrains](https://cdn.rawgit.com/bavix/development-through/46475b4b/jetbrains.svg)](https://www.jetbrains.com/)

