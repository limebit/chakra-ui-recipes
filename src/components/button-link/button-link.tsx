import { Link, Button } from "@chakra-ui/core";
import React from "react";

interface ButtonLinkProps {
  title: string;
  href: string;
}
export const ButtonLink = ({ href, title }: ButtonLinkProps): JSX.Element => {
  return (
    <Link _hover={undefined} href={href} data-testid="button-link-test">
      <Button variant="solid" colorScheme="blue">
        {title}
      </Button>
    </Link>
  );
};
