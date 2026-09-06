export default function UserCard() {
  return (
    <div className="w-80 bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900">Dana Cohen</h2>
      <p className="mt-3 text-gray-600">Email: dana@example.com</p>
      <p className="mt-1 text-gray-600">Job: Full Stack Developer</p>
      <button className="mt-5 bg-blue-500 text-white px-4 py-2 rounded" type="button">
        Show Profile
      </button>
    </div>
  )
}
