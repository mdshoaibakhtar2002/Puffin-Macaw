
import styles from '../Input.module.css';

export default function Login() {
    return (
        <div className="w-full flex justify-center flex-col items-center">
        <div className="w-1/3">
            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                Email
            </label>
            <input
                    id="price"
                    name="price"
                    type="text"
                    placeholder="youremail@gmail.com"
                    className={styles.input}
                />
        </div>
        <div className="w-1/3">
            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                Password
            </label>
            <input
                    id="price"
                    name="price"
                    type="text"
                    placeholder="youremail@gmail.com"
                    className={styles.input}
                />
        </div>
        </div>
    )
}
