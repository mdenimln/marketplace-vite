// eslint-disable-next-line react/prop-types
const Button = ({children, classname, onClick= () => {} , type="button"}) => {
    return(
      <button 
        className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
        type={type}
        onClick={onClick}
      >
              {children}
      </button>
    );
    
  }

  export default Button;