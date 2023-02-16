import React from 'react'
import { WorkList } from '../components/withContent/WorkList';
import "./styles/MyWork.css";


export const MyWork = () => {
  return (
    <div className="myWorkContainer">
      <div className="myWorkFirst">
        <h1>
          <mark>Hello</mark>
        </h1>
        <h2>You can find a taste of my work</h2>
      </div>
      <div className='content-container-mywork'>
        <WorkList />
      </div>
    </div>
  )
}
