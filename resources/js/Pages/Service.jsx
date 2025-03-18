import React, { useState } from 'react'
import Header from './Header'
import Fotter from './Fotter'
import { usePage } from '@inertiajs/react';
import { LoginContext } from './useContext/LoginUseCon';
const Service = () => {
  const { session, flash } = usePage().props;
  const [loginPage, setloginPage] = useState(true);

  return (
    <>
      <LoginContext.Provider value={{ loginPage, setloginPage }}>

        <div>
          <Header data={session} />
          <Fotter />
        </div>
      </LoginContext.Provider>

    </>
  )
}

export default Service