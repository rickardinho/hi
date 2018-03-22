import React from 'react';
import { render } from 'react-dom';
import colours from './../../styles/colours';
import Combo from './combo';

const data = [
  {
    date: '1 Jan',
    rainfall: 5,
    sunshine: 4
  },{
    date: '2 Jan',
    rainfall: 2,
    sunshine: 8
  },{
    date: '3 Jan',
    rainfall: 7,
    sunshine: 2
  },
  ,{
    date: '4 Jan',
    rainfall: 3,
    sunshine: 4
  },
  ,{
    date: '5 Jan',
    rainfall: 2,
    sunshine: 7
  },
  ,{
    date: '6 Jan',
    rainfall: 1,
    sunshine: 6
  },
  ,{
    date: '7 Jan',
    rainfall: 6,
    sunshine: 4
  }
]

    const Feed  = ({ allEvents, notifications, isFetching, handleUpdateNotification, displaySome, displayAll, feedIsFiltered, isShowHosting }) => {

    let mappedNotifications = notifications.map((data, i) => {
        return (
            <Notification
                key={ i }
                index={ i }
                viewed={ data.viewed }
            />
        );
    });

    return (
        <div>
       

            <div className="container feed">
    
            {
                mappedNotifications
            }
            </div>

        </div>
    );
};

export default Feed;
