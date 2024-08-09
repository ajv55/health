import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Resource from '@/app/components/mainPage/resource';


describe('Resource Component', () => {


    it('renders resource section with correct headings and links', () => {
        render(<Resource />);
    
        // Check for section heading
        expect(screen.getByText('Explore Our Resources')).toBeInTheDocument();
    
        // Check for card headings
        expect(screen.getByText('5 Essential Exercises for Beginners')).toBeInTheDocument();
        expect(screen.getByText('The Ultimate Nutrition Guide')).toBeInTheDocument();
        expect(screen.getByText('10 Wellness Tips for a Balanced Life')).toBeInTheDocument();
    
        // Check for links
        expect(screen.getByText('Read Article')).toHaveAttribute('href', '/essential');
        expect(screen.getByText('Guide')).toHaveAttribute('href', '/fitness');
        expect(screen.getByText('Read Tips')).toHaveAttribute('href', '/health');
      });


})