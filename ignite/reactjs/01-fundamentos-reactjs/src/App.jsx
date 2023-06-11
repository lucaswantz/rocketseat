import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/lucaswantz.png",
			name: "Lucas W. da Motta",
			role: "Desenvolvedor Pleno"
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋"},
			{ type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
			{ type: 'link', content: "jane.design/doctorcare"},
			{ type: 'link', content: "#novoprojeto"},
		],
		publishedAt: new Date('2023-05-03 20:00:00'),
	},
	{
		id: 2,
		author: {
			avatarUrl: "https://github.com/maykbrito.png",
			name: "Mayk Brito",
			role: "Professor"
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋"},
			{ type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
			{ type: 'link', content: "jane.design/doctorcare"},
			{ type: 'link', content: "#novoprojeto"},
		],
		publishedAt: new Date('2022-05-03 20:00:00'),
	}
]

export function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map(post => {
						return <Post
							key={post.id}
							author={post.author}
							content={post.content}
							publishedAt={post.publishedAt}
						/>
					})}
				</main>
			</div>
		</div>
	);
}
