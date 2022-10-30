import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { Applicationwrapper } from "../../components/layout/Applicationwrapper";
import { ITeam } from "../../components/TeamList/TeamList";
import Image from 'next/image';

interface TProps{
    team: ITeam
};

const TeamDetailPage: NextPage<TProps> = ({ team}) => {
    console.log(team)
    return <Applicationwrapper title={team.Name}>
        <h1 className="text-center text-2xl">Temporada 2022/2023</h1>
        <div className = 'contenedor'>
            <div className="one">
                <h2 className="text-center">
                {team.Name}
                </h2>
                <Image src={team.Shield}
                width={300}
                height={300} />
            </div>
            <div className="two">
            <p>
            <br /> Informacion del Equipo <br /><br />
                Liga : {team.Ligue}<br />
                Pais : {team.Country}<br />
                Ciudad : {team.City}<br />
                DT : {team.DT}<br />
                Capitan : {team.Captain}<br />
                Edad Promedio de la plantilla : {team["Average Age (Team)"]}<br />
                Grupo : {team.Group}<br />
            </p>
            </div>
            <div className="three">
                <Image src={team.Stadium_Foto}
                width={250}
                height={75}/>
               <p>
               {team.Stadium}
                </p> 
            </div>
        </div>
    </Applicationwrapper>
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/teams/" + context.params?.id
    );
    const team = await res.json();
    return {
        props: {
            team,
        }
    }
};

export default TeamDetailPage