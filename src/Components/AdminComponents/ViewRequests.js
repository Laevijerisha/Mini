import './ViewRequests.css'

const ViewRequests = () => {
    const requests = [
        { requestId: '001', requester: 'Laevi', center: 'Madurai', status: 'E-Waste Collected' },
        { requestId: '002', requester: 'Herson', center: 'Kanyakumai', status: 'In Progress' },
        { requestId: '003', requester: 'Rishan', center: 'Virudhunagar', status: 'Request Submitted' },
        { requestId: '004', requester: 'Freeda', center: 'Tirunelveli', status: 'Recycled' },
        { requestId: '005', requester: 'Amalraj', center: 'Kovilpatti', status: 'In Progress' }
    ];

    return (
        <div className="view-requests-page">
            <h2>View Requests</h2>
            <div className="requests-table">
                <div className="header-row">
                    <div className="header">RequestID</div>
                    <div className="header">Requester</div>
                    <div className="header">Center</div>
                    <div className="header">Status</div>
                </div>
                {requests.map((request, index) => (
                    <div key={index} className="data-row">
                        <div className="data">{request.requestId}</div>
                        <div className="data">{request.requester}</div>
                        <div className="data">{request.center}</div>
                        <div className="data">{request.status}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewRequests
