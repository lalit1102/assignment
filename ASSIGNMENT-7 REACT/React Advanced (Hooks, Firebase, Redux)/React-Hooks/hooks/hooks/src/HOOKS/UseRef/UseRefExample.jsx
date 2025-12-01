import React, { useEffect, useRef } from 'react'

const UseRefExample = () => {
  let inp = useRef(null)
  let inp1 = useRef(null)

  const saveData = (e) => {
    e.preventDefault()
  }
  useEffect(()=>{
    inp.current.focus()
  },[])
  return (
    <>

    {/* focus mate useref no use thay che */}
    <div>
      <form action="#" method="post" name='frm' onSubmit={saveData}>

        <label htmlFor="">username:</label>
        <input type="text" name="name" id="name" placeholder='Enter the name' ref={inp}  /><br />
        <br />
        <label htmlFor="">Email</label>
        <input type="text" name="email" id="email" placeholder='enter the Email' ref={inp1} /><br />
        <br />
        <button type='submit'>save</button>
      </form>
    </div>
    </>
  )
}

export default UseRefExample
