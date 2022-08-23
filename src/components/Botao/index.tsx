import React from 'react';
import style from './botao.module.scss';

class Botao extends React.Component{
	render(): React.ReactNode {
		return(
			<button className={style.botao}>
				Botão
			</button>
		)
	}
}

export default Botao;
