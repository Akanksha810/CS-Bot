import React from 'react';
import RadarChart from 'react-svg-radar-chart';
class SpiderViewPortal extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const matrix = this.props.matrix?this.props.matrix:""
    
    
const data = [
  {
    data: {
      category0: parseFloat(matrix[Object.keys(matrix)[0]]),
      category1: parseFloat(matrix[Object.keys(matrix)[1]]),
      category2: parseFloat(matrix[Object.keys(matrix)[2]]),
      category3: parseFloat(matrix[Object.keys(matrix)[3]]),
      category4: parseFloat(matrix[Object.keys(matrix)[4]]),
      category5: parseFloat(matrix[Object.keys(matrix)[5]]),
      category6: parseFloat(matrix[Object.keys(matrix)[6]]),
      category7: parseFloat(matrix[Object.keys(matrix)[7]]),
      category8: parseFloat(matrix[Object.keys(matrix)[8]]),
      category9: parseFloat(matrix[Object.keys(matrix)[9]])
  },
    meta: { color: '#FF198C' }
  },
];

const captions = {
  // columns
  category0: Object.keys(matrix)[0],
  category1: Object.keys(matrix)[1],
  category2: Object.keys(matrix)[2],
  category3: Object.keys(matrix)[3],
  category4: Object.keys(matrix)[4],
  category5: Object.keys(matrix)[5],
  category6: Object.keys(matrix)[6],
  category7: Object.keys(matrix)[7],
  category8: Object.keys(matrix)[8],
  category9: Object.keys(matrix)[9]
};
    const defaultOptions = {
      
      captions: true, // show captions?
      
      
      
      captionProps: () => ({
        className: 'captions',
        textAnchor: 'middle',
        fontSize: 16,
        fontFamily: 'sans-serif',
      }),
      
    };
  
    return (
      
      <div>
        <RadarChart
            captions={captions}
            data={data}
            size={650}
            options = {defaultOptions}
          />
             
        </div>
    );
  }



}
export default SpiderViewPortal;

