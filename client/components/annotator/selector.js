/**
 * Select an Annotation among an array of them
 *
 * Input
 * - Array of annotations
 *
 * Output
 * - onSelect(id or annotation)
 */
import React from 'react'
import PropTypes from 'prop-types'

const Selector = ({ list, selected, onSelect }) => (
  <div>
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}
    >
      {list.map(obj => (
         <li key={obj.id}>
           <button
             style={{
               background: 'none',
               border: 0,
               fontFamily: 'sans-serif',
               fontSize: '24px',
               fontWeight: 'bold',
               color: selected && selected.id === obj.id ? 'green' : '#CCC',
               outline: 'none',
               cursor: 'pointer'
             }}
             onClick={() => onSelect(obj)}
           >
             *
           </button>
         </li>
       ))}
    </ul>
  </div>
)

Selector.propTypes = {
  list: PropTypes.array,
  selected: PropTypes.number,
  onSelect: PropTypes.func
}

export default Selector
