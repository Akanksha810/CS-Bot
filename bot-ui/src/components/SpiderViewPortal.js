import React from 'react';
import RadarChart from 'react-svg-radar-chart';
// import 'react-svg-radar-chart/build/css/index.css';

class SpiderViewPortal extends React.Component {
  render() {

    const data = [
        {
          data: {
            business: 0.00926919,
            computers: 0.0536959,
            games: 0.0177613,
            health: 0.0111404,
            home: 0.00615337,
            recreation: 0.00763185,
            science: 0.27257,
            society: 0.540183,
            sports: 0.00308719,
        },
          meta: { color: '#FF198C' }
        },
      ];

    const captions = {
        // columns
        business: "Business",
        computers: "Computers",
        games: "Games",
        health: "Health",
        home: "Home",
        recreation: "Recreation",
        science: "Science",
        society: "Society",
        sports: "Sports",
      };
    const defaultOptions = {
      
      captions: true, // show captions?
      captionMargin: 10,
      
      
      captionProps: () => ({
        className: 'captions',
        textAnchor: 'middle',
        fontSize: 14,
        fontFamily: 'sans-serif',
      }),
      
    };
  

    return (
      <div>
        <RadarChart
            captions={captions}
            data={data}
            size={500}
            options = {defaultOptions}
          />
             
        </div>
    );
  }



}
export default SpiderViewPortal;