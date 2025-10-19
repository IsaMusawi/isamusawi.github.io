export interface HomeModel{
    name: String;
    title: String;
    location: string;
    email: string;
    linkedin?: string;
    summary: string;
    skills: string[];
}

export interface ExperienceModel {
    role: string;
    company: string;
    period: string;
    bullets: string[];
}

export interface ProjectsModel {
    name: string;
    stack: string;
    points: string[];
}

export interface EducationModel {
    institution: string;
    degree: string;
    period: string;
}