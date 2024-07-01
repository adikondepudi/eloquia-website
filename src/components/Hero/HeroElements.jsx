import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const HeroContent = styled.div`
  flex: 1;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const HeroH1 = styled.h1`
  color: #010606;
  font-size: 48px;
  text-align: left;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.2;
`;

export const HeroP = styled.p`
  color: #010606;
  font-size: 24px;
  text-align: left;
  max-width: 100%;
  margin-bottom: 32px;
  line-height: 1.4;
`;

export const HeroImgWrapper = styled.div`
  flex: 1;
  max-width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-left: 40px;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
`;