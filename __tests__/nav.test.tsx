import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom/';
import Nav from '@/app/components/nav';
import { useSession } from 'next-auth/react';

// Mock the `useSession` hook from `next-auth/react`
jest.mock('next-auth/react', () => ({
    useSession: jest.fn(() => ({ data: null, status: 'unauthenticated' })),
  }));
  
  beforeAll(() => {
    // Mock IntersectionObserver for tests
    class MockIntersectionObserver {
      constructor(
        callback: IntersectionObserverCallback,
        options?: IntersectionObserverInit
      ) {}
      observe() {}
      unobserve() {}
      disconnect() {}
    }
  
    Object.defineProperty(window, 'IntersectionObserver', {
      writable: true,
      configurable: true,
      value: MockIntersectionObserver,
    });
  
    // Mock matchMedia for mobile view
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query.includes('max-width: 767px'), // Adjust as needed for mobile
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
  });

describe('Nav Component', () => {
  it('renders the component correctly', () => {
    render(<Nav />);

    // Check if the brand title is rendered
    expect(screen.getByText(/MyFitGenius/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });


  it('renders login and sign-up links if not authenticated on desktop view', () => {
    // Mock not authenticated session
    (useSession as jest.Mock).mockReturnValueOnce({
      data: null,
      status: 'unauthenticated',
    });

    render(<Nav />);

    // Check if the Signing component contains the login and sign-up links
    const signingComponent = screen.getByTestId('signing-component'); // Add a test ID to the Signing component

    // Check if the login and sign-up links are rendered inside the Signing component
    expect(within(signingComponent).getByText(/Sign-In/i)).toBeInTheDocument();

    // Check if the Dashboard link is not rendered
    expect(screen.queryByText(/Dashboard/i)).not.toBeInTheDocument();
  });



  it('renders the Dashboard link if authenticated', () => {
    // Mock useSession to return an authenticated user
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { name: 'John Doe' } },
      status: 'authenticated',
    });

    // Render the Nav component
    render(<Nav />);

    // Check if the Dashboard link is rendered
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });

  it('does not render the dashboard link if unauthenticated', () => {
    // Mock not authenticated session
    (useSession as jest.Mock).mockReturnValueOnce({
      data: null,
      status: 'unauthenticated',
    });

    render(<Nav />);


    // Check if the dashboard links is not rendered
    expect(screen.queryByText(/Dashboard/i)).not.toBeInTheDocument();
  });
  
  it('toggles mobile menu when menu icon is clicked', () => {
    // Mock the useSession to return a session (you can adjust this based on your needs)
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: 'unauthenticated',
    });

    // Render the Nav component
    render(<Nav />);

    

    // Check if the menu icon is present (it should be visible on mobile)
    const menuIcon = screen.getByRole('button');
    expect(menuIcon).toBeInTheDocument();


    fireEvent.click(menuIcon);

    const mobileMenu = screen.getByTestId('mobile');

    expect(within(mobileMenu).getByText(/Home/i)).toBeInTheDocument();
    expect(within(mobileMenu).getByText(/About/i)).toBeInTheDocument();
    expect(within(mobileMenu).getByText(/Pricing/i)).toBeInTheDocument();
    expect(within(mobileMenu).getByText(/Contact/i)).toBeInTheDocument();

  });


});
