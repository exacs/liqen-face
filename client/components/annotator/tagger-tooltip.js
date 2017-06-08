/**
 * Tooltip to select a tag
 *
 * Inputs
 * - tagList
 * - position
 * - visible
 *
 * Outputs
 * - onTag()
 */
import React from 'react'
import PropTypes from 'prop-types'

const TaggerTooltip = ({ list, selected, onSelect, onUnselect, position }) => (
  <div
    className='tooltip tooltip-bottom'
    style={{
      opacity: 1,
      position: 'fixed',
      top: (position.top + position.height) + 'px',
      left: (position.left) + 'px'
    }}
  >
    <div className="tooltip-arrow"></div>
    {selected
     ? (
       <div className='tooltip-inner'>
         <button
           className='btn btn-link'
           onClick={() => onUnselect()}
         >
           ×
         </button>
         {list.filter(tag => tag.id === selected)[0].title}
       </div>
     )
     : (
       <div className='tooltip-inner'>
         <ul
           style={{
             padding: 0,
             margin: 0,
             listStyle: 'none'
           }}
         >
           {
             list.map(tag => (
               <li
                 key={tag.id}
                 style={{
                   padding: '5px'
                 }}
               >
                 <button
                   style={{
                     color: '#FFF',
                     fontFamily: 'sans-serif',
                     fontWeight: 'bold',
                     padding: '5px',
                     background: 'none',
                     border: 0,
                     cursor: 'pointer',
                     outline: 'none',
                     textAlign: 'left'
                   }}
                   onClick={() => onSelect(tag)}
                 >
                   {tag.title}
                 </button>
               </li>
             ))
           }
         </ul>
       </div>
     )}
  </div>
)

TaggerTooltip.propTypes = {
  list: PropTypes.array,
  selected: PropTypes.number,
  onSelect: PropTypes.func,
  onUnselect: PropTypes.func
}

export default TaggerTooltip
