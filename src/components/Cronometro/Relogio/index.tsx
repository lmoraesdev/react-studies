import style from "./Relogio.module.scss";

export default function Relogio() {
	return (
		<>
			<span className={style.relogioNumero}>0</span>
			<span className={style.relogioNumero}>0</span>
			<span className={style.relogioDivisao}>:</span>
			<span className={style.relogioNumero}>0</span>
			<span className={style.relogioNumero}>0</span>
		</>
	);
}
