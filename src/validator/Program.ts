import { KindError } from '../errors/KindError'
import { Program } from '../types'

export default (ast: Program) => {
    if (ast.kind !== 'program') {
        throw new KindError('Could not find "program".')
    }
}

// EOF
