import React from 'react';
import './Dealcomponent.css';
import {Link} from 'react-router-dom';
import { useRouteMatch } from 'react-router';

export default function Dealcomponent({deals})
{
    const { url } = useRouteMatch();

    return deals.map((deal,index)=>{
        return <Link to={{
            pathname: `${url}/deal${index+1}`,
            state:{
                deal:{
                    dealno:`Deal ${index+1}`,
                    silvertype:deal.silvertype,
                    weight:deal.weight,
                    touch:deal.touch,
                    labourTouch:deal.labourTouch,
                    purity:deal.purity,
                    estimatedProductWeight:deal.estimatedProductWeight,
                }
            }
            }} key={index} className='deal' >
                <div className='dealcomponent'>
                <header className='deal-header'>
                    <h3>Deal {index+1} </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#18354A"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"/></svg>
                </header>
                <div className='information-container'>
                    <div className='inforow'>
                        <p className='info'>Client given purity</p>
                        <small className='value'>{deal.purity} <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="15px" fill="#18354A"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"/></svg></small>
                    </div>
                    <div className='inforow'>
                        <p className='info'>Est thiruvani weight</p>
                        <small className='value'>{deal.estimatedProductWeight}</small>
                    </div>
                    <div className='inforow'>
                        <p className='info'>Final thiruvani weight</p>
                        <small className='value'>--</small>
                    </div>
                    <div className='inforow'>
                        <p className='info'>Balance </p>
                        <small className='value'>--</small>
                    </div>
                </div>
            </div>
            </Link>;
    });
}
