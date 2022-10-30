import React, { useEffect, useState } from "react";
import Team from "./Team/Team";

export interface ITeam{
  id: number,
  Name: string,
  Country: string | null,
  Ligue: string | null,
  City: string | null,
  Stadium: string | null,
  DT: string | null,
  Captain: string | null,
  "Group": string | null,
  "Position": string | null,
  "Rivals": string | null,
  "UCL Participations": number | null,
  UCL_Trophies: number | null,
  "Local Trophies": number | null,
  "History Top Scorer": string | null,
  "Most Appearances": string | null,
  "Actually Scorer": string | null,
  "Average Age (Team)": number | null,
  "Most Expensive Transfer": string | null,
  "Most Expensive Transfer price": string | null,
  "Buy More Expensive": string | null,
  "Buy More Expensive price": string | null,
  "Shield": string,
  "Stadium_Foto": string
}

interface Props{
    teams: ITeam[],
};

export const TeamsList = ({teams} : Props) => {
    return(
        <div className="flex flex-col justify-center text-white items-center p-6">
        <ul className="w-full grid grid-cols-l md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {teams.map((team) =>(
                <Team key={team.id} team ={team} />
            ))}
        </ul>
    </div>
    ) 
}