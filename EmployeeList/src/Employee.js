import React from 'react'

function Employees() {
    const employees =[
    {name:'cerulean',job:'Janitor'},
    {name:'fuchsia',job:'Bouncer'},
    {name:'tigerlily',job:'Aspiring Actress'},
    {name:'turquoise',job:'Bartender'}];
   
    return (

        <div >
            <table >
        <thead>
            <th style={{border:"3px solid"}}>Name</th>
            <th style={{border:"3px solid"}}>Job</th>
        </thead>
        <tbody >

                    {employees.map((data) => (
                <tr> 
                <td style={{border:"3px solid"}}>{data.name}</td>
                <td style={{border:"3px solid"}} >{data.job}</td>
                
                </tr>
            ))}
        </tbody>
            </table>
        </div>


      
    )
}

export default Employees
