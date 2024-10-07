import type { Work, Projects, Perfil, Certificates, Curses } from '../../types/index'

export const works: Work[] = [
    {
        "year": "ago. 2024 - Presente",
        "position": "Programador Front-End",
        "company": "Autónomo",
        "location": "En remoto",
        "responsibilities": [
            "Desarrollo de Landing Pages para diversos clientes.",
            "Desarrollo de una aplicación de sorteos, gestionando la lógica de backend y la interfaz de usuario.",
            "Desarrollo de una aplicación de chatbots, integrando servicios de chatbot con tecnologías web."
        ],
        "stack": ['vuejs', 'node-js', 'react', 'github']
    },
    {
        "year": "mar. 2024 - ago. 2024",
        "position": "Desarrollador de Full-Stack",
        "company": "Web Sourcing",
        "location": "En remoto",
        "responsibilities": [
            "Implementación de la interfaz de usuario utilizando Vue.js y Composition API para crear componentes reutilizables.",
            "Colaboración con el equipo backend para integrar chatbots mediante API REST y WebSockets, permitiendo comunicación en tiempo real.",
            "Optimización del rendimiento de la aplicación mediante técnicas como lazy loading y code splitting.",
            "Manejo del estado global con Pinia, asegurando actualizaciones dinámicas en la interfaz.",
            "Mejora de la experiencia de usuario (UX) utilizando animaciones y transiciones con AOS y otras bibliotecas de animación.",
            "Creación y validación de formularios interactivos con FormKit.",
            "Manejo de notificaciones y alertas personalizadas para mejorar la interacción con el chatbot.",
            "Desarrollo de API REST para el backend, gestionando la lógica del servidor y conectividad con bases de datos.",
            "Implementación de autenticación y autorización de usuarios utilizando JWT y control de acceso basado en roles.",
            "Gestión de bases de datos MongoDB y PostgreSQL para el almacenamiento eficiente de datos.",
            "Despliegue de servidores en entornos de producción utilizando Docker y CI/CD pipelines."
        ],
        "stack": ['vuejs', 'node-js', 'github']
    },
    {
        "year": "sept. 2023 - mar. 2024",
        "position": "Desarrollador de Front-End",
        "company": "Web Sourcing",
        "location": "En remoto",
        "responsibilities": [
            "Implementación de la interfaz de usuario utilizando Vue.js y Composition API para crear componentes reutilizables.",
            "Colaboración con el equipo backend para integrar chatbots mediante API REST y WebSockets, permitiendo comunicación en tiempo real.",
            "Optimización del rendimiento de la aplicación mediante técnicas como lazy loading y code splitting.",
            "Manejo del estado global con Pinia, asegurando actualizaciones dinámicas en la interfaz.",
            "Mejora de la experiencia de usuario (UX) utilizando animaciones y transiciones con AOS y otras bibliotecas de animación.",
            "Creación y validación de formularios interactivos con FormKit.",
            "Manejo de notificaciones y alertas personalizadas para mejorar la interacción con el chatbot."
        ],
        "stack": ['vuejs', 'node-js', 'github']
    }
]

export const projects: Projects[] = [
    {
        "title": "UpTask",
        "description": "Una aplicacion de Blog desarrollada con MERN stack",
        "features": [
        "Desarrollado usando React y Node.js + TypeScript",
        "Aplicacion para Gestion de Proyectos"
        ],
        "repository": "https://github.com/DevOld112/upTask",
        "route":"up-task",
        "routeName":"uptask",
        "detail": "UpTask es una aplicación web diseñada para la gestión eficiente de proyectos y tareas en equipo. Permite a los usuarios organizar proyectos, asignar tareas y hacer un seguimiento del progreso de cada una. Con una interfaz intuitiva y funcionalidades clave, UpTask busca optimizar la productividad tanto para individuos como para equipos.",
        "image":[
            "1",
            "2",
            "3"
        ]
    },
    {
        "title": "Sistema de Gestión de Rifas",
        "description": "Aplicacion de Sorteos y Rifas",
        "features": [
        "Developed with Vue.js and Node.js",
        "Real-time updates for active raffles"
        ],
        "repository": "https://github.com/DevOld112/raffle-frontend",
        "route":"raffle",
        "routeName":"raffle",
        "detail":"Este sistema está diseñado para gestionar rifas de manera automatizada y eficiente. Permite la creación de rifas, la venta de boletos, y la selección aleatoria de ganadores. Está pensado para pequeños negocios o individuos que desean organizar rifas de forma profesional y transparente, con un enfoque especial en la facilidad de uso y la transparencia.",
        "image":[
            "1",
            "2",
            "3"
        ]
    },

]

export const perfil: Perfil = 
    {
        "name":"Wilmer Lopez",
        "title": "Front-end Developer",
        "location":"Lima, Peru",
        "aboutMe":"Soy un desarrollador autodidacta apasionado por la tecnología, especializado en el stack MEVN (MongoDB, Express, Vue.js, Node.js), lo que me permite crear aplicaciones web robustas y escalables. A lo largo de mi carrera, he adquirido conocimientos en herramientas clave como JavaScript, TailwindCSS, React, SQL, y MongoDB, entre otras. Además, he trabajado en proyectos como landing pages para clientes, sistemas de gestión de rifas y chatbots, destacándome por mi capacidad para abordar desafíos técnicos complejos y encontrar soluciones eficientes. Tambien tengo conocimientos en el stack MERN, PERN y PEVN"
    }

export const certificates: Certificates[] = [
    {
        "certificateName": 'Junior JavaScript Developer - certificates.dev',
        "link": "https://certificates.dev/javascript/certificates/9d1c0e61-2559-4b66-962d-df00873dddc6/share"
    },
    {
        "certificateName": 'Javascript Algorithms And Data Structures',
        "link": 'https://www.freecodecamp.org/espanol/certification/DevOld112/javascript-algorithms-and-data-structures'
    },
    {
        "certificateName": 'Back End Development and APIs',
        "link": 'https://www.freecodecamp.org/certification/DevOld112/back-end-development-and-apis'
    },
    {
        "certificateName": 'SQL (Basic) Certificate',
        "link": 'https://www.hackerrank.com/certificates/d4aab6831982'
    }
]

export const curses: Curses[] = [
    {
        "curseName": "Vue.js 3 - La Guía Completa",
        "plataform": "Udemy"
    },
    {
        "curseName": "React + Typescript",
        "plataform": "Udemy"
    },
    {
        "curseName": "Nodejs - Desarrollo Web, MCV, REST API",
        "plataform": "Udemy"
    },
    {
        "curseName": "TypeScript - Guia Completa",
        "plataform" : "Udemy"
    }
]
