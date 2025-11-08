import { useState, useRef } from "react"
import { login } from "../../api/auth"
import { useNavigate } from "react-router-dom"

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState("")
  const usernameRef = useRef()
  const passwordRef = useRef()
  let navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    let username = usernameRef.current.value
    let password = passwordRef.current.value

    let data = await login(username, password)

    console.log(data)

    setErrorMessage(data.errorMessage)

    if (!data.errorMessage) {
      navigate('/')

    }
  }

  return (<>
    <div className="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img src="DGF MARKET.png" alt="Your Company" className="mx-auto h-24 w-auto" />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleLogin} action="#" method="POST" className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">Username</label>
            <div className="mt-2">
              <input ref={usernameRef} id="username" type="text" name="username" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
            </div>
            <div className="mt-2">
              <input ref={passwordRef} id="password" type="password" name="password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6" />
            </div>
            <div className="mt-2">
              <p className=" text-red-600 hover:text-red-500">{errorMessage}</p>
            </div>
          </div>


          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-purple-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">Sign in</button>
          </div>
        </form>

      </div>
    </div >

  </>)
}
