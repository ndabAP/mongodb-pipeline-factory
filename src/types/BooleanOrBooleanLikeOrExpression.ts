import Expression from './Expression'
import BooleanLike from './BooleanLike'

type BooleanOrBooleanLikeOrExpression = Array<[string, Expression | boolean | BooleanLike]>

export default BooleanOrBooleanLikeOrExpression