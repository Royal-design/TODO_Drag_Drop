import { DropArea } from "../DropArea/DropArea";
import { TaskCard } from "../TaskCard/TaskCard";
import React from "react";
type tag = string;
type ItemType = {
  name: string;
  tags: tag[];
  status: string;
  id: number;
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
  setActiveCard: React.Dispatch<React.SetStateAction<null>>;
  activeCard: null;
};
export const TaskColumn = ({
  state,
  setState,
  setActiveCard,
  activeCard
}: StateType) => {
  const handleDelete = (id: any) => {
    const newState = state.filter((item, index) => index !== id);

    localStorage.setItem("updateItem", JSON.stringify(newState));
    setState(newState);
  };

  const onDrop = (status: string, position: number) => {
    console.log(
      `${activeCard} is going to be placed into ${status} and at the position ${position}`
    );

    if (activeCard === null || activeCard === undefined) return;
    const taskToMove = state[activeCard];
    console.log(taskToMove);

    const updatedTasks = state.filter((_, index) => index !== activeCard);
    console.log(updatedTasks);

    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status
    });
    console.log(updatedTasks);

    setState(updatedTasks);
  };
  const content = (
    <div className="task-column flex justify-around mt-[1rem]">
      <div className="task-todo">
        <h1>🎯 To do</h1>
        <DropArea onDrop={() => onDrop("To do", 0)} />

        {state.map((task, index) => {
          if (task.status === "To do") {
            return (
              <React.Fragment key={task.id}>
                <TaskCard
                  name={task.name}
                  tags={task.tags}
                  handleDelete={handleDelete}
                  id={index}
                  setActiveCard={setActiveCard}
                />
                <DropArea onDrop={() => onDrop(task.status, index + 1)} />
              </React.Fragment>
            );
          }
        })}
      </div>
      <div className="task-doing">
        <h1>🌟 Doing</h1>
        <DropArea onDrop={() => onDrop("Doing", 0)} />

        {state.map((task, index) => {
          if (task.status === "Doing") {
            return (
              <React.Fragment key={task.id}>
                <TaskCard
                  name={task.name}
                  tags={task.tags}
                  handleDelete={handleDelete}
                  id={index}
                  setActiveCard={setActiveCard}
                />
                <DropArea onDrop={() => onDrop(task.status, index + 1)} />
              </React.Fragment>
            );
          }
        })}
      </div>
      <div className="task-done">
        <h1>✅ Done</h1>
        <DropArea onDrop={() => onDrop("Done", 0)} />

        {state.map((task, index) => {
          if (task.status === "Done") {
            return (
              <React.Fragment key={task.id}>
                <TaskCard
                  name={task.name}
                  tags={task.tags}
                  handleDelete={handleDelete}
                  id={index}
                  setActiveCard={setActiveCard}
                />
                <DropArea onDrop={() => onDrop(task.status, index + 1)} />
              </React.Fragment>
            );
          }
        })}
      </div>
    </div>
  );
  return content;
};
