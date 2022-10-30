import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";
import { Nav } from "../common/Nav";

interface TProps{
    title: string
    descripcion?: string
}

export const Applicationwrapper:FC <PropsWithChildren<TProps>> = ({title, descripcion, children}) => {
    return (
    <div className="bg-black min-h-screen flex flex-col">
        <Head>
            <title>{title} | UEFA CL Teams</title>
            {descripcion && <meta name="descripcion" content = {descripcion} />}
            <link rel = "icon" href = "/favicon.ico"/>
        </Head>
        <header className="bg-white h-20">
            <Nav/>
        </header>
        <main className="grow flex flex-col text-white">{children}</main>
        <footer className="flex p-6 h-20 text-black bg-white items-center justify-center">
            <a
                href="https://www.linkedin.com/in/miguel-v%C3%A1squez-395129192/"
                target="_blank"
                rel="noopener noreferrer"
        >
            Powered by
            <span className=''>
                Miguel Vasquez | miguel.vasquez3@utp.ac.pa
            </span>
            </a>
        </footer>
    </div>
    );
};

