import { ControlPanel, User } from './components';
import styles from './App.module.css';

export const App = () => {
	return (
		<div className={styles.app}>
			<User />
			<ControlPanel />
		</div>
	);
};
