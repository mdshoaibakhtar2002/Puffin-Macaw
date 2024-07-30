
import styles from '../Custom.module.css';
import Link from 'next/link'

export default function Login() {
    return (
        <div className="w-full flex justify-center flex-col items-center h-[85vh]">
            <div className="w-1/2 flex justify-center flex-col items-center p-4">
                <div className="w-8/12">
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Name
                    </label>
                    <input
                        id="price"
                        name="price"
                        type="text"
                        className={styles.input}
                    />
                </div>
                <div className="w-8/12">
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Mobile number
                    </label>
                    <input
                        id="price"
                        name="price"
                        type="text"
                        className={styles.input}
                    />
                </div>
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
                <div className="w-8/12 mt-2">
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Confirm password
                    </label>
                    <input
                        id="price"
                        name="price"
                        type="text"
                        className={styles.input}
                    />
                </div>

                <div className="w-8/12 mt-2 flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
                </div>

                <div className="w-8/12 mt-6 text-center">
                    <button
                        className="block w-full rounded-md bg-gray-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-820 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-820"
                        type="submit"
                    >
                        Create account <span aria-hidden="true">&rarr;</span>
                    </button>
                </div>
                <div className="w-8/12 mt-6 text-center flex justify-between">
                    <p className="text-sm mt-4">Already have an account? <Link href='/login' className='underline underline-offset-2 mt-4 text-sm'>Log in</Link></p>
                </div>
            </div>
        </div>
    )
}
