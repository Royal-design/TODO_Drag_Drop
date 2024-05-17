import { Tags } from "../Tags/Tags";
import "./taskcard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

type tagtype = string;
type ItemType = {
  name: string;
  tags: tagtype[];
  id: any;
  handleDelete: any;
  setActiveCard: React.Dispatch<React.SetStateAction<null>>;
};

export const TaskCard = ({
  name,
  tags,
  id,
  handleDelete,
  setActiveCard
}: ItemType) => {
  const content = (
    <div
      className="task-card border-[1px] mt-[1rem]  p-2 mb-1"
      draggable
      onDragStart={() => setActiveCard(id)}
      onDragEnd={() => setActiveCard(null)}
    >
      <h2 className="font-bold mb-[1rem]">{name}</h2>
      <div className="action flex justify-between">
        <div className="tags">
          <Tags tags={tags} />
        </div>
        <button className="btn-remove" onClick={() => handleDelete(id)}>
          <FontAwesomeIcon color="red" icon={faTrash} />
        </button>
      </div>
    </div>
  );
  return content;
};
