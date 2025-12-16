function CarCard({ car, handleDelete }) {
  return (
    <div key={car.id} className="car-item">
      <h3>
        {car.make} - {car.model}
      </h3>
      <img
        src={
          car.image
            ? car.image
            : "https://www.shutterstock.com/image-vector/car-logo-icon-emblem-design-260nw-473088025.jpg"
        }
        alt="car image 👍"
      />

      {/* conditional rendering */}
      <span>has leather seats? {car.leatherSeats ? "✅" : "❌"}</span>
      <span>{car.engine.includes("Electric") && "this is electric 🪫"}</span>
      {/* delete car */}
      <button onClick={() => handleDelete(car.id)}>delete</button>
    </div>
  )
}

export default CarCard
