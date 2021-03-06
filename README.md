# NOT MAINTAINED mongodb-pipeline-factory

Generate MongoDB pipelines with ease. Save dozens of keystrokes.

## Features

- Faster overviews
- pipeline validation
- lightweight library
- 100 % test coverage

## Installation

```bash
$ npm install mongodb-pipeline-factory --save
```

## Usage

Import the stages or operators you need first.

```js
import { cond, gt, project } from 'mongodb-pipeline-factory'
```

Now build your first pipeline.

```js
project(
  ['item', 1],
  ['discount', cond(
    gt('$quantity', 250),
    30,
    20
  )]
)
```

## Author

[Julian Claus](https://www.julian-claus.de) and contributors.

## License

MIT
