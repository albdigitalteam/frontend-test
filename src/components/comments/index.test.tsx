import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import store from 'store';
import CommentsList from './index';

const comments = [
    {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    }
];

describe('render posts data', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <SnackbarProvider maxSnack={3}>
                    <CommentsList
                        comments={comments}
                    />
                </SnackbarProvider>
            </Provider>
        )
    });

    test('should display comments list', async () => {
        expect(screen.getByTestId("comments-list")).toBeInTheDocument();
    });
})
