import {useEffect} from 'react';

export const Layout = ({ children, title }) => {
    useEffect(() => {
      document.title = 'HRnet | ' + title;
    }, [title]);
  
    return (
      <>
        
        <main>
          <h2>{title}</h2>
          {children}
        </main>
      </>
    );
  };
