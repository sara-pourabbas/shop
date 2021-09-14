import { ReactNode } from "react";
import "./card.scss";
interface LayoutProps {
  customStyle?: string;
  children?: ReactNode;
}
export const Card = ({ customStyle, children }: LayoutProps) => {
  return (
    <>
      <div className={` custom-card ${customStyle} `}> {children}</div>
    </>
  );
};
