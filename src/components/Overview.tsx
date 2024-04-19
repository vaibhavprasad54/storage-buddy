import React from 'react'
import Categories from './Categories';
import Graph from './Graph';

const Overview = () => {
    return (
      <div className="main mt-7">
        <div className="heading px-4">
          <h3 className='text-gray-200 text-xl font-semibold'>Overview</h3>
        </div>
        <div className="graph-section h-40 mt-7">
            <Graph />
        </div>
        <div className="categories px-4 mt-5">
          <Categories />
        </div>
      </div>
    );
  };
  
  export default Overview;