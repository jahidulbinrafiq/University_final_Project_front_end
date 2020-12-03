import React from 'react';


const DisplayUserDetails = ({info}) => {

    
    const{customerName,customerEmail,orderName,projectDetails,budget,projectImage}=info
    
    return (
        <tr>
           <td>{customerName}</td>
           <td>{customerEmail}</td>
           <td>{orderName}</td>
           <td>{projectDetails}</td>
           <td>{budget}$</td>
           <td>
               <img src={projectImage} alt="" width="60px" height="60px"/>
           </td>
        </tr>
    );
};

export default DisplayUserDetails;