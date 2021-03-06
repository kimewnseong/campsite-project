import styled, { css } from "styled-components";
import { NextArrow, PrevArrow } from "@organisms/CardSlider/arrow";

export const Wrap = styled.div`
  overflow: hidden;
  & > div + div {
    margin-top: 20px;
  }
`;
export const Inner = styled.div`
  position: relative;
  .paging_items {
    filter: grayscale(1);
    &:hover {
      filter: none;
    }
  }
  .slick-current .paging_items {
    filter: none;
  }
`;
export const defaultItemStyle = css`
  width: 50%;

  img {
    height: 100%;
    vertical-align: top;
  }
`;
export const MainSlickItems = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;

  ${defaultItemStyle};

  img {
    max-width: 600px;
    max-height: 500px;
    object-fit: contain;
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    img {
      /* max-width: 70%; */
      max-height: 70%;

      object-fit: contain;
    }
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    img {
      max-width: 80%;
      max-height: 60%

      object-fit: contain;
    }
  }

   @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    img {
      max-width: 95%;
      max-height: 60%

      object-fit: contain;
    }
  }
`;

export const defaultButtonStyle = css`
  position: absolute;
  top: 50%;
  padding: 0;
  width: 30px;
  height: 30px;
  line-height: 1;
  border: none;
  border-radius: 50%;
  background: none;
  outline: none;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);

  & > svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${({ theme }) => theme.BP.MOBILE}) {
    display: none;
  }
`;
export const PrevButton = styled.button`
  ${defaultButtonStyle};
  left: 0;
`;
export const NextButton = styled.button`
  ${defaultButtonStyle};
  right: 0;
`;
export const defaultIconStyle = css`
  font-size: 22px;
  color: #dedede;
  &:focus,
  &:hover {
    color: #666;
  }
`;
export const PrevIcon = styled(NextArrow)`
  ${defaultIconStyle};
`;
export const NextIcon = styled(PrevArrow)`
  ${defaultIconStyle};
`;
