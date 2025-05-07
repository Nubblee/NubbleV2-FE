import Link, { LinkProps } from "next/link";

const AuthLink = ({
  children,
  ...props
}: { children: React.ReactNode } & LinkProps) => {
  return (
    <Link
      className="hover:text-green-dark transition duration-100 ease-in-out hover:font-semibold"
      {...props}
    >
      {children}
    </Link>
  );
};

export default AuthLink;
