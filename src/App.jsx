import Game from "./Game";


const App = () => {
  return (
    <div className="w-full min-h-full bg-gradient-to-br to-blue-950 from-black text-white text-lg">

      {/* Navbar */}
      <div className="w-full sticky top-0 z-20">
        <div className=" bg-gradient-to-l from-gray-950 to bg-blue-950 mx-auto flex justify-center p-4">
          <img src="logo.png" alt="logo" className="w-[120px]" />
        </div>
      </div>

      <div className="p-4">
        <Game />
      </div>


      <div className="bg-gradient-to-l from-gray-950 to bg-blue-950 mx-auto flex justify-between p-4">
        <h1>React.js</h1>
        <h1>Created By MarianoD27</h1>
      </div>

    </div>
  )

}

export default App;