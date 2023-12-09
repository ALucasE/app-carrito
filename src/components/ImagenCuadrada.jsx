export const ImagenCuadrada = ({ src, alt }) => {
  return (
    <div style={{ width: "250px", height: "250px", overflow: "hidden" }}>
      <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  );
};
