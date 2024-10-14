import React, { useEffect, useState } from 'react';
import './ContractBreakdown.css';

const ContractBreakdown = () => {
  const [data, setData] = useState([]);
  const [months, setMonths] = useState([]);
  const [visibleMonths, setVisibleMonths] = useState([]); // Initially visible months
  const [startIndex, setStartIndex] = useState(0); // Keep track of the visible month's starting index
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Mobile check

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('resize', handleResize);
    
    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Simulated API response with additional months
    const contractData = [
      { category: "Chemistry", july: 2669.96, august: 2519.15, september: 1229.55, october: 1855.99, november: 2989.45, december: 2983.00, january: 1000, february: 1100, march: 1500, april: 1300, may: 1400, june: 1600 },
      { category: "Hematology", july: 0.00, august: 980.63, september: 1379.15, october: 2369.11, november: 4408.42, december: 3546.00, january: 2000, february: 2100, march: 1600, april: 1700, may: 1800, june: 1900 },
      { category: "Rapids", july: 1417.83, august: 4352.42, september: 3804.36, october: 666.34, november: 1854.04, december: 3024.00, january: 3000, february: 3100, march: 2200, april: 2300, may: 2400, june: 2500 },
      { category: "Imagyst", july: 3619.20, august: 2235.30, september: 3459.77, october: 1876.13, november: 2379.04, december: 1262.00, january: 4000, february: 4100, march: 2700, april: 2800, may: 2900, june: 3000 },
      { category: "Reference Laboratories", july: 552.73, august: 1667.07, september: 1590.87, october: 677.82, november: 4247.96, december: 1712.00, january: 5000, february: 5100, march: 3200, april: 3300, may: 3400, june: 3500 },
      { category: "Other Testing", july: 4086.29, august: 3097.79, september: 3885.12, october: 2754.20, november: 1266.85, december: 3156.00, january: 6000, february: 6100, march: 3700, april: 3800, may: 3900, june: 4000 }
    ];

    const monthsData = [
      { id: 'july', label: 'July' },
      { id: 'august', label: 'August' },
      { id: 'september', label: 'September' },
      { id: 'october', label: 'October' },
      { id: 'november', label: 'November' },
      { id: 'december', label: 'December' },
      { id: 'january', label: 'January' },
      { id: 'february', label: 'February' },
      { id: 'march', label: 'March' },
      { id: 'april', label: 'April' },
      { id: 'may', label: 'May' },
      { id: 'june', label: 'June' }
    ];

    setData(contractData);
    setMonths(monthsData);

    if (isMobile) {
      // If it's mobile, show all months
      setVisibleMonths(monthsData);
    } else {
      // For non-mobile, show first 6 months
      setVisibleMonths(monthsData.slice(0, 6));
    }
  }, [isMobile]);

  const showNextMonths = () => {
    if (startIndex + 6 < months.length) {
      const newStartIndex = startIndex + 6;
      setStartIndex(newStartIndex);
      setVisibleMonths(months.slice(newStartIndex, newStartIndex + 6));
    }
  };

  const showPreviousMonths = () => {
    if (startIndex > 0) {
      const newStartIndex = startIndex - 6;
      setStartIndex(newStartIndex);
      setVisibleMonths(months.slice(newStartIndex, newStartIndex + 6));
    }
  };

  return (
    <div className="contract-table">
      <h2>Your Contract Breakdown</h2>
      <div className="table-container">
      {!isMobile && (
        <div className="navigation-buttons">
          <button onClick={showPreviousMonths} disabled={startIndex === 0}>
            &larr; Previous
          </button>
          <button onClick={showNextMonths} disabled={startIndex + 6 >= months.length}>
            Next &rarr;
          </button>
        </div>
      )}
        <table>
          <thead>
            <tr>
              <th> </th>
              {visibleMonths.map((month) => (
                <th key={month.id}>{month.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.category}</td>
                {visibleMonths.map((month) => (
                  <td key={month.id}>{row[month.id.toLowerCase()]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default ContractBreakdown;
