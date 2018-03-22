 

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
