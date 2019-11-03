export function shortenStr(origin: string, length: number = 20, suffix: boolean = true) {
	const shortened = origin.substr(0, length);
	return shortened + (suffix && origin.length > length ? '..' : '');
}
