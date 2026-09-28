export interface IFile {
	type: 'file';
}

export interface IFolder {
	type: 'folder';
	children: Record<string, IFolder | IFile>;
}

export type TTreeItem = IFolder | IFile;
