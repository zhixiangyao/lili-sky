import { Unicorn, classNames } from '../src/index'

const unicorn = new Unicorn()

console.log(classNames('foo', 'boo'))
console.log(classNames({ foo: true, boo: false }))
console.log(classNames([true && 'foo', 'boo']))

console.log(unicorn.sayHelloTo('hhh'))
