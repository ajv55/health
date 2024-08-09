import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import FeatureCard from '@/app/components/mainPage/featureCard';
import Resource from '@/app/components/mainPage/resource';

beforeAll(() => {
    class IntersectionObserverMock {
      observe = jest.fn();
      unobserve = jest.fn();
      disconnect = jest.fn();
      takeRecords = jest.fn();
      constructor() {}
    }
  
    global.IntersectionObserver = IntersectionObserverMock as any;
  });
  

describe('Feature Card Component', () => {

    it('renders a feature section heading and check for beginning for the p tag', () => {
        render(<FeatureCard />);

        expect(screen.getByText(/Features/i)).toBeInTheDocument();

        expect(screen.getByText(/Achieve Your Fitness Goals/i)).toBeInTheDocument();
    })

    it('renders the feature section cards', () => {
        render(<FeatureCard />);

        expect(screen.getByRole('heading', {name: /Precision Calorie Tracking/i})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: /Customized Workout Plans/i})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: /Expert Nutrition Guidance/i})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: /Progress Tracking and Analytics/i})).toBeInTheDocument();

        expect(screen.getByText(/intuitive interface/i)).toBeInTheDocument();
        expect(screen.getByText(/personalized calorie goals/i)).toBeInTheDocument();
        expect(screen.getByText(/maximum results/i)).toBeInTheDocument();   
    })

    it('applies hover effects correctly', async () => {
      render(<Resource />);
  
      // Get card elements
      const cards = screen.getAllByTestId('article'); // Assuming the card has a role 'article'
  
      cards.forEach(async (card) => {
        // Check initial style
        expect(card).toHaveClass('shadow-md');
  
        // Simulate hover
        fireEvent.mouseOver(card);
  
        // Check if hover effect is applied
        await waitFor(() => {
          expect(card).toHaveClass('hover:shadow-indigo-600');
        });

        fireEvent.mouseOut(card);

        expect(card).toHaveClass('shadow-md')
      });
    });


})