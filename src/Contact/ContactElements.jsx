import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem;
`;

export const Logo = styled.img`
  width: 200px;
  margin-bottom: 2rem;
`;

export const FormWrap = styled.div`
  width: 100%;
  max-width: 600px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.9);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
`;

export const FormH1 = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 700;
`;

export const FormLabel = styled.label`
  margin-bottom: 0.5rem;
  color: #555;
  font-weight: 600;
`;

export const FormInput = styled.input`
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: none;
  border-radius: 10px;
  background-color: #f0f4f8;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #3498db;
  }
`;

export const FormTextArea = styled.textarea`
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: none;
  border-radius: 10px;
  background-color: #f0f4f8;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #3498db;
  }
`;

export const FormButton = styled.button`
  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ThankYouMessage = styled.div`
  text-align: center;
  font-size: 1.4rem;
  color: #0064e0;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
`;