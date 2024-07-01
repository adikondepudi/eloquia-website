import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  height: 100vh;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    height: auto;
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    order: 2;
  }
`;

export const HeroH1 = styled.h1`
  color: #010606;
  font-size: 48px;
  text-align: left;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.2;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  color: #010606;
  font-size: 24px;
  text-align: left;
  max-width: 100%;
  margin-bottom: 32px;
  line-height: 1.4;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const HeroImgWrapper = styled.div`
  flex: 1;
  max-width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-left: 40px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    max-height: 50vh;
    justify-content: center;
    padding-left: 0;
    order: 1;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    max-height: 40vh;
    margin-top: 50px;  // Adjust this value to shift the image down as needed
  }
`;
