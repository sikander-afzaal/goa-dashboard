import "./Guild.css";
import GuildRow from "../../Components/GuildRow/GuildRow";

const Guild = () => {
  const DATA = [
    {
      name: "Bifrost gaming guild",
      locked: false,
    },
    {
      name: "Bifrost gaming guild",
      locked: true,
    },
    {
      name: "Bifrost gaming guild",
      locked: false,
    },
    {
      name: "Bifrost gaming guild",
      locked: true,
    },
    {
      name: "Bifrost gaming guild",
      locked: false,
    },
  ];
  return (
    <div className="page">
      <div className="max guild-div">
        <h2>
          Create Guild <img src="/assets/plus.png" alt="" />
        </h2>
        <div className="guild-col">
          {DATA.map((elem, idx) => {
            return <GuildRow {...elem} num={idx + 1} key={idx + "row"} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Guild;
