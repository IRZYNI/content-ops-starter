import NextLink from 'next/link';

interface LinkProps {
  children: React.ReactNode;
  href: string;
  // Add other props as needed, or use 'any' for others
}

export default function Link({ children, href, ...other }: LinkProps) {
  // Pass Any internal link to Next.js Link, for anything else, use <a> tag
  const internal = /^\/(?!\/)/.test(href);
  if (internal) {
    return (
      <NextLink href={href} {...other}>
        {children}
      </NextLink>
    );
  } else {
    return (
      <a href={href} {...other}>
        {children}
      </a>
    );
  }
}
