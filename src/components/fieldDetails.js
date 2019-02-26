import React, { Component } from 'react';
import FieldCombo from './general/fieldCombo';
import FieldTableRow from './fieldTableRow';
import HeaderRow from './detailsHeaderRow';
import { InfoRowDiv, Column, SelectorButton, MainRowWrapper, MainWrapper, PageTitleDiv, Pcentered, Row, H4, ShowChartButton } from '../styles/styles';


const InfoRow = ({ rainGaugeName, area, crop, soil }) => {

  return (
    <Row>

      <InfoRowDiv><H4>Raingauge: </H4><Pcentered>{rainGaugeName}</Pcentered></InfoRowDiv>
      <InfoRowDiv><H4>Area: </H4><Pcentered>{area}</Pcentered></InfoRowDiv>
      <InfoRowDiv><H4>Crop:</H4><Pcentered>{crop}</Pcentered></InfoRowDiv>
      <InfoRowDiv><H4>Soil:</H4><Pcentered>{soil}</Pcentered></InfoRowDiv>

    </Row>
  );
};


class FieldDetails extends Component {

  constructor (props) {
    super(props);
    // console.log('constructor this props', this.props);
    this.showChartModal = this.showChartModal.bind(this);
  }

  showChartModal () {
    const { showChartModal } = this.props;
    showChartModal();
  }


  render () {

    const { fields, handleChange, setSelectedField, selected_field_id } = this.props;

    console.log('selected_field_id', fields.selected_field_id);
    const selectedFieldIndex = fields.fields.findIndex(field => field.field_id === selected_field_id);
    console.log('selectedFieldIndex', selectedFieldIndex);
    console.log('fields', fields);
    const selected_field = fields.fields[selectedFieldIndex];
    console.log('selected_field', selected_field);
    const field_data = selected_field.field_data;


    // field selection logic here
    console.log('selectedFieldIndex', selectedFieldIndex);
    const mappedTable = field_data.map((dataRow, i) => {
      // console.log('dataRow:', dataRow);
      // console.log('i:', i);
      return (
        <FieldTableRow
          key={ dataRow.date }
          index={ i }
          date={ dataRow.date }
          cropCover={ dataRow.cropCover }
          adjRainfall={ dataRow.adjRainfall }
          irrigation={ dataRow.irrigation }
          smd={ dataRow.smd }
          drainage={ dataRow.drainage }
          comments={ dataRow.comments }
          handleChange={ handleChange }
          fieldKey={selectedFieldIndex}
        />
      );
    });

    return (

      <MainWrapper>
        <MainRowWrapper>
          <PageTitleDiv>
            <Column><H4>Field name:</H4>
              <Row style={{ alignItems: 'center', minWidth: 50, maxWidth: 400 }}>
                <SelectorButton>{'<'}</SelectorButton>

                <FieldCombo
                  onSelect={setSelectedField}
                  field_id={selected_field.field_id}
                  fields={fields.fields}
                  value={selected_field.field_name}
                />

                <SelectorButton>{'>'}</SelectorButton>
              </Row>
            </Column>
            <ShowChartButton type='button' onClick={this.showChartModal}>
              Show Chart
            </ShowChartButton>


          </PageTitleDiv>

        </MainRowWrapper>
        <MainWrapper>

          <InfoRow rainGaugeName='South' area='9.3 ha' fieldName='Dusty Field' crop='Potatoes, Desiree' soil='fine sandy loam' />

          <HeaderRow />

          {
              mappedTable
          }

        </MainWrapper>


      </MainWrapper>
    );
  }
}

export default FieldDetails;
