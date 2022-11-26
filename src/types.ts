export interface Base {
    kind: string
    loc: Location
}

export interface Location {
    source: any
    start: any
    end: any
}

// ExpressionStatement
// Location { source: null, start: [Position], end: [Position] },
// [ [UseItem] ]

export interface UseGroup extends Base {
    name: string | null
    type: string | null
    items: any
}

export interface ExpressionStatement extends Base {
    expression: any
}

export interface Program extends Base {
    // children: Array<UseGroup | ExpressionStatement>
    children: any
    errors: any
    comments: any
}

// EOF
