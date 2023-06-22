import PropTypes from "prop-types";
const CardInfo = ({ data }) => {
  const ignore_tags = ["id", "created_at", "updated_at"];

  function formatString(str) {
    const words = str.split(/[_-]/);
    const formatted = words
      .map((word) => {
        if (word.toUpperCase() === "ID") {
          return "ID";
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
      })
      .join(" ");

    return formatted;
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 grid-rows-3 gap-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-6 border border-blue-500 border-t-2"
        >
          {Object.entries(item).map(([key, value]) =>
            ignore_tags.includes(key) ? null : (
              <div key={key} className="mb-5">
                <h2 className="text-xl font-bold text-blue-500">
                  {formatString(key)}:
                </h2>
                <span>{value}</span>
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
};

CardInfo.propTypes = {
  data: PropTypes.array,
};

export default CardInfo;
