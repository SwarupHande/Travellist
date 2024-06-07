import React, { useState } from 'react'

const Header = ({onAddItem}) => {
  const [desc,setDesc] = useState('');
  const [qty,setQty] = useState(1);
  // const [items,setItems] = useState([]);
  // const handleAddItems = (item) =>{
  //   setItems((items)=>([...items,item]));
  // }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!desc) return;
    const newItem = {desc,qty,packed:false,id:Date.now()};
    onAddItem(newItem);
    setDesc('');
    setQty(1);
  }
  return (
    <div>
        <form action="submit" className='add-form' onSubmit={handleSubmit}>
            <h3> What do you need for your 😍 trip? </h3>
            <select value={qty} onChange={(e)=>setQty(Number(e.target.value))}>
              {Array.from({length:20},(_,i)=>i+1).map((num)=><option key={num} value={num}>{num}</option> )}
            </select>
            <input type="text" placeholder='Items' value={desc} onChange={(e)=>setDesc(e.target.value)}/>
            <button>Add</button>
        </form>
    </div>
  )
}

export default Header