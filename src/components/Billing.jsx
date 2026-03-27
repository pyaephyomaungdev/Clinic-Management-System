export default function Billing() {
  const invoices = [
    { id: "INV-001", patient: "Alice Johnson", amount: "$120.00", status: "Paid" },
    { id: "INV-002", patient: "Robert Smith", amount: "$450.00", status: "Pending" },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900">Billing & Invoices</h2>
        <button className="bg-indigo-600 text-white px-5 py-2 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
          + New Invoice
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-slate-500 text-sm">Total Revenue</p>
          <h3 className="text-2xl font-bold text-slate-900">$24,500.00</h3>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-slate-500 text-sm">Pending Invoices</p>
          <h3 className="text-2xl font-bold text-blue-600">12</h3>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-600 text-sm uppercase">
            <tr>
              <th className="p-4">Invoice ID</th>
              <th className="p-4">Patient</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} className="border-t border-slate-50">
                <td className="p-4 font-mono text-sm">{inv.id}</td>
                <td className="p-4 font-semibold">{inv.patient}</td>
                <td className="p-4">{inv.amount}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    inv.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {inv.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}