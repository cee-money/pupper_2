import React from 'react';

function YesNoMenu(props) {
    return (
        <>
            <option {...props} value="yes">Yes</option>
            <option {...props} value="no">No</option>
        </> 
    )
}

export default YesNoMenu;