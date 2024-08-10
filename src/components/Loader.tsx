import style from './Loader.module.css'

export default function Loader() {
    return (
        <div className={style.loader}>
            <div className={style.loader_text}>Loading...</div>
            <div className={style.loader_bar}></div>
        </div>
    )
}