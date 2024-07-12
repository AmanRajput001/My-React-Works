import ListMap from "./Map/ListMap.jsx"
import ListFilter from './Filter/ListFilter.jsx'

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: "35" },
    { id: 2, name: "Mango", calories: "68" },
    { id: 3, name: "Banana", calories: "25" },
    { id: 4, name: "Pineapple", calories: "65" }
  ];

  const vegetables = [
    { id: 1, name: "Green Chilly", calories: "15" },
    { id: 2, name: "Potato", calories: "25" },
    { id: 3, name: "Pea", calories: "25" },
    { id: 4, name: "Beans", calories: "65" }
  ];
  return (
    <>
      <div className="bg-danger text-white p-2">
        <h1>Map Use</h1>

        <ListMap items={fruits}></ListMap>
        <ListMap items={vegetables}></ListMap>
      </div>

      <div className="bg-warning text-white p-2">
        <h1>Filter Use</h1>

        <ListFilter items={fruits}></ListFilter>
        <ListFilter items={vegetables}></ListFilter>
      </div>
    </>
  )
}

export default App
