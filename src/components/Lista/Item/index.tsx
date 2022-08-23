import style from '../lista.module.scss'

export default function Item({tarefa, tempo}: {tarefa:string, tempo:string}){
	return(
			<li className={style.item}>
		<h3>
			{tarefa}
		</h3>
		<span>
			{tempo}
		</span>
	</li>
	)
}
