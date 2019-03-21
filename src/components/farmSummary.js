import React, { Component } from 'react';
import SummaryTableColumn from './summaryTableColumn';
import SummaryDateColumn from './summaryDateColumn';
import FieldNameCell from './summaryFieldNameCell';
import FieldCropCell from './summaryFieldCropCell';
import { PageTitleDiv, MainWrapper, Column, Row } from '../styles/styles';


class FarmSummary extends Component {

  constructor (props) {
    super(props);
    console.log('FarmInfo constructor this props', this.props);
  }


  render () {


    const { fields } = this.props;

    if (fields === undefined) {
      return (
        <MainWrapper>

          <PageTitleDiv />


          <MainWrapper>
            <p>No data</p>
          </MainWrapper>

        </MainWrapper>
      );

    }
    console.log('fields', fields);

    // <FieldNameRow fieldData={ fieldData } />

    // <FieldCropRow fieldData={ fieldData } />

    const mappedColumns = fields.fields.map((columnData, i) => {
      console.log('columnData: ', columnData);
      console.log('columnName: ', columnData.field_name);
      console.log('columnfieldData: ', columnData.field_data);

      return (
        <Column key={ `field_id: ${columnData.field_id}` }>
          <FieldNameCell fieldName={ columnData.field_name } />
          <FieldCropCell fieldCrop={ columnData.field_crop } />

          <SummaryTableColumn
            key={ `field_id: ${columnData.field_id} values` }
            index={ i }
            fieldId={ columnData.field_id }
            fieldName={ columnData.field_name }
            fieldData={ columnData.field_data }
          />
        </Column>
      );
    });


    return (
      <MainWrapper>

        <PageTitleDiv />


        <MainWrapper>
          <Row>
            <SummaryDateColumn fieldData={fields.fields[0].field_data} />

            { mappedColumns }

          </Row>
        </MainWrapper>

      </MainWrapper>
    );
  }

}

export default FarmSummary;
