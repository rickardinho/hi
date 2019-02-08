export const SET_FIELD_DATA_VALUE = 'SET_FIELD_DATA_VALUE';


export function setValue (data, inputKey, dataType, fieldKey) {
  return {
    type: SET_FIELD_DATA_VALUE,
    data,
    fieldKey,
    inputKey,
    dataType
  };
}
