import "./info.css";

interface ListProps {
  items: string[];
}

export const List = ({
  items: items,
}: ListProps) => {
  return (
    <ul className="list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

