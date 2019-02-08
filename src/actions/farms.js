export const SET_FARM_DATA_VALUE = 'SET_FARM_DATA_VALUE';
export const SET_FARM_RAINGAUGE_VALUE = 'SET_FARM_RAINGAUGE_VALUE';

export function setValue (data, inputKey, dataType) {
  return {
    type: SET_FARM_DATA_VALUE,
    data,
    inputKey,
    dataType
  };
}

export function setRaingaugeValue (data, inputKey, dataType, raingauge) {
  return {
    type: SET_FARM_RAINGAUGE_VALUE,
    data,
    inputKey,
    dataType,
    raingauge
  };
}
