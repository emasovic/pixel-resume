import { ReactNode } from "react";
import "./info.css";

export const Info = ({ children }: { children: ReactNode }) => (
  <div className="info">{children}</div>
);
