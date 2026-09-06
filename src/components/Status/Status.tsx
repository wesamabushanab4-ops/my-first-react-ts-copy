import { useState } from 'react'

export default function Status() {
  const [active, setActive] = useState(false)

  function changeStatus() {
    setActive(!active)
  }

  return (
    <div className="status-content">
      <p className={active ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}>
        {active ? 'Active' : 'Inactive'}
      </p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={changeStatus}
        type="button"
      >
        Change Status
      </button>
    </div>
  )
}
