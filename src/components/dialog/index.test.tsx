import { render, screen } from '@testing-library/react';
import Dialog from './index';

test('render Dialog', () => {
    render(
        <Dialog
            open={true}
            title='Adicionar Post'
            onClose={() => { }}
            children={<></>}
        />
    )
    expect(screen.getByRole('presentation')).toBeInTheDocument();
});


