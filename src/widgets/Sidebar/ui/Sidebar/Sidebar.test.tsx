import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('with only first param', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggle = screen.getByTestId('sidebar-toggle');
        expect(toggle).toBeInTheDocument();

        fireEvent.click(toggle);

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
