export default function FineCalculation() {
  const lateDays = 3;
  const finePerDay = 10;
  const totalFine = lateDays * finePerDay;

  return (
    <div className="container">
      <h2>Fine Calculation</h2>

      <p>Late Days: {lateDays}</p>
      <p>Fine per Day: {finePerDay} Baht</p>
      <h3>Total Fine: {totalFine} Baht</h3>

      <button>Mark as Paid</button>
    </div>
  );
}
