import { generator } from '../src'
const engine = require('php-parser')
const parser = new engine({
    parser: {
        extractDoc: true,
        php7: true,
    },
    ast: {
        withPositions: true,
    },
})

describe('yieldfrom', () => {
    it('simple', () => {
        
        const code = generator(parser.parseEval('yield from from();'))

        // expect(log).toHaveBeenNthCalledWith(1, 'Hello.')

        // log.mockRestore()
    })
})
