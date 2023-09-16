import React, { useEffect, useState } from 'react'

const Loading = ({onLoadingComplete}) => {

  const [loadingScreen, setLoadingScreen] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoadingScreen(false)
      onLoadingComplete()
    }, 2500);
  }, []) // IMPORTANTE LAS DEPENDENCIAS VACIAS !important;

  return (
    <div className='loadingScreen'>
      {loadingScreen && 
      <div className='animationContainer'>
        <section className="icon-list">
          <i className="nes-pokeball loadingScreenIcon"></i>
        </section>
      </div>
      }
    </div>
  )
}

export default Loading



