export const SET_FIELD_DATA_VALUE = 'SET_FIELD_DATA_VALUE';
export const SET_SELECTED_FIELD = 'SET_SELECTED_FIELD';

export function setValue (data, inputKey, dataType, fieldKey) {
  return {
    type: SET_FIELD_DATA_VALUE,
    data,
    fieldKey,
    inputKey,
    dataType
  };
}

export function setSelectedField (data) {
  return {
    type: SET_SELECTED_FIELD,
    data
  };
}
