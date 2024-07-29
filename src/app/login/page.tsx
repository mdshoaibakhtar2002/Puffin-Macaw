
import styles from '../Custom.module.css';
import Link from 'next/link'

export default function Login() {
    return (
        <div className="w-full flex justify-center flex-col items-center h-[75vh]">
            <div className="w-1/2 flex justify-center flex-col items-center p-4">
                <div className="w-8/12">
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <input
                        id="price"
                        name="price"
                        type="text"
                        className={styles.input}
                    />
                </div>
                <div className="w-8/12 mt-2">
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <input
                        id="price"
                        name="price"
                        type="text"
                        className={styles.input}
                    />
                </div>

                <div className="w-8/12 mt-6 text-center">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-rose-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
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
