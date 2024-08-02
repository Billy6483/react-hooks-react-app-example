import React from 'react';
import { format } from 'date-fns';

function App() {
    const formattedDate = format(new Date(), 'MMMM dd, yyyy');
    return <div>Today's date is {formattedDate}</div>;
}

export default App;
