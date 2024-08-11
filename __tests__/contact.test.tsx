import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom'
import Contact from '@/app/components/mainPage/contact';
import {sendEmail} from '../app/action/sendEmail'; // Import the module with all exports
import toast from 'react-hot-toast';

beforeAll(() => {
    class IntersectionObserverMock {
      observe = jest.fn();
      unobserve = jest.fn();
      disconnect = jest.fn();
      takeRecords = jest.fn();
      constructor() {}
    }
    global.IntersectionObserver = IntersectionObserverMock as any
  })

  // Mock the `sendEmail` function
jest.mock('../app/action/sendEmail', () => ({
    sendEmail: jest.fn(),  // Mock the sendEmail function using jest.fn()
  }));
  
  // Mock `react-hot-toast`
jest.mock('react-hot-toast', () => ({
    __esModule: true,
    default: {
      success: jest.fn(),
      error: jest.fn(), // Add other methods if needed
    },
  }));


  

describe('Contact Component', () => {

    it('renders the mainHeading and paragraph', () => {
        render(<Contact />)

        // check for the main heading to render
        const mainHeading = screen.getByText(/Contact Us/i)
        expect(mainHeading).toBeInTheDocument();

        //check for the p tag to render
        const para = screen.getByRole('paragraph');
        expect(para).toBeInTheDocument();

        //check for content inside para 
        const content = screen.getByText(/Our team is standing by to assist you with any inquiries you may have/i)
        expect(content).toBeInTheDocument();
    })

    it('should fill out and submit the form successfully', async () => {
          // Arrange
    const mockedSendEmail = sendEmail as jest.Mock;
    mockedSendEmail.mockResolvedValueOnce({ success: true });
        // Render the Contact component
        render(<Contact />);
    
        // Get the input elements
        const firstNameInput = screen.getByPlaceholderText('Firstname ...');
        const lastNameInput = screen.getByPlaceholderText('Lastname ...');
        const emailInput = screen.getByPlaceholderText('Email ...');
        const messageInput = screen.getByPlaceholderText('Leave a message...');
    
        // Simulate user input
        fireEvent.change(firstNameInput, { target: { value: 'John' } });
        fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
        fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
        fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message!' } });
    
        // Get the submit button and simulate a form submission
    const submitButton = screen.getByText('Send Message!');
    fireEvent.click(submitButton);

    // Wait for the sendEmail function to be called and the form to be reset
    await waitFor(() => {
      expect(sendEmail).toHaveBeenCalledTimes(1);
      expect(sendEmail).toHaveBeenCalledWith(expect.any(FormData));
    });

    // Assert
    expect(mockedSendEmail).toHaveBeenCalledTimes(1);
    expect(mockedSendEmail).toHaveBeenCalledWith(expect.any(FormData));
    expect(toast.success).toHaveBeenCalledWith('Successfully sent message! 💪🏻');

    // Verify that the form was reset
    expect(firstNameInput).toHaveValue('');
    expect(lastNameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(messageInput).toHaveValue('');
    expect(toast.success).toHaveBeenCalledWith('Successfully sent message! 💪🏻');
    
      });


})