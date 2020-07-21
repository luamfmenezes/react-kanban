import { FaTasks } from "react-icons/fa";
import { IoIosCodeWorking } from "react-icons/io";
import { AiOutlineStop } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";
import { uuid } from "uuidv4";

export const defaultLists = [
  {
    title: "Tasks",
    cards: [
      {
        id: uuid(),
        content: "Develop Kanban Front-end",
        label: "#7159c1",
        user: "Luam Menezes",
      },
    ],
  },
  {
    title: "In process",
    cards: [
      {
        id: uuid(),
        content: "Migrate AWS server",
        label: "#ffaa00",
        user: "Luam Menezes",
      },
      {
        id: uuid(),
        content: "Fix cart on Pakked app",
        label: "#77ff",
        user: "Alberto Fernandes",
      },
    ],
  },
  {
    title: "Stoped",
    cards: [],
  },
  {
    title: "Concluded",
    done: true,
    cards: [
      {
        id: uuid(),
        content: "Fix cart on Pakked app",
        label: "#77ff",
        user: "Vitoria Delvik",
      },
    ],
  },
];

export const iconLists = {
  Tasks: FaTasks,
  "In process": IoIosCodeWorking,
  Stoped: AiOutlineStop,
  Concluded: FiCheck,
};
