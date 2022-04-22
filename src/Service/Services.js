
import React from 'react'


import styles from './index.module.scss'
function ServicesCom(props) {
    const services = props.data
  return (
    <div>
       
            <div className={styles.productInnerBox}>
              <div className={styles.softwareIcon}>
                <img src={services.image} alt="SoftwareIcon" />
              </div>
              <h3>
                <span>{services.title}</span>
              </h3>
              <div className={styles.softwareText}>
                <span>
                 {services.description}
                </span>
              </div>
            </div>
         
    </div>
  )
}

export default ServicesCom