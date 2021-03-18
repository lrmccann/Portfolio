/* eslint-disable semi */
import React, { useEffect, useState } from 'react';
import '../index.css';
import '../styleSheets/awards.css';
import stats from '../stats.json';
import awards from '../stats-awards.json';

export default function Awards () {
  const [statsToMap, setStatsToMap] = useState([]);
  const [awardsToMap, setAwardsToMap] = useState([]);

  useEffect(() => {
    setStatsToMap(stats);
    setAwardsToMap(awards);
  }, []);

  return (
    <div className="awardsPage container-fixed">
      <div className="awardHolderLeft">
        <h1 id="columnHeader">Stats</h1>
        {statsToMap.map((item, myKey) => (
          <div key={myKey} className="awardDiv">
            <h3 id="statName">{item.name}</h3>
            <div className="idkHolder">
              <div className="usernameSide">
                {/* <h5>Username:</h5> */}
                <h5>{item.username}</h5>
              </div>
              <div className="scoreSide">
                <h5>{item.score}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="awardHolderRight">
        <h1 id="columnHeader">Awards</h1>
        {awardsToMap.map((item, keyTwo) => (
          <div key={keyTwo} className="awardsDivTwo">
            <h3 id="statName">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
