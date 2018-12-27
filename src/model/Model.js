import uuid from 'uuid';

export default (modelName, defaultFields) => ({
  create(model) {
    return {
      type: `CREATE_${modelName}`,
      model: {
        id: uuid(),
        ...defaultFields,
        ...model
      }
    };
  },

  update(mutation) {
    return {
      type: `UPDATE_${modelName}`,
      mutation
    };
  },
  delete(id) {
    return {
      type: `DELETE_${modelName}`,
      id
    };
  },
  reducer(state, action) {
    if (action.type === `CREATE_${modelName}`) {
      return [...state, action.model];
    } else if (action.type === `UPDATE_${modelName}`) {
      return state.map(model => {
        if (model.id === action.model.id) {
          return { ...model, ...action.mutation };
        }
        return model;
      });
    } else if (action.type === `DELETE_${modelName}`) {
      return state.filter(model => model.id !== action.id);
    }
    return state;
  }
});
