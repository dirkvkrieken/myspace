import Icon from "./Icon";
const Activity = ({ text, icon }) => {
  return (
    <div className="border-4 rounded-2xl p-4 m-4">
      <span className="">{text}</span>
      <Icon name={icon} size={24} />
      {/* <House size={24} /> */}
    </div>
  );
};

export default Activity;
