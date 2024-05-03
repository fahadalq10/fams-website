import React from 'react'
import './About.css'
import about_img from '../../assets/VIP.png'
import play_icon from '../../assets/play_icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt=""  className='about_img'/>
            <img src={play_icon} alt=""  className='play_icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT FAMS</h3>
            <h2>Where we Innovate Without Boundaries</h2>
            <p>Soft and bio-inspired mechatronic systems could effectively deal with uncertain or constrained environments while maximizing the users’ safety. For example, the development of soft robotic structures faces a number of scientific challenges, including material selection, fabrication techniques, and kinematic simulation. There are currently big knowledge gaps in the fabrication, control, and application of versatile soft robotic platforms.</p>
            <p>The primary goal is to develop interactive robotic systems for industrial and educational applications. The main focuses are surgical, after-surgical rehabilitation, and wearable devices for enhancing accessibility. We also look into the educational aspect of robotic systems for college and K-12 students.</p>
            <p>In pursuit of creating interactive robotic systems tailored for both industrial and educational settings, the emphasis on soft and bio-inspired mechatronic systems stands as a pivotal approach. These systems hold promise in navigating uncertain or constrained environments while prioritizing user safety—a crucial aspect, especially in fields like surgery and rehabilitation. The journey towards realizing these systems is rife with scientific challenges, from selecting appropriate materials to refining fabrication techniques and simulating complex kinematics. At present, significant knowledge gaps persist in crucial areas such as fabrication, control, and the practical application of adaptable soft robotic platforms. By addressing these challenges head-on, we can unlock a realm of possibilities, from innovative surgical tools to wearable devices that foster accessibility and enhance quality of life. Moreover, integrating educational elements into these systems presents an exciting avenue, offering both college and K-12 students a hands-on exploration of robotics, potentially shaping the future of technology and healthcare.</p>
        </div>
    </div>
  )
}

export default About
