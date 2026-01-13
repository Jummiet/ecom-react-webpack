
export default function Checkout(){
  return (
    <div className="container">
      <h1>Checkout</h1>
      <form>
        <fieldset>
          <legend>Billing</legend>
          <label>Full name <input required /></label>
        </fieldset>
        <button type="submit">Pay now</button>
      </form>
    </div>
  );
}
