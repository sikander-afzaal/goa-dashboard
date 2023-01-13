import "./GuildRow.css";

const GuildRow = ({ locked, name, num }) => {
  return (
    <div className="guild-row">
      <div className="left-guild">
        <p>#{num}</p>
        <img
          src={locked ? "/assets/locked.png" : "/assets/unlocked.png"}
          alt=""
        />
        <h3>{name}</h3>
      </div>
      <button>Visit Guild</button>
    </div>
  );
};

export default GuildRow;
