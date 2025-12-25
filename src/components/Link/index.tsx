import { Link as Anchor } from 'react-router';

type LinkProps = {
    children: React.ReactNode;
} & React.ComponentProps<typeof Anchor>;

export const Link = (
    { children, ...rest }: LinkProps
) => (<Anchor {...rest}>{children}</Anchor>);
