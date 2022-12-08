function CustomButton(props) {
    const { color, onClick, children } = props;
    if (color) {
        return (
            <button
                style={{ backgroundColor: color, color: "white", margin: '5px' }}
                onClick={onClick}
            >
                {children}
            </button>
        );
    }
    return <button onClick={onClick}>{children}</button>;
}

export default CustomButton;