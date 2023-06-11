/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {
	const [likeCount, setLikeCount] = useState(0);

	const imgAvatar = "https://github.com/lucaswantz.png";

	function handleDeleteComment() {
		onDeleteComment(content);
	}

	function handleLikeComment() {
		setLikeCount((state) => {
			return state + 1;
		});
	}

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

						<button
							title="Deletar Comentário"
							onClick={handleDeleteComment}
						>
							<Trash size={20} />
						</button>
					</header>

					<p>{content}</p>
				</div>

				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp size={24} />
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
