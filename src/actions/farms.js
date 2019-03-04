export const SET_FARM_DATA_VALUE = 'SET_FARM_DATA_VALUE';
export const SET_FARM_RAINGAUGE_VALUE = 'SET_FARM_RAINGAUGE_VALUE';

export function setValue (data, inputKey, dataType, farmKey) {
  console.log('setValue: ', `farmKey: ${farmKey}, data${data}`);
  return {
    type: SET_FARM_DATA_VALUE,
    payload: {
      data,
      inputKey,
      farmKey,
      dataType
    }
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
