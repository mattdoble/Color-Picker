import React from 'react';
import PropTypes from 'prop-types';
import styles from './Swatches.scss';
import { Swatch } from 'react-color/lib/components/common';

const Swatches = ({ colors, onClick = () => { }, onSwatchHover }) => {
  const handleClick = (hex, e) => {
    onClick({
      hex,
      source: 'hex',
    }, e)
  }
  return (
    <div className={styles.colors}>
      {colors.map((colorObjOrString) => {
        const c = typeof colorObjOrString === 'string'
          ? { color: colorObjOrString }
          : colorObjOrString
        const key = `${c.color}${c.title || ''}`
        return (
          <div key={key} className={styles.swatchWrap}>
            <Swatch
              { ...c }
              className={styles.swatch}
              style={{borderRadius: '3px'}}
              onClick={handleClick}
              onHover={onSwatchHover}
              focusStyle={{
                boxShadow: `inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ${c.color}`,
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

Swatches.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      color: PropTypes.string,
      title: PropTypes.string,
    })],
  )).isRequired,
}

export default Swatches;