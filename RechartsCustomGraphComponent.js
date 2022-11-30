/**
 * This component is used to render any HTML inside recharts graphs
 * Usage: <Customized component={CustomGraphComponent} />
 * Where Customized is a recharts component and CustomGraphComponent is our custom component
 * Props are passed with all available recharts internal props
 */

const CustomGraphComponent = ({ children, ...props }) => {
  return (
    <foreignObject
      className='custom-recharts-graph-component-wrapper'
      x='0'
      y='0'
      width='100%'
      height='100%'
      // overflow={"visible"}
    >
      {React.cloneElement(children, props)}
    </foreignObject>
  );
};

export default CustomGraphComponent;
