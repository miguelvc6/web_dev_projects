/* eslint-disable react/prop-types */
export function Button({onClick, htmlText}) {
  return (
    <>
      <button onClick={onClick}>{htmlText}</button>
    </>
  );
}

