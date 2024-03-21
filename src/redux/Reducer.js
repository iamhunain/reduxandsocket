const initialstate = []

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'console':
            console.log('first')
            return state
        default:
            return console.log('state')
    }
}