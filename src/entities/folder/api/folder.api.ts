import type { GetFolderResponseModel } from '../model/getFolderResponse.model';

export class FolderApi {
	static async getFolders(): Promise<GetFolderResponseModel> {
		return await fetch('http://localhost:3000/folders').then(res =>
			res.json(),
		);
	}
}
