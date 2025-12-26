import { Link } from "react-router";

type RouterLinkProps = {
    children: React.ReactNode;
    href: string;
} & React.ComponentProps<"a">;

export const RouterLink = ({ children, href, ...rest }: RouterLinkProps) => (
    <Link to={href} {...rest}>
        {children}
    </Link>
);
