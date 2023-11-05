import Select from 'react-select';
import React from 'react';

const teams = [
  "Arizona Cardinals",
  "Atlanta Falcons",
  "Baltimore Ravens",
  "Buffalo Bills",
  "Carolina Panthers",
  "Chicago Bears",
  "Cincinnati Bengals",
  "Cleveland Browns",
  "Dallas Cowboys",
  "Denver Broncos",
  "Detroit Lions",
  "Green Bay Packers",
  "Houston Texans",
  "Indianapolis Colts",
  "Jacksonville Jaguars",
  "Kansas City Chiefs",
  "Las Vegas Raiders",
  "Los Angeles Chargers",
  "Los Angeles Rams",
  "Miami Dolphins",
  "Minnesota Vikings",
  "New England Patriots",
  "New Orleans Saints",
  "New York Giants",
  "New York Jets",
  "Philadelphia Eagles",
  "Pittsburgh Steelers",
  "San Francisco 49ers",
  "Seattle Seahawks",
  "Tampa Bay Buccaneers",
  "Tennessee Titans",
  "Washington Commanders"
];

const options = teams.map(team => ({
  value: team.toLowerCase().replace(/ /g, '-'),
  label: team
}));

const MultipleOptionsComponent = () => {
  const [selectedOption, setSelectedOption] = React.useState([]);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    // You can also do something with the selected options here
    // like sending them to an API or storing in a state management
  };

  return (
    <Select
      isMulti
      name="admit-source"
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={handleChange}
      value={selectedOption}
      placeholder="Select Admit Source"
    />
  );
}

export default MultipleOptionsComponent;
