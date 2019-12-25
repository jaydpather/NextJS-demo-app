import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

export default function Test(){
    

      return (
        <div id="root">
            test
            <script type="text/javascript">
                ReactDOM.hydrate(
                        <BrowserRouter>
                        </BrowserRouter>,
                        document.getElementById('root')
                    );
            </script>
        </div>
        

      );

}

