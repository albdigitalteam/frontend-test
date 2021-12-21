import { createFeatureSelector, createSelector } from '@ngrx/store';
import { COMMENTS_FEATURE_KEY, State, commentsAdapter } from './comments.reducer';

// Lookup the 'Comments' feature state managed by NgRx
export const getCommentsState = createFeatureSelector<State>(COMMENTS_FEATURE_KEY);

const { selectAll, selectEntities } = commentsAdapter.getSelectors();

export const getCommentsLoaded = createSelector(
  getCommentsState,
  (state: State) => state.loaded
);

export const getCommentsError = createSelector(
  getCommentsState,
  (state: State) => state.error
);

export const getAllComments = createSelector(getCommentsState, (state: State) =>
  selectAll(state)
);

export const getCommentsEntities = createSelector(getCommentsState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getCommentsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getCommentsEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
