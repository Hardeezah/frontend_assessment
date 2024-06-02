interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return ( 
        <div className="
            bg-[#FEF6E4]
            font-title
            
            
        ">{children}</div>
     );
}
 
export default Container;