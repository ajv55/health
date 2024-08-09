import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/';
import WeightLossSuccess from '@/app/components/mainPage/weightLoss';

beforeAll(() => {
    class IntersectionObserveMock {
        observe = jest.fn();
        unobserve = jest.fn();
        disconnect = jest.fn()
        takeRecords = jest.fn();
        constructor() {}
    }

    global.IntersectionObserver = IntersectionObserveMock as any
})


describe('WeightLossSuccess Component', () => {

    it('renders the main heading', () => {
      render(<WeightLossSuccess />);
      const mainHeading = screen.getByText(/Unlocking Your Weight Loss Success/i);
      expect(mainHeading).toBeInTheDocument();
    });
  
    it('renders the introduction paragraph', () => {
      render(<WeightLossSuccess />);
      const introParagraph = screen.getByText(/Discover the effective strategies and personalized guidance/i);
      expect(introParagraph).toBeInTheDocument();
    });
  
    it('renders all feature cards', () => {
      render(<WeightLossSuccess />);
      
      const features = [
        'Science-Backed Approach',
        'Personalized Experience',
        'Comprehensive Support',
        'User-Friendly Interface',
        'Positive Results'
      ];
  
      features.forEach((feature) => {
        expect(screen.getByText(feature)).toBeInTheDocument();
      });
    });
  
  });