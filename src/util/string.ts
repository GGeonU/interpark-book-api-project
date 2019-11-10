export function shortenStr(origin: string, length: number = 20, suffix: boolean = true) {
	const shortened = origin.substr(0, length);
	return shortened + (suffix && origin.length > length ? '..' : '');
}


export function convertSystemStr(str: string) {
	if (str == null) {
		return "";
	}
	
	return str
		.replace(/&amp/g, '&')
		.replace(/&lt/g, '<')
		.replace(/&gt/g, '>')
		.replace(/&quot/g, '"')
		.replace(/&#34/g, '"')
		.replace(/&#39/g, "'")
}