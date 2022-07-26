import React, { forwardRef, useReducer, useState } from 'react';
import "./AR.style.css"

const initialState = { count: 0 }

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            if (state.count > 0)
                return { count: state.count - 1 };
        default:
            return { count: state.count }
    }
}
const AR = forwardRef((props, ref) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="adder-remover">
            <h3 onClick={() => dispatch({ type: 'increment' })} className='plus'>+</h3>
            <h3 className='count' ref={ref}>{state.count}</h3>
            <h3 onClick={() => dispatch({ type: 'decrement' })} className='minus'>-</h3>
        </div>
    );
})

export default AR;