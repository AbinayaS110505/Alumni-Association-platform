import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/Register.css';
import { Link, useNavigate } from 'react-router-dom';

const departments = [
    { code: '101', name: 'Computer Science' },
    { code: '102', name: 'Electrical Engineering' },
    { code: '103', name: 'Mechanical Engineering' },
    { code: '104', name: 'Information Technology' },
    { code: '105', name: 'Biomedical Engineering' },
    { code: '106', name: 'Biotech Engineering' },
    { code: '107', name: 'Civil Engineering' },
    { code: '108', name: 'AIDS Engineering' },
];

const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [yearOfPassing, setYearOfPassing] = useState('');
    const [currentlyWorking, setCurrentlyWorking] = useState('');
    const [yearOfJoining, setYearOfJoining] = useState('');
    const [departmentCode, setDepartmentCode] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (yearOfJoining.length === 2 && departmentCode && rollNumber.length === 3) {
            setRegistrationNumber(`7140${yearOfJoining}${departmentCode}${rollNumber}`);
        } else {
            setRegistrationNumber('');
        }
    }, [yearOfJoining, departmentCode, rollNumber]);

    const navigate = useNavigate();

    const handleRegistration = async (event) => {
        event.preventDefault();
        const registrationData = {
            name,
            email,
            phone,
            yearOfPassing,
            currentlyWorking,
            yearOfJoining,
            departmentCode,
            rollNumber,
            registrationNumber,
            password,
        };

        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', registrationData);
            alert(response.data.message);
            navigate('/'); 
        } catch (error) {
            console.error('Error registering user', error);
            alert('Failed to register user');
        }
    };

    return (
        <div className="registerbody">
            <div className="registration-form">
                <h2>REGISTRATION FORM</h2>
                <form onSubmit={handleRegistration}>
                    <div className="form-grid">
                        <div className="form-column">
                            <label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder='Name'
                                    required
                                />
                            </label>
                            <br />
                            <label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Email ID'
                                    required
                                />
                            </label>
                            <br />
                            <label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder=' Password' required />
                            </label>
                            <br />
                            <label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder=' Phone Number'
                                    required
                                />
                            </label>
                            <br />
                            <label>
                                <input
                                    type="number"
                                    value={yearOfPassing}
                                    onChange={(e) => setYearOfPassing(e.target.value)}
                                    placeholder=' Year of Passing'
                                    required
                                />
                            </label>
                        </div>

                        <div className="form-column">
                            <br />
                            <label>
                                <input
                                    type="text"
                                    value={currentlyWorking}
                                    onChange={(e) => setCurrentlyWorking(e.target.value)}
                                    placeholder=' Currently Working'
                                    required
                                />
                            </label>
                            <br />
                            <label>
                                <input
                                    type="number"
                                    value={yearOfJoining}
                                    onChange={(e) => setYearOfJoining(e.target.value)}
                                    placeholder='Year of Joining'
                                    min="00"
                                    max="99"
                                    required
                                />
                            </label>
                            <br />
                            <label>
                                <select
                                    value={departmentCode}
                                    onChange={(e) => setDepartmentCode(e.target.value)}
                                    required
                                >
                                    <option value="">Select Department</option>
                                    {departments.map((dept) => (
                                        <option key={dept.code} value={dept.code}>
                                            {dept.name} ({dept.code})
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <br />
                            <label>
                                <input
                                    type="text"
                                    value={rollNumber}
                                    onChange={(e) => setRollNumber(e.target.value)}
                                    pattern="\d{3}"
                                    title="Roll number should be a 3-digit number"
                                    maxLength="3"
                                    placeholder=' Roll Number'
                                    required
                                />
                            </label>
                            <br />
                           
                            <label>
                                <input type="text" value={registrationNumber} placeholder=' Registration Number' readOnly />
                            </label>
                        </div>
                    </div>
                    <p>Already have an Account? <Link to='/login'>...Login</Link></p>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
