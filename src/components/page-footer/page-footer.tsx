import React from 'react';

import './page-footer.css';

const PageFooter: React.FC = () => {
  return (
    <footer className="page-footer  bg-dark">
      <div className="container">
        <section className="copyrights">
          <p>Dev. by Dmitriy Miroshnichenko, 2020</p>
        </section>
      </div>
    </footer>
  );
};

export { PageFooter };
