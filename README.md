# Lili Sky

## Install

```shell
npm install lili-sky
# or
yarn add lili-sky
# or
pnpm add lili-sky
```

## Example

```js
import { Unicorn } from 'lili-sky'
// OR in nodeJS ( commonJS module )
const { Unicorn } = require('lili-sky')

const myUnicorn = new Unicorn()

myUnicorn.sayHelloTo('jason') // '🦄 Hello jason !'
```

```tsx
import { classNames } from 'lili-sky'

classNames('foo', 'boo') // 'foo boo'
classNames({ foo: true, boo: false }) // 'foo'
classNames([true && 'foo', 'boo']) // 'foo boo'

const foo = () => {
  return <div className={classNames({ foo: true, boo: false })} />
}
```
