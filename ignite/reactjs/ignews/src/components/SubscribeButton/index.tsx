import { useSession, signIn } from 'next-auth/client';
import styles from './styles.module.scss';

interface SubscribeButtonProps {
	priceId: string;
}

// getServerSideProps (SSR)
//
export function SubscribeButton({ priceId }: SubscribeButtonProps) {
	const [session] = useSession();

	function handleSubscribe() {
		if (!session) {
			signIn('github');
			return;
		}

		// criacao da chekcout session

	}

	return (
		<button type="button" className={styles.subscribeButton} onClick={handleSubscribe}>
			Subscribe now
		</button>
	);
}
