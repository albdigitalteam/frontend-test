import { unmountComponentAtNode } from "react-dom";
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'store';
import Posts from "./index";

let container: any = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("fetching posts data", async () => {
    const fakePosts = [{
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit"
    }];

    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakePosts)
        }) as any
    );
});

describe('render posts data', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <Posts />
            </Provider>
        )
    });

    test('should display Post', async () => {
        expect(screen.getByTestId("posts-element")).toBeInTheDocument();
    });
})
  