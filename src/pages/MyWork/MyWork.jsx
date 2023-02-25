import React from 'react'
import { WorkList } from '../../components/mywork-components/index';
import "./style.css";


const MyWork = () => {
  return (
    <div className="myWorkContainer">
      <div className="myWorkFirst">
        <h1>
          Hello
        </h1>
        <h2>You can find a taste of my work</h2>
      </div>
      <div className='content-container-mywork'>
        <WorkList />
      </div>
    </div>
  )
}

export default MyWork
