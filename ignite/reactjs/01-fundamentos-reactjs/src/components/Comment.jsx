/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content }) {
	const imgAvatar = "https://github.com/lucaswantz.png";

	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src={imgAvatar}/>

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Lucas W. da Motta</strong>
							<time title="11 de maio às 08:13" dateTime="2022-05-11 08:13">Cerca de 1h atrás</time>
						</div>

						<button title="Deletar Comentário">
							<Trash size={20} />
						</button>
					</header>

					<p>{content}</p>
				</div>

				<footer>
					<button>
						<ThumbsUp size={24} />
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
