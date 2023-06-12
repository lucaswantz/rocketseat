import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
	const imgCover = "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50";
	const imgAvatar = "https://github.com/diego3g.png";

	return (
		<aside className={styles.sidebar}>
			<img className={styles.cover} src={imgCover} />

			<div className={styles.profile}>
				<Avatar	src={imgAvatar} />

				<strong>Lucas W. da Motta</strong>
				<span>Desenvolvedor Pleno</span>
			</div>

			<footer >
				<a href="#">
					<PencilLine size={20}/>
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);
}
