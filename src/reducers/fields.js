import update from 'immutability-helper';
import * as actions from '../actions/fieldData';

export const initialState = {

  fields: [
    {
      field_id: 1,
      field_selected: true,
      field_name: 'Dusty Field',
      field_crop: 'Potatoes, Desiree',
      field_data: [
        {
          date: '1 Jan',
          cropCover: '1.0',
          adjRainfall: '3.1',
          irrigation: '5.0',
          smd: '15',
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
      field_crop: 'Carrots',
      field_data: [
        {
          date: '1 Jan',
          cropCover: '1.0',
          adjRainfall: '3.1',
          irrigation: '5.0',
          smd: '30',
          drainage: '13',
          comments: 'blah blah blah'
        },
        {
          date: '2 Jan',
          cropCover: '2.0',
          adjRainfall: '3.1',
          irrigation: '5.0',
          smd: '10',
          drainage: '13',
          comments: 'blah blah blah'
        }
      ]
    }
  ],
  isFetchingFieldData: false,
  selected_field_id: 1
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

    case actions.SET_SELECTED_FIELD:
      return update(state, {
        selected_field_id: { $set: action.data }
      });


    default:
      return state;
  }
}
