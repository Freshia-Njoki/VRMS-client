interface ContainerProps {
    children: React.ReactNode
    className?: string
}
const ContainerWrapper = (props: Readonly<ContainerProps>) => {
    return (
        <div className={`mx-auto xl:px-0 ${props.className ? props.className : ""}`}>
            {props.children}
        </div>
    )
}


export default ContainerWrapper
