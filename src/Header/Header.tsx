import { useEffect, useState } from "react";
import "./header.scss";
type tag = string;
type ItemType = {
  name: string;
  tags: tag[];
  id: number;
  status: string;
};
type StateType = {
  state: ItemType[];
  setState: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        tags: string[];
        id: number;
        status: string;
      }[]
    >
  >;
};

export const Header = ({ state, setState }: StateType) => {
  const [input, setInput] = useState("");
  const [tag, setTag] = useState([]);
  const [status, setStatus] = useState("To do");
  const [check, setCheck] = useState(false);

  const addTaskClick = () => {
    console.log(check);
    setCheck(false);
    const id = state.length ? state[state.length - 1].id + 1 : 1;
    const newItem = {
      name: input,
      tags: tag,
      id: id,
      status: status
    };

    setState([...state, newItem]);

    const updateItem = [...state, newItem];
    localStorage.setItem("updateItem", JSON.stringify(updateItem));

    setInput("");
    setTag([]);
  };

  useEffect(() => {
    const updateItems = JSON.parse(localStorage.getItem("updateItem") || "[]");
    setState(updateItems);
  }, []);
  const setTagClick = (e: any) => {
    const tag: any = e.target.value;

    if (e.target.checked) {
      setCheck(true);
      setTag((prev: tag[]): any => [...prev, tag]);
    } else if ((e.target.checked = false)) {
      setCheck(false);
      setTag((prev: tag[]): any => [...prev, []]);
    }
  };

  const content = (
    <header className="header pt-[1rem] flex items-center flex-col justify-center">
      <input
        type="text"
        className="header-input p-[6px] w-[30rem] border-2 rounded"
        placeholder="Enter your task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="action mt-4 flex items-center w-[31rem] justify-between">
        <div className="tag flex ">
          <div className="tag-group">
            <input
              type="checkbox"
              value="HTML"
              id="tag1"
              className="checkbox"
              onChange={setTagClick}
            />
            <label htmlFor="tag1" className={`${check ? "tag-label" : null}`}>
              HTML
            </label>
          </div>
          <div className="tag-group">
            <input
              type="checkbox"
              value="CSS"
              id="tag2"
              className="checkbox"
              onChange={setTagClick}
            />
            <label htmlFor="tag2" className={`${check ? "tag-label" : null}`}>
              CSS
            </label>
          </div>
          <div className="tag-group">
            <input
              type="checkbox"
              value="Javascript"
              id="tag3"
              className="checkbox"
              onChange={setTagClick}
            />
            <label htmlFor="tag3" className={`${check ? "tag-label" : null}`}>
              Javascript
            </label>
          </div>
          <div className="tag-group">
            <input
              type="checkbox"
              value="React"
              id="tag4"
              onChange={setTagClick}
              className="checkbox"
            />
            <label htmlFor="tag4" className={`${check ? "tag-label" : null}`}>
              React
            </label>
          </div>
        </div>
        <div className="action-todo">
          <select
            className="select-option border-[1px] rounded mr-[1rem] p-[2px]"
            name="status"
            id="status"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="To do">To do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
          <button
            className="btn-add bg-purple-600 text-white rounded p-[2px]"
            onClick={addTaskClick}
          >
            + Add Task
          </button>
        </div>
      </div>
    </header>
  );
  return content;
};
