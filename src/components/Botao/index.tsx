import React from 'react';
import style from './botao.module.scss';

class Botao extends React.Component <{children:React.ReactNode}>{
	render(): React.ReactNode {
		return(
			<button className={style.botao}>
				{this.props.children}
			</button>
		)
	}
}

export default Botao;
