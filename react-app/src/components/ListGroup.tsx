function ListGroup() {
  let states = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];
  states = [];
  /* Different ways to write condition rendering*/

  // if (states.length == 0) return <p> no item found</p>;
  // const message = states.length == 0 ? <p>No Item Found</p> : null;

  const getMessage = () => {
    return states.length == 0 ? <p>No Item Found</p> : null;
  };
  return (
    <>
      <h1>LIST </h1>
      {states.length == 0 ? <p>No Item Found</p> : null}
      {states.length == 0 && (
        <p>No Item Found : true && 'Mosh' returns 'Mosh' in JS</p>
      )}
      <ul className="list-group">
        {states.map((state) => (
          <li className="list-group-item" key={state}>
            {state}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
