/* eslint-disable react/prop-types */
const Stats = ({ items }) => {
  if (items.length === 0)
    return <p className="stats">Start by add some items</p>;

  const totalItems = items.length;
  const packedItems = items.filter((data) => data.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100 ? (
        <p>You've packed everything</p>
      ) : (
        <>
          💼 You have {totalItems} items in your lists and you have packed{" "}
          {packedItems} items ({percentage} %)
        </>
      )}
    </footer>
  );
};

export default Stats;
