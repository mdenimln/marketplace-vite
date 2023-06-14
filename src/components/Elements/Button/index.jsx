// eslint-disable-next-line react/prop-types
const Button = ({children, classname}) => {
    return(
      <button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
       type="submit">
            {children}
      </button>
    );
    
  }

  export default Button;