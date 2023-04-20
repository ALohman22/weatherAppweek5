import React from 'react'
import {useSelector} from 'react-redux'
import {selectDisplay} from '../redux/slices/displayCountrySlice'
import { current } from '@reduxjs/toolkit'

const Overview = () => {
    const currentDisplay = useSelector(selectDisplay)
    return (
        <div className='stack'>
            <h1>{currentDisplay.name.official}</h1>
            <h2>"{currentDisplay.name.common}"</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Borders: </td>
                        <td>
                            {currentDisplay.borders ? currentDisplay.borders.map((e,i,arr) => {
                                if(i + 1 === arr.length){
                                    return `${e}`
                                } else {
                                    return `${e},`
                                }
                            })
                            : "N/A"}
                        </td>
                    </tr>
                
                    <tr>
                        <td>Capitol: </td>
                        {currentDisplay.capital.map((e) => (
                            <td key={e}>{e}</td>
                        ))}
                    </tr>
                
                    <tr>
                        <td>Population: </td>
                        <td>{currentDisplay.population}</td>
                    </tr>

                    <tr>
                        <td>Independent: </td>
                        <td>{currentDisplay.independent ? "true" : "false"}</td>
                    </tr>

                    <tr>
                        <td>Start of Week: </td>
                        <td>{currentDisplay.startOfWeek}</td>
                    </tr>

            
                </tbody> 

                
            </table>
            
        </div>
    )
}

export default Overview