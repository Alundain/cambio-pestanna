import React, { useState } from 'react';
import './Pestanna.css';

const Pestanna = (props) => {
    const [tabs, setTabs] = useState([{
        content: 'Soy la pestaña número uno',
        title: 'Pestaña 1',
        state: '',
    },
    {
        content: 'Soy la pestaña número dos',
        title: 'Pestaña 2',
        state: 'active'

    },
    {
        content: 'Soy la pestaña número tres',
        title: 'Pestaña 3',
        state: ''

    }]);

    const changeActive=(item,i)=>{

        let newTabs = tabs.map(tab => {
            
            tab.title === tabs[i].title ? 
            tab.state = 'active' : tab.state = '';
            return tab;
        });

        setTabs(newTabs);

    }   
    

    return (
        <div className='tabcontainer'>

            <div className="titles">
            {tabs.map((item, i) =>
                <a key={i} className={item.state} onClick={() => changeActive(item, i)} > {item.title} </a>
                )}
            </div>
            <div className="content">
                {tabs.filter(item=>item.state==='active').map((item,i)=><p key={i}> {item.content} </p>)}
               
            </div>

        </div>
    );
}

export default Pestanna
