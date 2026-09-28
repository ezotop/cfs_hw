import { useState, type FC, type ReactNode } from 'react';
import styles from './Accordion.module.scss';

export interface IAccordionProps {
	preopened?: boolean;
	trigger: (opened: boolean) => ReactNode;
	content: ReactNode;
}

export const Accordion: FC<IAccordionProps> = ({
	preopened,
	trigger,
	content,
}) => {
	const [opened, setOpened] = useState<boolean>(!!preopened);

	const handleTriggerClick = (): void => {
		setOpened(prev => !prev);
	};

	return (
		<div className={styles.accordion}>
			<div
				className={styles.accordion__trigger}
				onClick={handleTriggerClick}
			>
				<span
					className={styles.accordion__icon}
					style={{ rotate: opened ? '0deg' : '-90deg' }}
				>
					<svg
						width="14"
						height="8"
						viewBox="0 0 14 8"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 1L7 7L13 1"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</span>

				<div>{trigger(opened)}</div>
			</div>
			{opened && (
				<div className={styles.accordion__content}>{content}</div>
			)}
		</div>
	);
};
