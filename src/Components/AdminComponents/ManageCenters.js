import {useState} from 'react';
import './ManageCenters.css';
import { navigate} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const ManageCenters = () => 
{
    const [centers, setCenters] = useState([{CenterId:"1",Center_Name:"Laevi",CenterLocation:"Madurai",Phone_number:"987654321",Email:"madurai@center.com",Password:"madurai123",personalEmail:"laevijerisha05@gmail.com"}]);
    const [loading,setLoading]=useState([]);
    useEffect(()=>{
        const fetchCenters = async()=>{
            setLoading(true);
            const response =await axios.get ('http://localhost:5027/api/Admin');
            setCenters(response.data);
            console.log(response.data);
            setLoading(false);
        };
        fetchCenters();
    },[]);
    if(loading){
        return<div>Loading.....</div>
    }

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
    }

    return (
        <div className="manage-centers-page">
            <h2>Manage Centers</h2>
            <div className="centers-table">
                <div className="header-row">
                    <div className="header">Center ID</div>
                    <div className="header">Center Name</div>
                    <div className="header">Location</div>
                    <div className="header">PhoneNumber</div>
                    <div className="header">Email</div>
                    <div className="header">Password</div>
                    <div className="header">PersonalEmail</div>
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
    )
}

export default ManageCenters
