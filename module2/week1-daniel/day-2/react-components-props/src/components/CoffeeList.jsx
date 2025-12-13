function CoffeeList({ coffees }) {
  return (
    <>
      <h2>here are the best coffee recipes in the world</h2>
      {coffees.map((coffee) => (
        <>
          <h3>{coffee.title}</h3>
          <span>preferred temperature {coffee.temperature} C </span>
        </>
      ))}
    </>
  )
}

export default CoffeeList
