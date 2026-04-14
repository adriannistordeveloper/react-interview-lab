import type { ComponentType } from "react";
import FetchUsersOnMountWithAPI from "../exercises/Rendering1Exercise";
import Rendering2Exercise from "../exercises/Rendering2Exercise";
import Rendering3Exercise from "../exercises/Rendering3Exercise";
import Rendering4Exercise from "../exercises/Rendering4Exercise";
import Rendering5Exercise from "../exercises/Rendering5Exercise";
import AddUserContainer from "../exercises/Rendering6Exercise";
import Rendering7Exercise from "../exercises/Rendering7Exercise";
import Rendering8Exercise from "../exercises/Rendering8Exercise";
import Rendering9Exercise from "../exercises/Rendering9Exercise";
import Rendering10Hooks from "../exercises/Rendering10Hooks";
import Rendering10HooksEffect from "../exercises/Rendering10HooksEffect";
import Rendering11Pagination from "../exercises/Rendering11Pagination";

export interface Exercise {
  id: string;
  title: string;
  description: string;
  component: ComponentType;
}

export const exercises: Exercise[] = [
  {
    id: "rendering-1",
    title: "FetchUsersOnMountWithAPI",
    description: "with localhost endpoint",
    component: FetchUsersOnMountWithAPI
  },
  {
    id: "rendering-2",
    title: "Rendering Basics",
    description: "Lorem ipsum2",
    component: Rendering2Exercise
  },
  {
    id: "rendering-3",
    title: "Rendering Basics",
    description: "Lorem ipsum3",
    component: Rendering3Exercise
  },
  {
    id: "rendering-4",
    title: "TODO",
    description: "Lorem ipsum3",
    component: Rendering4Exercise
  },
  {
    id: "rendering-5",
    title: "FORM",
    description: "Lorem ipsum3",
    component: Rendering5Exercise
  },
  {
    id: "rendering-6",
    title: "Add User Form",
    description: "Submit a new user to the local API",
    component: AddUserContainer
  },
  {
    id: "rendering-7",
    title: "Pokemon List On Mount",
    description: "Fetch and display Pokemon names on first render",
    component: Rendering7Exercise
  },
  {
    id: "rendering-8",
    title: "Empty Exercise",
    description: "Blank exercise placeholder",
    component: Rendering8Exercise
  },
  {
    id: "rendering-9",
    title: "Empty Exercise 2",
    description: "Blank exercise placeholder 2",
    component: Rendering9Exercise
  },
  {
    id: "rendering-10",
    title: "HOOKS",
    description: "Blank exercise placeholder 2",
    component: Rendering10Hooks
  },
  {
    id: "rendering-11",
    title: "HOOKS EFFECTS",
    description: "Blank exercise placeholder 2",
    component: Rendering10HooksEffect
  },
  {
    id: "rendering-12",
    title: "Pagination 1",
    description: "Blank exercise placeholder 2",
    component: Rendering11Pagination
  }
];