import React from 'react';
import styles from './styles.scss';
import { ColorWrap, Saturation, Hue } from 'react-color/lib/components/common'
import Swatches from './Swatches';

const NoColor = () => {
  return <div style={{ display: 'inline-block' }}>
    <div className={styles.swatchNoColor}>
      <a>&nbsp;</a>
      <span className={styles.labelSmall}>No colour</span>
    </div>
  </div>
}

const ColourPicker = ({ expand, expanded, width, rgb, hex, hsv, hsl, onChange, onSwatchHover, presetColors, renderers, className = '' }) => {

    return (
      <div className={styles.colourPicker}>

        <Swatches colors={presetColors}
          onClick={onChange}
          onSwatchHover={onSwatchHover}
          onChange={onChange}
        />
        
        { expanded ? 
          
          <div className={styles.controls}>
            <NoColor />
            <a className={styles.expand} onClick={expand}>less<span className={styles.caretUp} /></a>
            <div className={styles.saturation}>
              <Saturation
                className={styles.Saturation}
                hsl={hsl}
                hsv={hsv}
                onChange={onChange}
              />
            </div>
            <div className={styles.hue}>
              <Hue
                className={styles.Hue}
                hsl={hsl}
                onChange={onChange}
              />
            </div>
          </div>
          :
          <span>
            <NoColor />
            <a className={styles.expand} onClick={expand}>
              more<span className={styles.caretDown} />
            </a>
          </span>
        }
      </div>
    )

}

ColourPicker.defaultProps = {
  disableAlpha: false,
  width: 200,
  presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505',
    '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000',
    '#4A4A4A', '#9B9B9B', '#FFFFFF']
}

export default ColorWrap(ColourPicker)