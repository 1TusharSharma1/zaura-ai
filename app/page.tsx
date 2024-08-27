"use client";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import styled from "styled-components";
// import { useLayoutEffect, useState } from "react";
const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(123, 46, 193, 1) 76%,
    rgba(0, 212, 255, 0.9262079831932774) 100%
  );
  // background: linear-gradient(90deg, #7C00FE 0%, #C700FF 50%, #00FFFF 100%);

  //background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  background-size: cover;
  padding: 60px 100px;
  height: 100vh;
  color: white;
`;

const HeroContent = styled.div`
  max-width: 50%;
`;

const Headline = styled.h1`
  font-family: inter;
  font-weight: 900;
  line-height: 1;
  font-size: 4rem;
  margin-bottom: 20px;
  color: white; /* Updated color for better contrast */
  letter-spacing: 1px; /* Added more tracking */
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3); /* Added subtle drop shadow */
`;

const Subheadline = styled.p`
  font-size: 1.25rem;
  margin-bottom: 30px;
  color: #e0e0e0;
`;

const CTAButton = styled.a`
  background-color: #F9E400; 
  color: black;
  padding: 15px 30px;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); 

  &:hover {
    background-color: #ffea85; /* Lightened hover color */
  }
`;

const HeroImage = styled.div`
  max-width: 40%;
`;


export default function HomePage() {
  return (
    <HeroSection>
      <HeroContent>
        <Headline>
          Zaura Helps you in <br />
          <Typewriter
            options={{
              strings: ["Interviews", "Presentations", "Meetings"],
              autoStart: true,
              loop: true,
            }}
          />
        </Headline>
        <Subheadline>
          Get real-time feedback on your confidence, stress, and performance to
          unlock your full potential.
        </Subheadline>
        <CTAButton href="/Playground">Try the Playground</CTAButton>
      </HeroContent>
      <HeroImage>
        {/* To be replaced with a real image later */}
        {/* <Image
          src=""
          alt="Hero Image"
          width={600}
          height={400}
          layout="responsive"
        /> */}
        
      </HeroImage>
    </HeroSection>
  );
}
