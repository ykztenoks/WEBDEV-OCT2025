const carsArray = [
  {
    model: "S-Class",
    make: "Mercedes",
    year: 2020,
    engine: "3.5L V6",
    leatherSeats: true,
    image:
      "https://cdn.dealeraccelerate.com/pinnacle/1/367/21977/1920x1440/2020-mercedes-benz-s-class-s-450-sedan",
    id: "a4bc22b9-f7ca-4818-a3d0-8fd17de14b31",
  },
  {
    model: "RAV4",
    make: "Toyota",
    year: 2017,
    engine: "Electric",
    leatherSeats: false,
    image: "https://cdn.motor1.com/images/mgl/YL6Le/s1/toyota-rav4-2017.jpg",
    id: "7474a200-6fe4-41de-8260-35a4cc7a2d1e",
  },
  {
    model: "R8",
    make: "Audi",
    year: 2019,
    engine: "2.5L Turbo",
    leatherSeats: false,
    image: "https://cdn.motor1.com/images/mgl/q3Qpv/s3/2019-audi-r8.jpg",
    id: "3581b8e9-6c43-413e-b87c-3c45e1ca4a67",
  },
  {
    model: "3 Series",
    make: "BMW",
    year: 2022,
    engine: "2.0L I4",
    leatherSeats: false,
    image:
      "https://cdn.motor1.com/images/mgl/XBB6wV/s1/2022-bmw-3er-limousine.jpg",
    id: "6dced33b-4e1c-47fa-b27a-b90343e6c13f",
  },
  {
    model: "Rogue",
    make: "Nissan",
    year: 2017,
    engine: "Electric",
    leatherSeats: true,
    id: "cc405ac4-8a4d-4160-800d-8e8eb54b2890",
  },
  {
    model: "GT-R",
    make: "Nissan",
    year: 2021,
    engine: "5.0L V8",
    leatherSeats: true,
    image: "https://cdn.motor1.com/images/mgl/JJkj4/s3/nissan-gt-r-t-spec.jpg",
    id: "02c75001-b0e8-4c3d-873d-53dccd9e147e",
  },
  {
    model: "Civic",
    make: "Honda",
    year: 2017,
    engine: "3.5L V6",
    leatherSeats: false,
    id: "7bee2774-658d-46d9-aec3-0c80f332b782",
  },
  {
    model: "Silverado",
    make: "Chevrolet",
    year: 2015,
    engine: "2.0L I4",
    leatherSeats: false,
    id: "da361079-ec9c-4be0-9f31-3a99551dc951",
  },
  {
    model: "E-Class",
    make: "Mercedes",
    year: 2025,
    engine: "4.0L V8",
    leatherSeats: true,
    id: "5ca9582c-0240-4b11-a404-b5d48be539b0",
  },
  {
    model: "Rogue",
    make: "Nissan",
    year: 2015,
    engine: "Electric",
    leatherSeats: false,
    id: "5050cb9a-310c-4780-97fe-34b75110fb3d",
  },
]
import toast from "react-hot-toast"
import { useState } from "react"
import CarCard from "./CarCard"

function CarList() {
  const [cars, setCars] = useState(carsArray)

  // function handleDelete(){}

  const handleDelete = (id) => {
    setCars(cars.filter((car) => car.id !== id))
    toast.success("deleted")
  }

  return (
    <div>
      <h3>Car list:</h3>
      <hr />
      <div className="car-list">
        {cars.map((car) => (
          <CarCard car={car} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  )
}

export default CarList
