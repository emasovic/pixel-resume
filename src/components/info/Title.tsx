import "./info.css";

interface TitleProps {
  title?: string;
  subtitle?: string;
}

export const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div className="title">
      {title && <h3>{title}</h3>}
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};
