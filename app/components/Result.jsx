"use client"
import React, { useState } from 'react';

const RaceResults = ({ data }) => {
  const [selectedRace, setSelectedRace] = useState('all');

  const groupedData = data.reduce((acc, curr) => {
    const raceName = curr['出場レース'];
    if (!acc[raceName]) {
      acc[raceName] = [];
    }
    acc[raceName].push(curr);
    return acc;
  }, {});

  const handleRaceChange = (e) => {
    setSelectedRace(e.target.value);
  };

  const racesToDisplay = selectedRace === 'all' ? Object.keys(groupedData) : [selectedRace];

  return (
    <div className="race-results">
      <h1 className="main-title">出場レース結果</h1>
      <div className="select-container">
        <select onChange={handleRaceChange} value={selectedRace} className="race-select">
          <option value="all">全てのレース</option>
          {Object.keys(groupedData).map(raceName => (
            <option key={raceName} value={raceName}>{raceName}</option>
          ))}
        </select>
      </div>
      {racesToDisplay.map(raceName => (
        <div key={raceName} className="race-group">
          <h2 className="race-title">{raceName}</h2>
          <div className="table-container">
            <table className="results-table">
              <thead>
                <tr>

                  <th>順位</th>
                  <th>ゼッケン番号</th>
                  <th>選手名</th>
                  <th>所属チーム</th>
                  
                </tr>
              </thead>
              <tbody>
                {groupedData[raceName]
                  .sort((a, b) => a['順位入力'] - b['順位入力'])
                  .map((row, index) => (
                    <tr key={index}>
                      <td>{row['順位入力']}</td>
                      <td>{row['ゼッケン番号']}</td>
                      <td>{row['選手名']}</td>
                      <td>{row['所属チーム']}</td>
                      
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RaceResults;