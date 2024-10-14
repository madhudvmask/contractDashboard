import React from 'react';
import DonutChart from './DonutChart';
import './DonutChart.css';

const ContractProgress = () => {
  return (
    <div className='contract-progress'>
      <h2>Your Zoetis Contract Progress</h2>
      <div className='contract-summary-wrapper'>
      <DonutChart />
      <div class="contract-details-wrapper">
            <div class="contract-metrics-row">
            <div class="contract-metric">
                <div class="label">Contract <span>Year Spend</span></div>
                <div class="value" id="yearSpend">$54,470</div>
            </div>
            <div class="contract-metric">
                <div class="label">Contract Year <span>Commitment</span></div>
                <div class="value" id="yearCommitment">$70,510</div>
            </div>
            <div class="contract-metric highlight-balance">
                <div class="label">Remaining <span>Balance</span></div>
                <div class="value" id="balance">$16,040</div>
            </div>
            </div>
            
            <div class="contract-info-row">
            <div class="contract-metric">
                <div class="label">Current contract cycle</div>
                <div class="value" id="contractCycle">26 days left</div>
            </div>
            <div class="contract-metric">
                <div class="label">Contract lapse date</div>
                <div class="value" id="lapseDate">6/30/2024</div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContractProgress;
