import React, { GetStaticProps, NextPage } from 'next' 
import Head from 'next/head'  
import Image from 'next/image'
import { Applicationwrapper } from '../../components/layout/Applicationwrapper'
import { ITeam, TeamsList } from '../../components/TeamList/TeamList'

type TProps = {
  teams: ITeam[]
}

const Teams: NextPage <TProps> = ({teams}) => {
  return (
        <Applicationwrapper title="UEFA Champions League" descripcion="Teams of UEFA Champions League UEFA website">
            <h1 className="text-2xl font-bold  text-white">
               Equipos
            </h1>
            <TeamsList teams={teams}/>
        </Applicationwrapper>
  );
};

export default Teams

export const getStaticProps : GetStaticProps = async (context) => {

    const teams = await fetch(process.env.NEXT_PUBLIC_API_URL + "/teams")
    .then((res) => res.json())
    .then((data : ITeam[]) => data)
    .catch((error) => console.error(error));

    console.log(teams)

    return {
      props: {
        teams
      },
      //regeneración de las páginas estáticas
      revalidate : 10
    }
}
