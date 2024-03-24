import {useState} from 'react';
import './ManageCenters.css';

const ManageCenters = () => {
    const [centers, setCenters] = useState([
        { centerId: '001', name: 'Center A', location: 'Location A' },
        { centerId: '002', name: 'Center B', location: 'Location B' },
        { centerId: '003', name: 'Center C', location: 'Location C' },
        { centerId: '004', name: 'Center D', location: 'Location D' },
        { centerId: '005', name: 'Center E', location: 'Location E' }
    ]);

    const handleUpdateCenter = (centerId, field, value) => {
        const updatedCenters = centers.map(center =>
            center.centerId === centerId ? { ...center, [field]: value } : center
        );
        setCenters(updatedCenters);
    };

    const handleDeleteCenter = centerId => {
        const updatedCenters = centers.filter(center => center.centerId !== centerId);
        setCenters(updatedCenters);
    };

    const handleAddCenter = () => {
        const newCenterId = centers.length + 1;
        const centerName = prompt('Enter center name:');
        const location = prompt('Enter center location:');
        if (centerName && location) {
            const newCenter = { centerId: newCenterId, name: centerName, location: location };
            setCenters([...centers, newCenter]);
        } else {
            alert('Center name and location are required.');
        }
    };

    return (
        <div className="manage-centers-page">
            <h2>Manage Centers</h2>
            <div className="centers-table">
                <div className="header-row">
                    <div className="header">Center ID</div>
                    <div className="header">Center Name</div>
                    <div className="header">Location</div>
                    <div className="header">Actions</div>
                </div>
                {centers.map(center => (
                    <div key={center.centerId} className="data-row">
                        <div className="data">{center.centerId}</div>
                        <div className="data" contentEditable onBlur={e => handleUpdateCenter(center.centerId, 'name', e.target.textContent)}>{center.name}</div>
                        <div className="data" contentEditable onBlur={e => handleUpdateCenter(center.centerId, 'location', e.target.textContent)}>{center.location}</div>
                        <div className="data">
                            <button onClick={() => handleDeleteCenter(center.centerId)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="add-center-btn" onClick={handleAddCenter}>Add Center</button>
        </div>
    );
}

export default ManageCenters
