import React from 'react';

function Katcha({inputList,handleRemove,setInputList}) {

    const handleInputChange = (e, i) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[i][name] = value;
        setInputList(list);
      };

    return (
        <div>
             {/* {
                         inputList.length == 0 ?
                        ''
                          : 
                          inputList.map((x, i) => {
                            return (
                                  <fieldset>
                                     <legend className='flex row justifycontent-spacebetween'>
                                        katcha {i} : 
                                        <div onClick={handleRemove} id={`${i}`} className='remove-input'>
                                          <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path fill-rule="evenodd" clip-rule="evenodd" d="M20.55 4.5501L13.05 12.0501L20.5 19.5001C20.8 19.8001 20.8 20.2501 20.5 20.5501C20.2 20.8501 19.75 20.8501 19.45 20.5501L12 13.0501L4.54999 20.5501C4.24999 20.8501 3.79999 20.8501 3.49999 20.5501C3.19999 20.2501 3.19999 19.8001 3.49999 19.5001L10.95 12.0001L3.44999 4.5001C3.14999 4.2001 3.19994 3.80009 3.49994 3.50009C3.79994 3.20009 4.19999 3.1501 4.49999 3.4501L12 10.9501L19.5 3.4501C19.8 3.1501 20.25 3.1501 20.55 3.4501C20.85 3.7501 20.85 4.2501 20.55 4.5501Z" fill="#18354A"/>
                                          </svg>
                                        </div>
                                    </legend>
                                        
                                      <div key={x} className='flex dynamic-input flex-column'>
                                          <label htmlFor="weight">Weight</label>
                                          <input className='weightinput'
                                          id={`weight${i}`}
                                          name='weight'
                                          type="number"
                                          required
                                          /> 
                                      </div>
                                      <div key={x+1} className='flex dynamic-input flex-column'>
                                          <label htmlFor="touch">Touch</label>
                                          <input className='touchinput'
                                          id={`touch${i}`}
                                          name='touch'
                                          type="number"
                                          required
                                          />
                                      </div>
                                  </fieldset>     
                            );
                              
                           })
                       } */}
                       {
                             inputList.map((x, i) => {
                                return (
                                      <fieldset key={i.toString()}>
                                          <header className='flex flex-row justifycontent-spacebetween alignitems-center mb-2'>
                                            <legend >
                                            katcha {i} :    
                                            </legend>
                                            {
                                                i > 0 ?
                                                <div onClick={()=>handleRemove(i)} id={`${i}`} className='remove-input'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#18354A" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <line x1="4" y1="7" x2="20" y2="7" />
                                                    <line x1="10" y1="11" x2="10" y2="17" />
                                                    <line x1="14" y1="11" x2="14" y2="17" />
                                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                                    </svg>
                                                </div> 
                                                :''
                                            }
                                          </header>
                                          <div className='flex dynamic-input flex-column'>
                                              <label htmlFor="weight">Weight</label>
                                              <input className='weightinput'
                                              id={`weight${i}`}
                                              name='weight'
                                              type="number"
                                              value={x.weight}
                                              onChange={e => handleInputChange(e, i)}
                                              required
                                              /> 
                                          </div>
                                          <div  className='flex dynamic-input flex-column mt-2'>
                                              <label htmlFor="touch">Touch</label>
                                              <input className='touchinput'
                                              id={`touch${i}`}
                                              name='touch'
                                              type="number"
                                              value={x.touch}
                                              onChange={e => handleInputChange(e, i)}
                                              required
                                              />
                                          </div>
                                      </fieldset>     
                                );
                                  
                               })
                       }
                              
        </div>
    );
}

export default Katcha;