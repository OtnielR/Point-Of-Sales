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
        <p className="font-bold text-3xl">Sales History</p>
      </div>
      <div className="w-full flex flex-row justify-end items-end">
        <div className="flex flex-row gap-4 items-center">
          <input className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" ref={fromDateRef} onChange={handleInputDate} type="date" />
          <p>To</p>
          <input className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600" ref={toDateRef} onChange={handleInputDate} type="date" />
        </div>
      </div>
    </div>
  </>)
}
