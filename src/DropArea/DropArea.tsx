import { useState } from "react";
import "./droparea.scss";

export const DropArea = ({ onDrop }: any) => {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <section
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        onDrop(), setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
      className={showDrop ? "drop-area" : "drop-hide"}
    >
      Drop here
    </section>
  );
};
