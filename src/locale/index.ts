import { LANG } from '#config';

const messages = {
	required: {
		ptBr: 'O campo {path} é obrigatório!'
	},
	formtEmailError: {
		ptBr: 'Deve ser fornecido um email válido!'
	},
	incorrectLength: {
		ptBr: 'O campo {path} deve conter {length}'
	}
};

type KeyMessage = keyof typeof messages;

export const getMessage = (
	key: KeyMessage,
	options: Record<string, string>
) => {
	if (!options) {
		return messages[key][LANG];
	}

	const msg = Object.keys(options).reduce((acc, current) => {
		const newMsg = acc.replace(`{${current}}`, options[current]);
		return newMsg;
	}, messages[key][LANG]);

	return msg;
};
