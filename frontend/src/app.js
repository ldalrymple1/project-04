console.log('hello world')

fetch('api/exhibitions')
  .then(res => res.json())
  .then(res => console.log(res))
  .then(err => console.log(err))
