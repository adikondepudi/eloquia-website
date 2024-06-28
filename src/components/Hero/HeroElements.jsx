import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const HeroContent = styled.div`
  flex: 1;
  max-width: 50%;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeroH1 = styled.h1`
  color: #010606;
  font-size: 48px;
  text-align: left;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #010606;
  font-size: 24px;
  text-align: left;
  max-width: 100%;
`;

export const HeroImgWrapper = styled.div`
  flex: 1;
  max-width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
`;