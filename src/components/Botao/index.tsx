import React from "react";
import style from "./Botao.module.scss";
class Botao extends React.Component<
	any,
	{ type?: "button" | "submit" | "reset" | undefined }
> {
	render(): React.ReactNode {
		const { type = "button" } = this.props;
		return (
			<button type={type} className={style.botao}>
				{this.props.children}
			</button>
		);
	}
}

export default Botao;
