type TagType = string;
type TagsType = {
  tags: TagType[];
};
export const Tags = ({ tags }: TagsType) => {
  const content = tags.map((tag: any, index: number) => {
    return (
      <button className="border-[1px] mr-2 p-1" key={index}>
        {tag}
      </button>
    );
  });
  return content;
};
