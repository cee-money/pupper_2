import React from 'react';

function YesNoMenu(props) {
    return (
        <>
            <option {...props} value="Yes">Yes</option>
            <option {...props} value="No">No</option>
        </> 
    )
}

export default YesNoMenu;