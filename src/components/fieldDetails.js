import React from 'react';
import { render } from 'react-dom';
import Combo from './general/combo';
import FieldTableRow from './fieldTableRow';
import { MainWrapper } from './../styles/styles';
import { RowWrapped, P, Pcentered, Div1, Div2, Div3, Row, H2, H3, H4, NavButton, NavLabel, NavbarWrapper, NavButtonWrapper, BulletWrapper, ImageDiv, SocialDiv, DownloadDiv, SocialButton, BulletDiv } from './../styles/styles';


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
      <Row>


          <RowWrapped>
            <div><H4>Rainguage: </H4><Pcentered>{rainGaugeName}</Pcentered></div>
            <div><H4>Area: </H4><Pcentered>{area}</Pcentered></div>
          </RowWrapped>

          <RowWrapped>
            <div><H4>Field name:</H4><Pcentered>{fieldName}</Pcentered></div>
            <div><H4>Crop:</H4><Pcentered>{crop}</Pcentered></div>
            <div><H4>Soil:</H4><Pcentered>{soil}</Pcentered></div>
          </RowWrapped>



      </Row>
  );
};


const HeaderRow  = ({ }) => {

  return (
      <Row>

        <Div1>
          <H4>Date</H4>
        </Div1>

        <Div1>
          <H4>Crop & Weed cover (%)</H4>
        </Div1>

        <Div1>
          <H4>Adjusted rainfall (mm)</H4>
        </Div1>

        <Div1>
          <H4>Irrigation (mm)</H4>
        </Div1>

        <Div1>
          <H4>Soil moisture deficit (mm)</H4>
        </Div1>

        <Div1>
          <H4>Drainage (mm)</H4>
        </Div1>

        <Div3>
          <H4>Comments</H4>
        </Div3>

      </Row>
  );
};


const FieldDetails  = () => {

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
      <Div1>
        <H2>Field Details</H2>
      </Div1>

      <InfoRow rainGaugeName='South' area='9.3 ha' fieldName='Dusty Field' crop='Potatoes, Desiree' soil='fine sandy loam' />

      <HeaderRow />

      {
          mappedTable
      }


    </MainWrapper>
  );
};

export default FieldDetails;
