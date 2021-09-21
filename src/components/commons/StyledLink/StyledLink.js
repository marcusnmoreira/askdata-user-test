import { Link as ReactRouterDomLink } from "react-router-dom";

export const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};
