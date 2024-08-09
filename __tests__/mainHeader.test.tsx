import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from '@/app/components/mainPage/header';

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
  

describe('Header', () => {


    it('render the header on the main page', () => {
        render(<Header />)

        expect(screen.getByRole('heading', {level: 1})).toBeInTheDocument();

        expect(screen.getByRole('paragraph')).toBeInTheDocument();

        expect(screen.getByText(/Get Started!/i));

    })

})