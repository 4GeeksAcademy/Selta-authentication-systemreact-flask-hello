import React, { useState, useEffect } from 'react';
import "../../styles/forms.css";
import { useNavigate } from 'react-router-dom';

const PrivateComp = () => {
    const [message, setMessage] = useState ('Example')
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPrivateData = async () => {
            try {
                const token = sessionStorate.getItem('jwt-token');
                
                const response = await fetch ('/api/private',{
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                      Authorization: 'Bearer ' + token,
                    },
                });

                if (!response.ok) {
                    throw new Error ('There was a problem in the request');
                }

                const data = await response.json();
                console.log('This is what you requested', data);
                setMessage(data.message);
            } catch (error){
                console.error(error.message);
                navigate.push ('/login')
            }
        };
        fetchPrivateData();
    },
    [navigate]
    );


    return (
        <div>
        <h1>{message}</h1>
    </div>
  );
};

export default PrivateComp;