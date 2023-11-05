import React from 'react';

const NFLDropdownComponent = ( { onMetricChange } ) => {
  const metrics = [
    "points_scored",
    "total_yards",
    "offensive_plays",
    "yards_per_play",
    "turnovers_lost",
    "fumbles_lost",
    "1st_downs",
    "passes_completed",
    "passes_attempted",
    "passing_yards",
    "passing_touchdowns",
    "passing_interceptions",
    "net_yards_per_pass_attempt",
    "passing_1st_downs",
    "rushing_attempts",
    "rushing_yards",
    "rushing_touchdowns",
    "rushing_yards_per_attempt",
    "rushing_1st_downs",
    "penalties",
    "penalty_yards",
    "1st_down_penalties",
    "percentage_scoring_drives",
    "percentage_turnover_drives",
    "expected_points"
  ];

  const handleMetricChange = (event) => {
    onMetricChange(event.target.value);
  };

  return (
    <select onChange={handleMetricChange}>
      {metrics.map((metric, index) => (
        <option key={index} value={metric}>
          {metric}
        </option>
      ))}
    </select>
  );
};

export default NFLDropdownComponent;