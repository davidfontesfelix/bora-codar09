import './Rate.scss'

import chart from '../assets/graphic/chart.svg'
import line from '../assets/graphic/lines.svg'


export default function Rate() {
  return(
    <article>
      <h2>Taxa de câmbio</h2>
      <div className="chart">
        <div className="graphic">
          <div className="grid">
            <div className="bars"></div>
            <div className="bars"></div>
            <div className="bars"></div>
            <div className="bars"></div>
          </div>
          <img className='line' src={line} alt="" />
          <img src={chart} alt="" className='chart'/>
        </div>
        <div className="Y">
          <h4>5,3</h4>
          <h4>5.2</h4>
          <h4>5.1</h4>
          <h4 style={{marginBottom: '0px'}} >5.0</h4>
        </div>
        <div className="X">
          <ul>
            <li>1D</li>
            <li>5D</li>
            <li className='active' >1M</li>
            <li>1A</li>
            <li>5A</li>
            <li>Máx</li>
          </ul>
        </div>
        <div className="space"></div>
      </div>
    </article>
  )
}