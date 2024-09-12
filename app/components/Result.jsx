"use client"
import React, { useState } from 'react';
import Link from 'next/link'

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
  
  console.log(groupedData)

  const handleRaceChange = (e) => {

    setSelectedRace(e.target.value);

  };
//selected === "all"で真or偽か判定して真なら右(Object.keys(groupedData)),偽なら左[selectedRace=これにはレース名が入る]
  const racesToDisplay = selectedRace === 'all' ? Object.keys(groupedData) : [selectedRace];

  return (
    <div className="race-results">
      <h1 className="main-title">レース結果表</h1>
      <div className="select-container">
        <span className='race-select'>
          <Link href="https://meijocup-website.vercel.app/" >ウェブサイトへ戻る</Link>
        </span>
        <select onChange={handleRaceChange} value={selectedRace} className="race-select">
          <option value="all">全てのレース</option>
          {/*レース名の数だけ処理する*/}
          {Object.keys(groupedData).map(raceName => (
            <option key={raceName} value={raceName}>{raceName}</option>
          ))}
        </select>
        
        <span className='race-select'>
          <Link href="/" >組み合わせ確認表へ移動</Link>
        </span>
      </div>
      {/* レース名の数だけ処理する */}
      {racesToDisplay.map(raceName => (
        // キー値がないとReactが処理できない
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
                 //
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