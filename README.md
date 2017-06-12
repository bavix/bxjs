# bxjs

```js
bx.ready(function () {

  bx.el.find('h1.title[data-attribute]'); // first element
  bx.el.findAll('h1.title[data-attribute]'); // all element's
  bx.each([1, 2, 3], console.log); // console.log(key, value);

  var person = {
    name: Ondrei,
    age: 22
  };

  person.watch('age', (prop, oldVal, newVal) => {
    console.log(prop, oldVal, newVal);
  }); 

  person.age++; // console.log('age', 22, 23);

});
```
