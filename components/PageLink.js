import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styled from "styled-components";
import gsap from "gsap";

import GlobalContext from "../context/globalContext";

export const PageLink = ({ url, children }) => {
  const router = useRouter();
  const { isMobile } = useContext(GlobalContext);

  const preventDefault = (e) => {
    e.preventDefault();

    if (router.pathname !== url && isMobile === false) {
      gsap
        .timeline()
        .to(".page", {
          duration: 0.6,
          opacity: 0,
          ease: "Power2.easeOut",
        })
        .to(".header", {
          duration: 0.6,
          opacity: 0,
          delay: -0.6,
          ease: "Power2.easeOut",
          onComplete: () => {
            router.push({
              pathname: url,
            });
          },
        });
    }

    if (isMobile === true) {
      router.push({
        pathname: url,
      });
    }
  };

  return (
    <Link
      href={{
        pathname: url,
      }}
      passHref
    >
      <Anchor onClick={preventDefault}>{children}</Anchor>
    </Link>
  );
};

const Anchor = styled.a`
  outline: none;
  border: none;
  color: inherit;
  user-select: none;
`;
