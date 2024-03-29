/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
	const [comments, setComments] = useState(["Post muito bacana hein!"]);
	const [newCommentText, setNewCommentText] = useState("");

	const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });
	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

	function handleCreateNewComment(event) {
		event.preventDefault();
		
		setComments([...comments, newCommentText]);
		setNewCommentText("");
	}

	function handleNewComentChange(event) {
		event.target.setCustomValidity("");
		setNewCommentText(event.target.value);
	}

	function deleteComment(commentToDelete) {
		const commentsFiltered = comments.filter(comment => comment !== commentToDelete);
		setComments(commentsFiltered);
	}

	function handleNewCommentInvalid(event) {
		event.target.setCustomValidity("Esse campo é obrigatório");
	}

	const isNewCommentEmpty = newCommentText.length === 0;

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar hasBorder src={author.avatarUrl} />

					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
			</header>

			<div className={styles.content}>
				{content.map(line => {
					return (<p key={line.content}>
						{
							(line.type === 'paragraph' && line.content) ||
							(line.type === 'link' && <a href="">{line.content}</a>)
						}
					</p>);
				})}
			</div>

			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea
					name="comment"
					placeholder='Deixe um comentário...'
					onChange={handleNewComentChange}
					value={newCommentText}
					onInvalid={handleNewCommentInvalid}
					required
				/>

				<footer>
					<button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map(comment =>
					(
						<Comment
							key={comment}
							content={comment}
							onDeleteComment={deleteComment}
						/>
					)
				)}
			</div>
		</article>
	);
}
