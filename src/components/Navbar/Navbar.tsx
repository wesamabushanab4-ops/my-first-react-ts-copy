export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-teal-800 text-white px-8 py-4">
      <h2 className="text-2xl font-bold">
        CodeSpace
      </h2>
      <div className="flex gap-8">
        <a className="transition-colors hover:text-teal-200" href="#home">Home</a>
        <a className="transition-colors hover:text-teal-200" href="#products">Products</a>
        <a className="transition-colors hover:text-teal-200" href="#about">About</a>
        <a className="transition-colors hover:text-teal-200" href="#contact">Contact</a>
      </div>
    </nav>
  )
}
