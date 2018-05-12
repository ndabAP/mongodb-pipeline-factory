import Expression from './Expression'
import BooleanLike from './BooleanLike'

type Expressions = Array<Expression> | Array<string | number | boolean | BooleanLike>

export default Expressions