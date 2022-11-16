import './App.css'

function App() {

  const parragrah = document.querySelectorAll(".parraf")
  const sections = document.querySelectorAll(".section")

  //console.log(parragrah)

  parragrah.forEach(data => {
    data.addEventListener("dragstart", e => {
      //console.log("start handle: " + data.innerText)
      data.classList.add('addColor')
      e.dataTransfer.setData("id", data.id)
    })

    data.addEventListener("dragend", () => {
      data.classList.remove('addColor')
    })
  })

  sections.forEach(data => {
    data.addEventListener("dragover", e => {
      e.preventDefault()
       //console.log("drag over")
    })

    data.addEventListener("drop", e => {
      //console.log("Drop")
      const id_p =  e.dataTransfer.getData("id")
      //console.log(id_p)
      const transferP = document.getElementById(id_p)
      data.appendChild(transferP)
    })
  })





  return (
    <div className="App">

      <div className="container">
        <div className="section">
          <h5 className='parraf' draggable='true' id="par-1">1. first</h5>
          <h5 className='parraf' draggable='true' id="par-2">2. second</h5>
        </div>
        <div className="section">
          <h5 className='parraf' draggable='true' id="par-3">3. third</h5>
          <h5 className='parraf' draggable='true' id="par-4">4. four</h5>
        </div>
      </div>

    </div>
  )
}

export default App
