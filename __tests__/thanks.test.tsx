import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import Thanks from '@/app/components/mainPage/thanks';

describe('Thanks Component', () => {

    it('renders the all the content in this component', () => {
        render(<Thanks />)
        expect(screen.getByText(/Thank you for visiting/i)).toBeInTheDocument();

        const para = screen.getByRole('paragraph')
        expect(para).toBeInTheDocument();

        const button = screen.getByText('Sign-Up Now');
        expect(button).toBeInTheDocument();

    })

})