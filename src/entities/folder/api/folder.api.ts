import type { GetFolderResponseModel } from '../model/getFolderResponse.model';

export class FolderApi {
	static async getFolders(): Promise<GetFolderResponseModel> {
		const res = await fetch('http://localhost:3000/folders');

		if (!res.ok) throw new Error(`HTTP ${res.status}`);

		return res.json();
	}
}
