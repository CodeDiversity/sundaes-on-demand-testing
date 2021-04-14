import {render, screen} from '@testing-library/react'; 
import SummaryForm from './SummaryForm';
import userEvent from '@testing-library/user-event';
test ('initial conditions', () => {
    render(<SummaryForm/>); 
    const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i, 
    });
    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole('button')
    expect(confirmButton).toBeDisabled();
})

test('checkbox enables button on first click and disables on second click', () => {
    render(<SummaryForm/>);
    const checkbox = screen.getByRole('checkbox')
    const confirmButton = screen.getByRole('button')

    userEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox);
    expect(confirmButton).toBeDisabled()
})

test('popover responds to hover', () => {
    // popover starts out hidden

    // popover appears when mouse over checkbox label

    // disappears on mouseout 
})