export function encodeToUri(text = '') {
	if (!text) return text;
	return text
		.split(' ')
		.map(textClip => textClip.toLowerCase())
		.join('-');
}

export function decodeFromUri(uri = '') {
	if (!uri) return uri;
	return uri
		.split('-')
		.map(textClip => textClip[0].toUpperCase() + textClip.slice(1))
		.join(' ');
}
