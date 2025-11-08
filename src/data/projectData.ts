import bloodDonation from '../assets/Blood-Donation.mp4'
import tripExpenser from '../assets/Trip-Expenser.mp4'
import megaBlog from '../assets/Mega-Blog.mp4'
import todo from '../assets/TODO.mp4'

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
        content: "",
        tech: ["React Js","Javascript","REST API","Tailwind CSS","Node Js","Express Js","Mongoose","MongoDB","Nodemailer","AWS S3","React-Router"],
        repo:"https://github.com/SuryaPratapSingh2K4/Veridia-Hiring-Platform"
    },
    {
        title: "Blood Donation Platform",
        content: "A web app that streamlines donor registration, blood requests, and record management. Enables users to add, update, and delete records with unique IDs for safe and organized data handling.",
        tech: ["React Js","Javascript","REST API","Tailwind CSS","Node Js","Express Js","Mongoose","MongoDB"],
        repo: "https://github.com/SuryaPratapSingh2K4/ReduxFunctionKeepNotes/tree/90678abca1ab89847777a16964c5527efd949e95/Blood-Donation",
        video:bloodDonation
    },
    {
        title: "Notes Application",
        content: "A secure MERN-based Notes App where users can log in, create, update, delete, and pin notes. Features JWT authentication, MongoDB storage, and real-time toast notifications for feedback.",
        tech: ["React Js","Tailwind CSS","Javascript","Node Js","Express Js","Mongoose","Mongo DB","REST API"],
        repo: "https://github.com/SuryaPratapSingh2K4/MERN-Note-App",
        // video:"/assets/"
    },
    {
        title: "Trip Expenser",
        content: "Group-based expense tracker to split and settle shared trip costs.",
        tech: ["React Js", "Redux Toolkit", "Tailwind", "localStorage"],
        repo: "https://github.com/SuryaPratapSingh2K4/ReduxFunctionKeepNotes/tree/master/Trip-Expenser",
        video:tripExpenser
    },
    {
        title: "Mega Blog Platform",
        content: "Blogging app with image uploads, tags, filters, and search functionality.",
        tech: ["React Js", "Redux Toolkit", "React-Router", "Tailwind CSS", "localStorage"],
        repo: "https://github.com/SuryaPratapSingh2K4/ReduxFunctionKeepNotes/tree/master/mega-blog",
        video:megaBlog
    },
    {
        title:"To-Do-App",
        content: "To-Do App is a task management application that helps users organize and prioritize their tasks effectively. Users can create, edit, and delete tasks and mark tasks as complete. All tasks are displayed in a clean and organized layout for easy reading and management.",
        tech: ["React Js","Tailwind CSS","localStorage"],
        repo: "https://github.com/SuryaPratapSingh2K4/ReactJs/tree/master/todolist",
        video:todo
    }
]