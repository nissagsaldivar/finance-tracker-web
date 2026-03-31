
const buttonStyles = {
    color: "#4a2040",
    border: "none",
    borderRadius: "10px",
    padding: "0 24px",
    fontSize: "14px",
    fontFamily: "Times New Roman, serif",
    fontWeight: "bold",
    cursor: "pointer",
    height: "42px",
};


export default function Button({ label, onClick, color, styles, disabled }) {
    const colors = {
        purple: "#e8a0bf",
        red: "#d4a5e8",
        salmon: "#f4a7b9",
    }

    if (disabled) {
        buttonStyles.cursor = "not-allowed";
        buttonStyles.opacity = 0.5;
        buttonStyles.backgroundColor = "#ccc";
    }

    return (
        <button onClick={onClick} style={{ ...buttonStyles, backgroundColor: colors[color], ...styles }}>{label}</button>
    )
}