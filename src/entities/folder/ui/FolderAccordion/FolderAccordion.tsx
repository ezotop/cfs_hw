import type { FC, ReactNode } from 'react';
import { Accordion } from '../../../../shared/ui/Accordion/Accordion';
import styles from './FolderAccordion.module.scss';

const icons: Record<string, ReactNode> = {
	folder: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path d="M20,6h-8l-1.414-1.414C10.211,4.211,9.702,4,9.172,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8 C22,6.9,21.1,6,20,6z"></path>
		</svg>
	),
	folder_opened: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			width="24"
			height="24"
			viewBox="0 0 48 48"
		>
			<path d="M 8.5 8 C 6.019 8 4 10.019 4 12.5 L 4 35.5 C 4 35.917 4.0746406 36.312312 4.1816406 36.695312 C 4.2226406 36.543312 4.2643125 36.391188 4.3203125 36.242188 L 5.5390625 33 L 6.6152344 30.132812 L 9.3359375 22.890625 C 10.209938 20.562625 12.467125 19 14.953125 19 L 42 19 L 42 17.5 C 42 15.019 39.981 13 37.5 13 L 24.042969 13 L 19.572266 9.2734375 C 18.586266 8.4514375 17.335734 8 16.052734 8 L 8.5 8 z M 14.953125 22 C 13.703125 22 12.583531 22.775312 12.144531 23.945312 L 7.1308594 37.296875 C 6.6388594 38.603875 7.6049531 40 9.0019531 40 L 38.046875 40 C 39.296875 40 40.416469 39.224688 40.855469 38.054688 L 45.865234 24.714844 C 46.366234 23.405844 45.400047 22 43.998047 22 L 14.953125 22 z"></path>
		</svg>
	),
};

interface IFolderAccordionProps {
	name: string;
	content?: ReactNode;
}

export const FolderAccordion: FC<IFolderAccordionProps> = ({
	name,
	content,
}) => {
	return (
		<Accordion
			trigger={opened => (
				<div className={styles.folderAccordion__trigger}>
					{opened ? icons.folder_opened : icons.folder} {name}
				</div>
			)}
			content={content}
		/>
	);
};
