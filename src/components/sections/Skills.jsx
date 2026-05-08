import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 60px 30px;
  background: linear-gradient(135deg, rgba(0, 255, 179, 0.02) 0%, transparent 50%, rgba(0, 255, 179, 0.02) 100%);

  @media (max-width: 960px) {
    padding: 40px 20px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  gap: 40px;
  padding: 0 30px;

  @media (max-width: 960px) {
    gap: 30px;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  .gradient {
    background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const SkillsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 30px;
  }
`;

const SkillCard = styled.div`
  background: linear-gradient(135deg, rgba(13, 19, 24, 0.8) 0%, rgba(13, 19, 24, 0.4) 100%);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 255, 179, 0.15);
  border-radius: 16px;
  padding: 32px 24px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 179, 0.5), transparent);
  }

  &:hover {
    transform: translateY(-8px);
    background: linear-gradient(135deg, rgba(13, 19, 24, 0.95) 0%, rgba(13, 19, 24, 0.5) 100%);
    border-color: rgba(0, 255, 179, 0.35);
    box-shadow: 0 12px 48px rgba(0, 255, 179, 0.15);
  }

  @media (max-width: 768px) {
    padding: 20px 16px;
    gap: 14px;
  }
`;

const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, rgba(0, 255, 179, 0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 8px 0;
`;

const SkillBadge = styled.div`
  padding: 10px 16px;
  border-radius: 25px;
  background: linear-gradient(135deg, rgba(0, 255, 179, 0.15) 0%, rgba(0, 255, 179, 0.05) 100%);
  border: 1.5px solid rgba(0, 255, 179, 0.4);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  white-space: nowrap;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  letter-spacing: 0.3px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 25px;
    padding: 1.5px;
    background: linear-gradient(135deg, rgba(0, 255, 179, 0.6), rgba(0, 255, 179, 0.2));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.12) translateY(-3px);
    background: linear-gradient(135deg, rgba(0, 255, 179, 0.25) 0%, rgba(0, 255, 179, 0.1) 100%);
    border-color: rgba(0, 255, 179, 0.7);
    box-shadow: 0 6px 20px rgba(0, 255, 179, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2);
    
    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 14px;
    
    &:hover {
      transform: scale(1.08) translateY(-2px);
    }
  }
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>
          <span className="gradient">Technical</span> Skills
        </Title>

        <SkillsGrid>
          {skills.map((skillCategory, index) => (
            <SkillCard key={`skill-cat-${index}`}>
              <CardTitle>{skillCategory.title}</CardTitle>
              <SkillsContainer>
                {skillCategory.skills.map((skill, idx) => (
                  <SkillBadge key={`skill-${idx}`} title={skill.name}>
                    {skill.name}
                  </SkillBadge>
                ))}
              </SkillsContainer>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Wrapper>
    </Container>
  );
};

export default Skills;
