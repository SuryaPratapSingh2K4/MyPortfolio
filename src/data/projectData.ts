import bloodDonation from '../assets/Blood-Donation.mp4'
import tripExpenser from '../assets/Trip-Expenser.mp4'
import megaBlog from '../assets/Mega-Blog.mp4'
import todo from '../assets/TODO.mp4'
import VeridiaHiring from "../assets/Veridia-Hiring.mp4"
import MERNNoteApp from "../assets/MERN-Note-App.mp4"

export interface Project {
    title: string;
    content: string;
    tech: string[];
    repo: string;
    img?: string;
    video?: string;
}

export const projects: Project[] = [
    {
        title: "Veridia Hiring Platform",
        content: "Veridia is a full-stack hiring platform that streamlines recruitment by allowing candidates to apply for jobs and recruiters to manage applications with automated email updates and AWS-based resume uploads.",
        tech: ["React Js","Javascript","REST API","Tailwind CSS","Node Js","Express Js","Mongoose","MongoDB","Nodemailer","AWS S3","React-Router","JWT Auth"],
        repo:"https://github.com/SuryaPratapSingh2K4/Veridia-Hiring-Platform",
        video:VeridiaHiring
    },
    {
        title: "Blood Donation Platform",
        content: "A web app that streamlines donor registration, blood requests, and record management. Enables users to add, update, and delete records with unique IDs for safe and organized data handling.",
        tech: ["React Js","Javascript","REST API","Tailwind CSS","Node Js","Express Js","Mongoose","MongoDB","React-Router","JWT"],
        repo: "https://github.com/SuryaPratapSingh2K4/ReduxFunctionKeepNotes/tree/90678abca1ab89847777a16964c5527efd949e95/Blood-Donation",
        video:bloodDonation
    },
    {
        title: "Notes Application",
        content: "A secure MERN-based Notes App where users can log in, create, update, delete, and pin notes. Features JWT authentication, MongoDB storage, and real-time toast notifications for feedback.",
        tech: ["React Js","Tailwind CSS","Javascript","Node Js","Express Js","Mongoose","Mongo DB","REST API","React-Router","JWT Auth"],
        repo: "https://github.com/SuryaPratapSingh2K4/MERN-Note-App",
        video:MERNNoteApp
    },
    {
        title: "Trip Expenser",
        content: "A smart group expense tracker that lets users split and settle trip costs easily. Built with React and Redux Toolkit, it ensures clear tracking of who owes whom in real time.",
        tech: ["React Js", "Redux Toolkit", "Tailwind CSS", "localStorage","React-Router"],
        repo: "https://github.com/SuryaPratapSingh2K4/ReduxFunctionKeepNotes/tree/master/Trip-Expenser",
        video:tripExpenser
    },
    {
        title: "Mega Blog Platform",
        content: "A modern blogging platform where users can create, edit, and explore posts with tags, filters, and search.",
        tech: ["React Js", "Redux Toolkit", "React-Router", "Tailwind CSS", "localStorage"],
        repo: "https://github.com/SuryaPratapSingh2K4/ReduxFunctionKeepNotes/tree/master/mega-blog",
        video:megaBlog
    },
    {
        title:"To-Do-App",
        content: "A simple and efficient task management app to create, edit, and track daily tasks. Users can mark tasks as complete in a clean, organized interface for better productivity.",
        tech: ["React Js","Tailwind CSS","localStorage"],
        repo: "https://github.com/SuryaPratapSingh2K4/ReactJs/tree/master/todolist",
        video:todo
    }
]