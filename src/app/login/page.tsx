
import styles from '../Custom.module.css';
import Link from 'next/link'

export default function Login() {
    return (
        <div className="w-full flex justify-center flex-col items-center h-[85vh]">
            <div className="w-1/2 flex justify-center flex-col items-center p-4">
                <div className="relative rounded-md shadow-sm w-8/12 mt-4">
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
</svg>
                        </span>
                        </div>
                        <input
                        id="email"
                        name="email"
                        type="text"
                        // placeholder="0.00"
                        className={styles.input}
                        // className="focus: outline-none focus: shadow-slate-400 focus:border-slate-400 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                <div className="relative rounded-md shadow-sm w-8/12 mt-4">
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
</svg>

                        </span>
                        </div>
                        <input
                        id="password"
                        name="password"
                        type="text"
                        // placeholder="0.00"
                        className={styles.input}
                        // className="focus: outline-none focus: shadow-slate-400 focus:border-slate-400 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>

                <div className="w-8/12 mt-6 text-center">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-gray-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-820 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-820"
                    >
                        Log in <span aria-hidden="true">&rarr;</span>
                    </button>
                </div>
                <div className="w-8/12 mt-6 text-center flex justify-between">
                    <Link href='/' className='underline underline-offset-2 mt-4 text-sm'>Forgot password?</Link>
                    <p className="text-sm mt-4">Don't have an account? <Link href='/signup' className='underline underline-offset-2 mt-4 text-sm'>Create new account</Link></p>
                </div>
            </div>
        </div>
    )
}
