function Logs({ logsState }) {
  const { details, logs } = logsState;

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getLogContent = (log) => {
    switch (log.type) {
      case 'defect-add':
        return {
          defectAdd: `${log.defectName} (+1)`,
          defectRemove: '',
          outputAdd: '',
          outputRemove: ''
        };
      case 'defect-remove':
        return {
          defectAdd: '',
          defectRemove: `${log.defectName} (-1)`,
          outputAdd: '',
          outputRemove: ''
        };
      case 'output-add':
        return {
          defectAdd: '',
          defectRemove: '',
          outputAdd: `+${log.quantity}`,
          outputRemove: ''
        };
      case 'output-remove':
        return {
          defectAdd: '',
          defectRemove: '',
          outputAdd: '',
          outputRemove: `-${log.quantity}`
        };
      default:
        return { defectAdd: '', defectRemove: '', outputAdd: '', outputRemove: '' };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">User Logs</h1>
        
        {details && (
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-medium">Date:</span> {details.date.toLocaleDateString()}</p>
                <p><span className="font-medium">Factory:</span> {details.factory}</p>
                <p><span className="font-medium">Line No:</span> {details.lineNo}</p>
              </div>
              <div>
                <p><span className="font-medium">Style:</span> {details.styleCode}{details.styleDigit}</p>
                <p><span className="font-medium">Customer:</span> {details.customer}</p>
                <p><span className="font-medium">MO No:</span> {details.moNo}</p>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 sticky top-0">
                <tr className="text-xs">
                  <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">
                    Defect +
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">
                    Defect -
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">
                    Checked Qty +
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider">
                    Checked Qty -
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-xs">
                {logs.map((log, index) => {
                  const content = getLogContent(log);
                  return (
                    <tr key={index}>
                      <td className="px-4 py-2 whitespace-nowrap text-gray-900">
                        {formatTime(log.timestamp)}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-gray-900">
                        {content.defectAdd}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-gray-900">
                        {content.defectRemove}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-gray-900">
                        {content.outputAdd}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-gray-900">
                        {content.outputRemove}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logs;
