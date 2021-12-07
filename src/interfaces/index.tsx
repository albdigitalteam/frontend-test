interface ErrorState {
  message: string;
  status: string;
  error: string;
}

interface ReduxState<T> {
  isDoing: boolean;
  isDone: boolean;
  failure: ErrorState | null;
  data?: T | null;
}

export type {ReduxState, ErrorState};
