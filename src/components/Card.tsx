const Card: React.FC = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
        background: "#fff",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
