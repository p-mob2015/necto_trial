// Package imports
import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

export const Sidebar = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  flex: 0 0 auto;
  width: ${({ theme }) => theme.consts.sidebarWidth}px;

  @media (max-width: ${({ theme }) => theme.consts.sidebarWidth*2}px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Logo = styled.img`
  display: block;
  width: 50%;
  max-width: ${({ theme }) => theme.consts.logoWidth}px;
  margin-top: ${({ theme }) => theme.consts.logoTop}px;
  filter: brightness(100);
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.consts.sidebarWidth*2}px) {
    margin-bottom: 1rem;
  }
`;

export const Tagline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSize.heading2};
  margin-bottom: ${({ theme }) => theme.consts.taglineBottom}px;
  font-family: Lato;
  font-weight: bold;
  color: #ffffff;
  z-index: 10;

  > img {
    margin: 0 ${({ theme }) => theme.spacing.iconText};
  }
`;
