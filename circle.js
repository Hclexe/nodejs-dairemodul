const circleArea = (r) => {
    const area = Math.PI * r * r;
    return area;
  };
  
  const circleCircumference = (r) => {
    const circumference = 2 * Math.PI * r;
    return circumference;
  };
  
  module.exports = { circleArea, circleCircumference };
  