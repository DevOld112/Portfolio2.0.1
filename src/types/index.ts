import { z } from 'zod'



/* Portfolio*/

export interface Work {
    year: string
    position: string
    company: string
    location: string
    responsibilities: string[]
    stack: string[]
}

export interface Projects {
    title: string
    description: string
    features: string[]
    repository: string
    route: string
    routeName: string
    image: string[]
    detail: string
}

export interface Perfil {
    name: string
    title: string
    location: string
    aboutMe: String
}

export interface Certificates{
    certificateName: string
    link: string
}

export interface Curses {
    curseName: string
    plataform: string
}