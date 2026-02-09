export type TechsTypes =
  | "javascript"
  | "node"
  | "react"
  | "express"
  | "redux"
  | "java"
  | "springboot";

export interface Projects {
  id: string;
  name: string;
  description: string;
  repo: string;
  link?: string;
  techs: TechsTypes[];
}
