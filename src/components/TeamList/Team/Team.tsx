import Link from "next/link";
import React, { FC } from "react";
import { ITeam } from "../TeamList";
import Image from 'next/image';

interface TProps {
    team: ITeam
}

const Team: FC<TProps> = ( {team} ) => {
    return(
        <li>
            <Link href={`/teams/${team.id}`}>
                <Image 
                className="cursor-pointer" 
                src={team.Shield}
                alt={`${team.Name} Nombre`}
                width={700}
                height={700}/>
            </Link>
            <strong>{team.Name}</strong>
        </li>
    );
};

export default Team