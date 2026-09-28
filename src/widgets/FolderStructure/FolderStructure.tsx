import { useEffect, useState, type FC, type ReactNode } from 'react';
import { FolderAccordion } from '../../components/FolderAccordion/FolderAccordion';
import styles from './FolderStructure.module.scss';

const icons: Record<string, ReactNode> = {
	document: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			width="24"
			height="24"
			viewBox="0 0 48 48"
		>
			<path d="M 12.5 4 C 10.019 4 8 6.019 8 8.5 L 8 39.5 C 8 41.981 10.019 44 12.5 44 L 35.5 44 C 37.981 44 40 41.981 40 39.5 L 40 20 L 28.5 20 C 26.019 20 24 17.981 24 15.5 L 24 4 L 12.5 4 z M 27 4.8789062 L 27 15.5 C 27 16.327 27.673 17 28.5 17 L 39.121094 17 L 27 4.8789062 z M 17.5 25 L 30.5 25 C 31.328 25 32 25.672 32 26.5 C 32 27.328 31.328 28 30.5 28 L 17.5 28 C 16.672 28 16 27.328 16 26.5 C 16 25.672 16.672 25 17.5 25 z M 17.490234 32 L 26.486328 32 C 27.314328 32 27.986328 32.671 27.986328 33.5 C 27.987328 34.259 27.423406 34.887328 26.691406 34.986328 L 26.488281 35 L 17.492188 35 C 16.664188 35 15.992188 34.328 15.992188 33.5 C 15.992188 32.741 16.555109 32.112672 17.287109 32.013672 L 17.490234 32 z"></path>
		</svg>
	),
};

interface IFile {
	type: 'file';
}

interface IFolder {
	type: 'folder';
	children: Record<string, IFolder | IFile>;
}

type TTreeItem = IFolder | IFile;

const FolderStructureItem = ({
	name,
	item,
}: {
	name: string;
	item: TTreeItem;
}) => {
	if (item.type === 'file')
		return (
			<div className={styles.folderStructure__fileItem}>
				{icons.document} {name}
			</div>
		);

	return (
		<div style={{ paddingLeft: 20 }}>
			<FolderAccordion
				name={name}
				content={Object.entries(item.children).map(
					([childName, childItem]) => (
						<FolderStructureItem
							key={name + childName}
							name={childName}
							item={childItem}
						/>
					),
				)}
			/>
		</div>
	);
};

type TFoldersState = Record<string, Record<string, TTreeItem>>;

export const FolderStructure: FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [folderTree, setFolderTree] = useState<TFoldersState>({
		root: {},
	});

	useEffect(() => {
		fetch('http://localhost:3000/folders')
			.then(res => res.json())
			.then((data: TFoldersState) => {
				setFolderTree(data);
			})
			.catch(err => {
				console.error('fetch failed:>>', err);
			})
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div>
			<h4>Folder Structure HW</h4>
			{isLoading && <div>Loading...</div>}

			<div>
				{Object.entries(folderTree)?.map(([rootName, rootItem]) => {
					return (
						// root folders
						<FolderAccordion
							key={rootName}
							name={rootName}
							content={Object.entries(rootItem).map(
								([name, item]) => (
									// nested folders/files
									<FolderStructureItem
										key={rootName + name}
										name={name}
										item={item}
									/>
								),
							)}
						/>
					);
				})}
			</div>
		</div>
	);
};
