import './Header.scss'

import USD from '../assets/flags/USD.svg'
import BRL from '../assets/flags/BRL.svg'
import EUR from '../assets/flags/EUR.svg'
import GBP from '../assets/flags/GBP.svg'
import CHF from '../assets/flags/CHF.svg'
import JPY from '../assets/flags/JPY.svg'

import arrowDown from '../assets/icons/arrow-down.svg'
import convertIcon from '../assets/icons/convert-icon.svg'
import { useState } from 'react'

export default function Header(){
  let [amount, setAmount] = useState('1')
  let amountInt = parseFloat(amount)
  let [conversion, setConversion] = useState('USD')
  let [currency, setCurrency] = useState(0)
  
  let calc = amountInt * currency
  let conversionFomated = calc.toLocaleString('pt-BR', {maximumFractionDigits: 2, useGrouping: true})


  async function getCurrencyValue() {
    const response = await fetch(`https://economia.awesomeapi.com.br/last/${conversion}-BRL`)
    const data = await response.json()
    if (conversion === 'USD') {
      setCurrency(data.USDBRL.bid)
    } else if( conversion === 'EUR'){
      setCurrency(data.EURBRL.bid)
    } else if(conversion === 'GBP'){
      setCurrency(data.GBPBRL.bid)
    } else if(conversion === 'CHF'){
      setCurrency(data.CHFBRL.bid)
    } else if(conversion === 'JPY'){
      setCurrency(data.JPYBRL.bid)
    }
  }
  getCurrencyValue()
  
  
  function setCoinIcon(){
    if(conversion === 'USD'){
      return '$'
    } else if(conversion === 'EUR'){
      return '€'
    } else if(conversion === 'GBP'){
      return '£'
    } else if(conversion === 'JPY'){
      return '¥'
    } else if(conversion === 'CHF'){
      return 'Fr'
    } 
  }
  
  function setFlag(){
    if(conversion === 'USD'){6
      return USD
    } else if(conversion === 'EUR'){
      return EUR
    } else if(conversion === 'GBP'){
      return GBP
    } else if(conversion === 'JPY'){
      return JPY
    } else if(conversion === 'EUR'){
      return EUR
    } else if(conversion === 'CHF'){
      return CHF
    } 
    
  }

  return(
    <header>
        <h1>Conversor de moedas</h1>
        <div className="converter">
          <div className="currency1">
            <input type="number" value={amount} onChange={quantidade => setAmount(quantidade.target.value)}/>
            <div className='coin'>{setCoinIcon()}</div>
            <div className="select-bar"></div>

              <select value={conversion} onChange={valor => setConversion(valor.target.value)}>
                <option value="USD">
                  USD
                </option>
                <option value="EUR">
                  EUR
                </option>
                <option value="GBP">
                  GBP
                </option>
                <option value="CHF">
                  CHF
                </option>
                <option value="JPY">
                  JPY
                </option>
                
              </select>
            
                <img className='flags' src={setFlag()} alt="" />
                <img className='arrow' src={arrowDown} alt="" />
                
          </div>
          
            <img src={convertIcon} alt="" />

          <div className="currency2">
            <div className="input-area">
              {`R$ ${conversionFomated}`}
            </div>
            <div className='select-bar'></div>
            <img className='flags' src={BRL} alt="" />
            <select>
              <option value="1">
                BRL
              </option>
            </select>
            
          </div>
        </div>
      </header>
  )
}