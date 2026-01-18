type TechsTypes =
  | "javascript"
  | "node"
  | "react"
  | "express"
  | "redux"
  | "java"
  | "springboot";

export interface IProjects {
  id: string;
  name: string;
  text: string;
  repo: string;
  link?: string;
  techs: TechsTypes[];
}

export const projects = [
  {
    id: "1",
    name: "Sistema de Gestión de Turnos Médicos",
    text: "Aplicación web para la gestión de turnos en clínicas y consultorios médicos, con autenticación de usuarios, agenda por profesional y registro de pacientes.",
    repo: "https://github.com/usuario/turnos-medicos",
    link: "https://turnos-medicos.app",
    techs: ["react", "node", "express"],
  },
  {
    id: "2",
    name: "Dashboard de Finanzas Personales",
    text: "Dashboard para el seguimiento de ingresos y gastos, con visualización de métricas financieras y control de accesos por usuario.",
    repo: "https://github.com/usuario/dashboard-finanzas",
    techs: ["react", "redux", "javascript"],
  },
  {
    id: "3",
    name: "API de Autenticación y Usuarios",
    text: "Microservicio REST para registro, autenticación y autorización de usuarios utilizando tokens JWT y arquitectura desacoplada.",
    repo: "https://github.com/usuario/auth-api",
    techs: ["node", "express", "javascript"],
  },
  {
    id: "4",
    name: "Plataforma de Interpretación de Tarot",
    text: "Aplicación web que permite realizar lecturas de tarot con interpretación automática de cartas y gestión de usuarios autenticados.",
    repo: "https://github.com/usuario/tarot-app",
    link: "https://tarot-app.vercel.app",
    techs: ["react", "node", "javascript"],
  },
  {
    id: "5",
    name: "Sistema Backend de Verificación de Identidad",
    text: "Backend desarrollado para la validación de documentos de identidad mediante integración con servicios externos y procesamiento de imágenes.",
    repo: "https://github.com/usuario/verificacion-identidad",
    techs: ["java", "springboot"],
  },
];
