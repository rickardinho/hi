import update from 'immutability-helper';
import * as actions from '../actions/fieldData';

export const initialState = {

  fields: [
    {
      field_id: 1,
      field_selected: true,
      field_name: 'Dusty Field',
      field_data: [
        {
          date: '1 Jan',
          cropCover: '1.0',
          adjRainfall: '3.1',
          irrigation: '5.0',
          smd: '25',
          drainage: '13',
          comments: 'blah blah blah'
        },
        {
          date: '2 Jan',
          cropCover: '2.0',
          adjRainfall: '3.1',
          irrigation: '5.0',
          smd: '25',
          drainage: '13',
          comments: 'blah blah blah'
        }
      ]
    },
    {
      field_id: 2,
      field_selected: false,
      field_name: 'Sandy Field',
      field_data: [
        {
          date: '1 Jan',
          cropCover: '1.0',
          adjRainfall: '3.1',
          irrigation: '5.0',
          smd: '25',
          drainage: '13',
          comments: 'blah blah blah'
        },
        {
          date: '2 Jan',
          cropCover: '2.0',
          adjRainfall: '3.1',
          irrigation: '5.0',
          smd: '25',
          drainage: '13',
          comments: 'blah blah blah'
        }
      ]
    }
  ],
  isFetchingFieldData: false
};

export default function fieldsReducer (state = initialState, action) {
  console.log('action: ', action);
  switch (action.type) {


    case actions.SET_FIELD_DATA_VALUE:
      return update(state, {
        fields: {
          [action.fieldKey]: {
            field_data: {
              [action.inputKey]: {
                [action.dataType]: { $set: action.data }
              }
            }
          }
        }

      });


    default:
      return state;
  }
}
