import { FolderApi } from '../api/folder.api';

export class FolderService {
	static async getFolders() {
		return await FolderApi.getFolders();
	}
}
