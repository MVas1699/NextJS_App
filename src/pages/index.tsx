import React, { NextPage } from 'next' 
import Head from 'next/head'  
import Image from 'next/image'
import { Applicationwrapper } from '../components/layout/Applicationwrapper'

type HomeProps = {
  response : string
}

const Home: NextPage <HomeProps> = ({response}) => {
  return (
        <Applicationwrapper title="Home" descripcion="Home of the UEFA teams website">
          <div className="grow flex items-center justify-center bg-[url('/images/uefachampions.JPG')]">
            <div className="grow bg-blue w-full justify-center items-center flex opacity-80">
              <h1 className="text-3xl font-bold text-white">
                Welcome to the UEFA Champions League | UEFA.com
              </h1>
            </div>
          </div>

        </Applicationwrapper>
  );
};

export default Home
