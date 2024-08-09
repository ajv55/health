import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import FeatureCard from '@/app/components/mainPage/featureCard';

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


})