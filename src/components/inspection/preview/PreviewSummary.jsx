function PreviewSummary({ defects, checkedQuantity }) {
  const totalDefects = Object.values(defects).reduce((sum, count) => sum + count, 0);
  const defectRate = checkedQuantity > 0 ? (totalDefects / checkedQuantity) * 100 : 0;

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-sm text-gray-600">Total Defects</p>
          <p className="text-xl font-bold">{totalDefects}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Checked Quantity</p>
          <p className="text-xl font-bold">{checkedQuantity}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Defect Rate</p>
          <p className="text-xl font-bold">{defectRate.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
}

export default PreviewSummary;
