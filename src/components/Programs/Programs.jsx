import React from 'react'
import './Programs.css'
import program_1 from '../../assets/VIP.png'
import program_2 from '../../assets/VIP.png'
import program_3 from '../../assets/VIP.png'
import programicon_1 from '../../assets/programicon_1.png'
import programicon_2 from '../../assets/programicon_2.png'
import programicon_3 from '../../assets/programicon_3.png'



const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
            <img src={programicon_1} alt="" />
            <p>Hardware</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            <img src={programicon_2} alt="" />
            <p>Software</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
            <img src={programicon_3} alt="" />
            <p>QC</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
