import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import MissionSection from '@/app/components/mainPage/missionSection';
import { title } from 'process';


describe('MissionSection Component', () => {

    it('render the main heading and mission statement', () => {
        render(<MissionSection />)

        //check if the mission statement heading is rendered
        const mainHeading = screen.getByRole('heading', {name: /Our Mission/i})
        expect(mainHeading).toBeInTheDocument();

        //check if the mission statement paragraph is rendered
        const missionStatement = screen.getByText(/At WeightTrack, our mission is crystal clear/i)
        expect(missionStatement).toBeInTheDocument();
    })

    it('renders all mission cards with correct titles', () => {
        render(<MissionSection />)

        const titles = ["Empowerment", "Inclusivity", "Science-Based Approach", "Personalization"];

        titles.forEach((title) => {
            expect(screen.getByText(title)).toBeInTheDocument();
        })
    });

    it('renders the correct decription', () => {
        render(<MissionSection />)

        const titles = ["Empowerment", "Inclusivity", "Science-Based Approach", "Personalization"];
        const descriptions = [
        "We believe in empowering individuals with the knowledge, tools, and support they need to make informed decisions about their health and wellness.",
        "We're committed to creating an inclusive and welcoming environment where everyone feels valued, respected, and supported on their journey.",
        "Our approach is grounded in science, using evidence-based strategies to guide our recommendations and ensure the best possible outcomes.",
        "We understand that every individual is unique, which is why we offer personalized support tailored to your specific needs, preferences, and goals."
        ];

        titles.forEach((title, index) => {
            const cardTitle = screen.getByText(title);

            //Hover over the title
            fireEvent.mouseOver(cardTitle);

            //check if the description is now visible
            const description = screen.getByText(descriptions[index]);
            expect(description).toBeInTheDocument();
            
            //hover away to ensure the description disappears 
            fireEvent.mouseOut(cardTitle)
        })

    })

})