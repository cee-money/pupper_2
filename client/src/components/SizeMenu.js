import React from 'react';

function SizeMenu(props) {
    return (
        <>
            <option {...props} value="Small">Small (under 25 lbs)</option>
            <option {...props} value="Medium">Medium (between 25-50 lbs)</option>
            <option {...props} value="Large">Large (over 50 lbs)</option>
        </> 
    )
}

export default SizeMenu;