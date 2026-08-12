import Card from "./components/Card";
import logo from "./assets/NavBarItems/logo-svgrepo-com.svg";

function App() {
  const data = {
    description: 10,
    visitingPrice: 3,
    rank: 345,
  };
  return (
    <div className=" bg-amber-100 text-white h-full w-full">
      <header className="text-black">
        <nav>
          <ul className="flex justify-between gap-4 min-w-10/12 min-h-24  font-bold">
            <li className="flex text-5xl font-extrabold">
              <img src={logo} className="h-14" />
              Animal-Vision
            </li>
            <li className="">HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>PROFILE</li>
          </ul>
        </nav>
      </header>
      <h1 className="bg-emerald-900 min-h-20 font-extrabold text-4xl text-center p-4 rounded-2xl w-3/4 m-auto transition-all hover:scale-110">
        Tailwind is Working
      </h1>
      <div className="flex gap-5 justify-evenly flex-wrap">
        <Card
          description="A solitary deer"
          rank={data.rank + 10}
          visitingPrice={data.visitingPrice * 13}
        />
        <Card
          description="A solitary deer"
          rank={data.rank}
          visitingPrice={data.visitingPrice}
        />
        <Card
          description="A solitary deer"
          rank={data.rank + 10}
          visitingPrice={data.visitingPrice * 13}
        />
        <Card
          description="A solitary deer"
          rank={data.rank}
          visitingPrice={data.visitingPrice}
        />
      </div>
      <div className=" bg-amber-800 min-h-46 flex justify-center items-center-safe p-8 text-center">
        <p className="text-amber-300 text-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magnam
          alias dicta fugit non vero quaerat tenetur labore ea nobis maiores
          perspiciatis laboriosam, nisi, nulla quas minima sunt voluptatem magni
          pariatur beatae. Alias inventore consectetur dignissimos illum
          delectus, tempore iure adipisci, possimus harum, incidunt nam neque
          atque veritatis blanditiis suscipit.
        </p>
      </div>
    </div>
  );
}
export default App;
