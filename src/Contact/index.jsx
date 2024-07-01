import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { Container, Logo, FormWrap, Form, FormH1, FormLabel, FormInput, FormTextArea, FormButton, ThankYouMessage } from './ContactElements';
import logoSvg from '/Images/eloquia_logo.svg';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, setValue } = useForm();
  const [hCaptchaToken, setHCaptchaToken] = useState('');

  const onHCaptchaChange = (token) => {
    setHCaptchaToken(token);
    setValue("h-captcha-response", token);
  };

  const onSubmit = async (data) => {
    if (!hCaptchaToken) {
      alert("Please complete the hCaptcha.");
      return;
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...data,
        access_key: '81f35495-f75f-409b-8904-fe001ff9b7cc',
        _captcha: "true"
      })
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <Container>
      <Logo src={logoSvg} alt="Company Logo" />
      <FormWrap>
        {!submitted ? (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormH1>Contact Us</FormH1>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput type="text" id="name" name="name" required {...register("name")} />
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput type="email" id="email" name="email" required {...register("email")} />
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextArea id="message" name="message" required {...register("message")} />

            {/* Honeypot field */}
            <FormInput type="text" id="honeypot" name="honeypot" style={{ display: 'none' }} {...register("honeypot")} />

            <HCaptcha
              sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
              reCaptchaCompat={false}
              onVerify={onHCaptchaChange}
            />

            <FormButton type="submit">Send Message</FormButton>
          </Form>
        ) : (
          <ThankYouMessage>Thank you for your message. We'll be in touch soon!</ThankYouMessage>
        )}
      </FormWrap>
    </Container>
  );
};

export default Contact;
