import { useOutletContext } from "react-router-dom";

export default function ProductDetailInfo() {
  const context = useOutletContext();

  return (
    <>
      <p>
        {context.description} sold at <strong>${context.price}</strong> per piece.
      </p>
      <button>${context.price}</button>
    </>
  )
}