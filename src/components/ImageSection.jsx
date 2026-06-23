const OVERLAY_CLASS = {
    dark: "bg-background/40",
    light: "bg-white/15",
};

const FIT_CLASS = {
    cover: "bg-cover",
    contain: "bg-contain bg-bottom",
};

const POSITION_CLASS = {
    center: "bg-center",
    "top-right": "bg-top-right",
};

const ImageSection = ({
    src,
    overlay,
    fit = "cover",
    position = "center",
    className = "",
    contentClassName = "",
    children,
    as: Component = "div",
    ...props
}) => {
    const hasContent = children != null;

    return (
        <Component
            className={`relative overflow-hidden bg-black bg-no-repeat ${FIT_CLASS[fit]} ${POSITION_CLASS[position]} ${className}`}
            style={{ backgroundImage: `url(${src})` }}
            {...props}
        >
            {overlay && (
                <div
                    className={`absolute inset-0 ${OVERLAY_CLASS[overlay]} pointer-events-none`}
                    aria-hidden="true"
                />
            )}
            {hasContent ? (
                <div className={`relative z-10 h-full w-full ${contentClassName}`}>{children}</div>
            ) : null}
        </Component>
    );
};

export default ImageSection;
