import { Doc } from "../types";

const MONTHS = [
  undefined,
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const getDate = (date?: string) => {
  const d = date ? new Date(date) : new Date();

  return `${MONTHS[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`;
};

const getItem = (item: string) => {
  const result = localStorage.getItem(item);

  return result ? JSON.parse(result) : null;
};

const setItem = (key: string, value: string | Doc[] | Doc) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export { getDate, setItem, getItem };
