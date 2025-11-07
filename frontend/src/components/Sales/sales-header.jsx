import { useEffect, useState, useRef } from "react"
import { getCurrentDate } from "../../utils/date"

export default function SalesHeader({ handleChangeDate }) {
  const fromDateRef = useRef()
  const toDateRef = useRef()

  const handleInputDate = () => {
    let fromDateValue = fromDateRef.current.value
    let toDateValue = toDateRef.current.value

    handleChangeDate(fromDateValue, toDateValue)
  }


  return (<>
    <div className="w-full flex flex-col gap-4">
      <div>
        <p className="font-bold">Sales History</p>
      </div>
      <div className="w-full flex flex-row justify-right">
        <div className="flex flex-row gap-4">
          <input className="border" ref={fromDateRef} onChange={handleInputDate} type="date" />
          <p>to</p>
          <input className="border" ref={toDateRef} onChange={handleInputDate} type="date" />
        </div>
      </div>
    </div>
  </>)
}
