import { useState } from 'react'

export default function UserStatus() {
  const [online, setOnline] = useState(false)

  function toggleStatus() {
    setOnline((current) => !current)
  }

  return (
    <div className="status-content">
      <p className={online ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}>
        {online ? 'Online' : 'Offline'}
      </p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={toggleStatus}
        type="button"
      >
        Change Status
      </button>
    </div>
  )
}
