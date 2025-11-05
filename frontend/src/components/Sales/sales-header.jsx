import { useEffect, useState, useRef } from "react"
import { getCurrentDate } from "../../utils/date"

export default function SalesHeader({ handleChangeDate }) {
  const inputDateRef = useRef()

  return (<>
    <div className="w-full">
      <div>
        <p className="font-bold">Sales</p>
      </div>
      <div>
        <input ref={inputDateRef} onChange={(e) => handleChangeDate(e.target.value)} type="date" />
      </div>

    </div>
  </>)
}
