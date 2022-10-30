import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { ITeam } from "./components/TeamList/TeamList";

export async function middleware(request : NextRequest){
    const urlItems = request.nextUrl.pathname.split('/').filter(Boolean)

    if (urlItems[0] === 'teams' && urlItems.length === 2){
        const teamID = urlItems[1]

        const teams: ITeam[] = await fetch(process.env.NEXT_PUBLIC_API_URL + "/teams")
        .then((res) => res.json())
        .then((data : ITeam[]) => data)
        .catch((error) => console.error(error)) as ITeam[];

        if(!teams.some((team) => team.id === Number(teamID))){
            return NextResponse.redirect(new URL('/teams', request.url))
        }
    }
}

export const config = {
    matcher: '/teams/:id*'
}