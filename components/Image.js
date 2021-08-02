import { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import GlobalContext from "../context/globalContext";

export const Image = ({ src, alt, width, height }) => {
  const [imageType, setImageType] = useState();
  const { isMobile } = useContext(GlobalContext);

  useEffect(() => {
    setImageType(src.split(".").pop());
  }, [src]);

  return (
    <Component>
      <source
        media="(min-width: 1081px)"
        type="image/webp"
        srcSet={`${src}?fm=webp`}
      />
      <source
        media="(max-width: 1080px)"
        type="image/webp"
        srcSet={`${src}?fm=webp&w=1080`}
      />
      <source
        media="(max-width: 828px)"
        type="image/webp"
        srcSet={`${src}?fm=webp&w=828`}
      />
      <source
        media="(max-width: 750px)"
        type="image/webp"
        srcSet={`${src}?fm=webp&w=750`}
      />
      <source
        media="(max-width: 640px)"
        type="image/webp"
        srcSet={`${src}?fm=webp&w=640`}
      />
      {(imageType === "jpg" || imageType === "jpeg") && (
        <>
          <source
            media="(min-width: 1081px)"
            srcSet={`${src}?fm=jpg&fl=progressive`}
          />
          <source
            media="(max-width: 1080px)"
            srcSet={`${src}?fm=jpg&fl=progressive&w=1080`}
          />
          <source
            media="(max-width: 828px)"
            srcSet={`${src}?fm=jpg&fl=progressive&w=828`}
          />
          <source
            media="(max-width: 750px)"
            srcSet={`${src}?fm=jpg&fl=progressive&w=750`}
          />
          <source
            media="(max-width: 640px)"
            srcSet={`${src}?fm=jpg&fl=progressive&w=640`}
          />
        </>
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={isMobile === true ? "lazy" : "auto"}
      />
    </Component>
  );
};

const Component = styled.picture`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: auto;
  }
`;
