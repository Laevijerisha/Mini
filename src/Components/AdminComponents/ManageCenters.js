import {useState, useEffect} from 'react';
import './ManageCenters.css';

const ManageCenters = () => {
    useEffect(()=>{
        handleViewCenter();
    },[])
    const [centers, setCenters] = useState([
        // { centerId: '001', name: 'Center A', location: 'Location A' },
        // { centerId: '002', name: 'Center B', location: 'Location B' },
        // { centerId: '003', name: 'Center C', location: 'Location C' },
        // { centerId: '004', name: 'Center D', location: 'Location D' },
        // { centerId: '005', name: 'Center E', location: 'Location E' }
        {CenterId:"1",Center_Name:"Laevi",CenterLocation:"Madurai",Phone_number:"987654321",Email:"madurai@center.com",Password:"madurai123",personalEmail:"laevijerisha05@gmail.com"},
        {CenterId:"1",Center_Name:"Laevi",CenterLocation:"Madurai",Phone_number:"987654321",Email:"madurai@center.com",Password:"madurai123",personalEmail:"laevijerisha05@gmail.com"},
        {CenterId:"1",Center_Name:"Laevi",CenterLocation:"Madurai",Phone_number:"987654321",Email:"madurai@center.com",Password:"madurai123",personalEmail:"laevijerisha05@gmail.com"}
    ]);

    const handleViewCenter = () => {
        console.log('view');
    };

    const handleUpdateCenter = (CenterId, field, value) => {
        const updatedCenters = centers.map(center =>
            center.CenterId === CenterId ? { ...center, [field]: value } : center
        );
        setCenters(updatedCenters);
    };

    const handleDeleteCenter = CenterId => {
        const updatedCenters = centers.filter(center => center.CenterId !== CenterId);
        setCenters(updatedCenters);
    };

    const handleAddCenter = () => {
        const newCenterId = centers.length + 1;
        const centerName = prompt('Enter center name:');
        const location = prompt('Enter center location:');
        const phone = prompt('Enter Phone number');
        const email = prompt('Enter email');
        const password = prompt('Enter password');
        const personalEmail = prompt('Enter personal email');
        if (centerName && location) {
            const newCenter = { CenterId: newCenterId, Center_Name: centerName, CenterLocation: location, Phone_number: phone, Email: email, Password: password, personalEmail: personalEmail };
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
                    <div className="header">Phone number</div>
                    <div className="header">Email</div>
                    <div className="header">Actions</div>
                </div>
                {centers.map(center => (
                    <div key={center.centerId} className="data-row">
                        <div className="data">{center.CenterId}</div>
                        <div className="data" contentEditable onBlur={e => handleUpdateCenter(center.CenterId, 'Center_Name', e.target.textContent)}>{center.Center_Name}</div>
                        <div className="data" contentEditable onBlur={e => handleUpdateCenter(center.CenterId, 'CenterLocation', e.target.textContent)}>{center.CenterLocation}</div>
                        <div className="data" contentEditable onBlur={e => handleUpdateCenter(center.CenterId, 'Phone_number', e.target.textContent)}>{center.Phone_number}</div>
                        <div className="data" contentEditable onBlur={e => handleUpdateCenter(center.CenterId, 'Email', e.target.textContent)}>{center.Email}</div>
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
