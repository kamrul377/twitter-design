import React, { useState } from 'react'

const skill = ['Android', 'IOS', 'Flutter', 'BlockChain', 'Windows', 'Linux']

const About = () => {

  const [selected, setSelected] = useState([])

  console.log(selected)

  const handleChange = (e) => {
    const item = e.target.value;
    const updatedList = [...selected]

    if (selected.includes(item)) {
      console.log(updatedList, 'all list') 
      updatedList.slice(2,4)
      console.log(updatedList)
    }
    else {
      updatedList.push(item)
    }

    setSelected(updatedList)


  }

  return (
    <div className='m-8'>

      {
        skill.map((item, i) => {
          return <label key={i} className='block m-1'>
            <input type="checkbox" checked={selected.includes(item) ? true : false} name="" id="" onChange={handleChange} value={item} /> <span>{item}</span>
          </label>
        })
      }

    </div>
  )
}

export default About