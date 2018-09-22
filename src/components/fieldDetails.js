import React, { Component } from 'react';
import { render } from 'react-dom';
// import Modal from 'react-modal';
import Combo from './general/combo';
import FieldTableRow from './fieldTableRow';
import HeaderRow from './detailsHeaderRow';
import { MainWrapper, PageTitleDiv, RowWrapped, P, Pcentered, Div1, Div2, Div3, Row, H2, H3, H4, NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, ShowChartButton, BulletDiv } from './../styles/styles';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#root');

const data = [
  {
    date: '1 Jan',
    cropCover:'50%',
    adjRainfall:'3.1',
    irrigation:'5.0',
    smd:'25',
    drainage:'13',
    comments: 'blah blah blah'
  },{
    date: '2 Jan',
    cropCover:'50%',
    adjRainfall:'3.1',
    irrigation:'5.0',
    smd:'25',
    drainage:'13',
    comments: 'blah blah blah'
  },{
    date: '3 Jan',
    cropCover:'50%',
    adjRainfall:'3.1',
    irrigation:'5.0',
    smd:'25',
    drainage:'13',
    comments: 'blah blah blah'
  },{
    date: '4 Jan',
    cropCover:'50%',
    adjRainfall:'3.1',
    irrigation:'5.0',
    smd:'25',
    drainage:'13',
    comments: 'blah blah blah'
  },{
    date: '5 Jan',
    cropCover:'50%',
    adjRainfall:'3.1',
    irrigation:'5.0',
    smd:'25',
    drainage:'13',
    comments: 'blah blah blah'
  },{
    date: '6 Jan',
    cropCover:'50%',
    adjRainfall:'3.1',
    irrigation:'5.0',
    smd:'25',
    drainage:'13',
    comments: 'blah blah blah'
  },{
    date: '7 Jan',
    cropCover:'50%',
    adjRainfall:'3.1',
    irrigation:'5.0',
    smd:'25',
    drainage:'13',
    comments: 'blah blah blah'
  }
]

const InfoRow  = ({ rainGaugeName, area, fieldName, crop, soil }) => {

  return (
      <RowWrapped>

          <RowWrapped>
            <div><H4>Raingauge: </H4><Pcentered>{rainGaugeName}</Pcentered></div>
            <div><H4>Area: </H4><Pcentered>{area}</Pcentered></div>
          </RowWrapped>

          <RowWrapped>
            <div><H4>Field name:</H4><Pcentered>{fieldName}</Pcentered></div>
            <div><H4>Crop:</H4><Pcentered>{crop}</Pcentered></div>
            <div><H4>Soil:</H4><Pcentered>{soil}</Pcentered></div>
          </RowWrapped>

      </RowWrapped>
  );
};


class FieldDetails extends Component {

  constructor (props) {
    super(props);
    console.log('constructor this props', this.props);
    this.showChartModal = this.showChartModal.bind(this);
  }

  showChartModal () {
    const { showChartModal } = this.props;
    showChartModal();
  }


  render () {

    let mappedTable = data.map((data, i) => {
        return (
            <FieldTableRow
                key={ i }
                index={ i }
                date={ data.date }
                cropCover={ data.cropCover }
                adjRainfall={ data.adjRainfall }
                irrigation={ data.irrigation }
                smd={ data.smd }
                drainage={ data.drainage }
                comments={ data.comments }
            />
        );
    });

    return (

      <MainWrapper>
        <PageTitleDiv>
          <H3>Field & Crop Details</H3>
        </PageTitleDiv>
        <MainWrapper>

          <InfoRow rainGaugeName='South' area='9.3 ha' fieldName='Dusty Field' crop='Potatoes, Desiree' soil='fine sandy loam' />

          <HeaderRow />

          {
              mappedTable
          }

        </MainWrapper>

        <ShowChartButton type="button" onClick={this.showChartModal}>
          Show Chart
        </ShowChartButton>

      </MainWrapper>
    );
  }
}

export default FieldDetails;
