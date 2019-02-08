import update from 'immutability-helper';
import * as actions from '../actions/farms';

export const initialState = {


  farm_data: [
    {
      farm_id: 1,
      farm_name: 'Home Farm',
      selected_farm: true,
        fields: [
          {
            field_id: 1
          },
          {
            field_id: 2
          }

        ],
      farm_data_values: [
        {
          date: '1 Jan',
          raingauges: [
            {
              raingauge_id: 1,
              rainfall: 4
            },
            {
              raingauge_id: 2,
              rainfall: 1
            }
          ],
          sun: 5,
          wind: 6
        },
        {
          date: '2 Jan',
          raingauges: [
            {
              raingauge_id: 1,
              rainfall: 5
            },
            {
              raingauge_id: 2,
              rainfall: 2
            }
          ],
          sun: 6,
          wind: 7,
          comments: 'blah1'
        }
      ]
    }
  ],
  farms_is_fetching: false

};

export default function farmsReducer (state = initialState, action) {
  // console.log('action: ', action);
  switch (action.type) {


    case actions.SET_FARM_DATA_VALUE:
      return update(state, {

        farm_data: {
          [action.farmKey]: {
            farm_data_values: {
              [action.inputKey]: {
                [action.dataType]: { $set: action.data }
              }
            }
          }
        }

      });

    case actions.SET_FARM_RAINGAUGE_VALUE:
      return update(state, {
        farm_data: {
          [action.farmKey]: {
            farm_data_values: {
              [action.inputKey]: {
                raingauges: {
                  [action.raingaugeKey]: {
                    raingauges: { $set: action.data }
                  }
                }
              }
            }
          }
        }
      });


    default:
      return state;
  }
}
