function Background() {
   
    const elements = Array.from({ length: 260 });

    return (
        <>
            {elements.map((_, index) => (
                <span key={index}></span>
            ))}
        </>
    );
}

export default Background;
