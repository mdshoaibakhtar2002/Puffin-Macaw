'use client'
import style from './Loader.module.css'
import { useMyContext } from '../app/context/MyContext';

export default function Loader() {
    const { state } = useMyContext();
    return (
        <div className={state ? style.loader : 'hidden'}>
            <div className={style.loader_text}>Loading...</div>
            <div className={style.loader_bar}></div>
        </div>
    )
}