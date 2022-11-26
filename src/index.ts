import { Program } from './types'
import ProgramValidator from './validator/Program'
import { ExpressionStatement } from './types'
import YieldFromRender from './renderer/yieldfrom'

export const generator = (ast: Program): string => {
    // Validate Program object
    ProgramValidator(ast)

    // Initialize code array
    let code: any[] | string = []

    // Iterate children
    for (const child of ast.children) {
        if (child.kind === 'expressionstatement') {
            const exp = child.expression

            if (exp.kind === 'yieldfrom') {
                code = code.concat(YieldFromRender(exp.value))
            }
        }
    }

    return code.join('\n')
}

// EOF
