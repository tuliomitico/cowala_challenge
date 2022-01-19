const faxina = propriedade => {
  Object.keys(propriedade).map(key => {
    if (propriedade[key] === null) {
      delete propriedade[key];
    }
  });
  return propriedade
}

console.log(faxina({ "fizz": "buzz", "foo": null, "bar": 42 }));
