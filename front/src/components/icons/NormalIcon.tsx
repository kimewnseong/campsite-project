import React from "react";
import styled from "styled-components";

interface Props {
  size?: number;
}

const StyledIcon = styled.svg`
  fill: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
  transition: 0.3s fill;
`;

const NormalIcon = ({ size }: Props) => (
  <StyledIcon width={size} height={size} viewBox="0 0 24 24">
    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 17h-8v-2h8v2zm-7.5-9c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z" />
  </StyledIcon>
);

export default NormalIcon;
