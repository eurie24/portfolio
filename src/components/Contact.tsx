import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import IconWrapper from './IconWrapper';

const ContactSection = styled.section`
  padding: 8rem 2rem;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--accent);
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid var(--border);
  border-radius: 4px;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--accent);
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(10, 61, 98, 0.2);
  }
`;

const ContactInfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: var(--accent);
  margin-right: 1rem;
`;

const ContactText = styled.div``;

const ContactTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ContactValue = styled.p`
  font-size: 1rem;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  font-size: 1.5rem;
  color: var(--text-primary);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent);
  }
`;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send email or API call)
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    // Show success message or notification
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <TitleContainer>
          <SectionTitle
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            Contact Me
          </SectionTitle>
        </TitleContainer>
        
        <ContactContent>
          <ContactInfo>
            <ContactInfoItem
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variants={fadeInUp}
            >
              <ContactIcon>
                <IconWrapper icon={FaEnvelope} />
              </ContactIcon>
              <ContactText>
                <ContactTitle>Email</ContactTitle>
                <ContactValue>john.andalajao@example.com</ContactValue>
              </ContactText>
            </ContactInfoItem>
            
            <ContactInfoItem
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={fadeInUp}
            >
              <ContactIcon>
                <IconWrapper icon={FaPhone} />
              </ContactIcon>
              <ContactText>
                <ContactTitle>Phone</ContactTitle>
                <ContactValue>+63 912 345 6789</ContactValue>
              </ContactText>
            </ContactInfoItem>
            
            <ContactInfoItem
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeInUp}
            >
              <ContactIcon>
                <IconWrapper icon={FaMapMarkerAlt} />
              </ContactIcon>
              <ContactText>
                <ContactTitle>Location</ContactTitle>
                <ContactValue>Manila, Philippines</ContactValue>
              </ContactText>
            </ContactInfoItem>
            
            <SocialLinks
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={fadeInUp}
            >
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <IconWrapper icon={FaGithub} />
              </SocialLink>
              <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                <IconWrapper icon={FaLinkedin} />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          
          <ContactForm
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 