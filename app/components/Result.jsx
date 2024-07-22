
export default async function Result(props){
    const data = props.data;
    console.log(data)
    const groupedData = data.reduce((acc, curr) => {
        const raceName = curr['出場レース'];
        if (!acc[raceName]) {
          acc[raceName] = [];
        }
        acc[raceName].push(curr);
        return acc;
      }, {});
    
    return (
        <div>
        <h1>出場レース結果</h1>
        {Object.keys(groupedData).map(raceName => (
          <div key={raceName}>
            <h2>{raceName}</h2>
            <table>
              <thead>
                <tr>
                  <th>ゼッケン番号</th>
                  <th>選手名</th>
                  <th>所属チーム</th>
                  <th>順位</th>
                </tr>
              </thead>
              <tbody>
                {groupedData[raceName]
                  .sort((a, b) => a['順位入力'] - b['順位入力']) // 順位でソート
                  .map((row, index) => (
                    <tr key={index}>
                      <td>{row['ゼッケン番号']}</td>
                      <td>{row['選手名']}</td>
                      <td>{row['所属チーム']}</td>
                      <td>{row['順位入力']}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

    );
}