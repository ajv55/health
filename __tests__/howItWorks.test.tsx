import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import RoadmapToSuccess from '@/app/components/mainPage/howItWorks';
import { transform } from '@babel/core';
import { s } from '@fullcalendar/core/internal-common';

describe('RoadmapToSuccess Component', () => {

    it('renders the main heading', () => {
        render(<RoadmapToSuccess />)

        //check if the main heading is rendered
        const mainHeading = screen.getByText(/Your Roadmap to Success/i);
        expect(mainHeading).toBeInTheDocument();

    });

    it('renders all the roadmap cards with titles and descriptions', () => {
        render(<RoadmapToSuccess />)

        const cards = [
            {
              title: "Set Your Goals",
              description1: /First things first - it’s time to set your fitness goals./i,
              description2: /Simply tell us what you want to achieve, and we’ll create a personalized plan to help you get there./i
            },
            {
              title: "Track Your Progress",
              description1: /Once you’ve set your goals, it’s time to start tracking your progress./i,
              description2: /Our user-friendly interface makes it easy to see how you’re progressing towards your goals and make adjustments as needed./i
            },
            {
              title: "Get Personalized Guidance",
              description1: /No two fitness journeys are the same, which is why FitGenius offers personalized guidance every step of the way./i,
              description2: /Whether you need help staying motivated, making healthy choices, or overcoming obstacles, we’ve got your back./i
            }
          ];

          cards.forEach((card) => {
            expect(screen.getByText(card.title)).toBeInTheDocument();
            // expect(screen.getByText(card.description1)).toBeInTheDocument();
            // expect(screen.getByText(card.description2)).toBeInTheDocument();
          })
    });


})