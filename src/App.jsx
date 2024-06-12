import Header from "./components/comp/header/Header";
import 'flowbite/dist/flowbite.min.css';
import Slider from "./components/comp/slider/Slider";
export default function App() {
  return (
    <>
      <Header />
      <Slider />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

    </>
  )
}