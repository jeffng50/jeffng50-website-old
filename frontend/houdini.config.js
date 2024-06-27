/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: {
		url: 'http://localhost:1337/graphql'
	},
	plugins: {
		'houdini-svelte': {}
	},
	scalars: {
		JSON: {
			type: 'JSON',
			// turn the api's response into that type
			unmarshal(val) {
				return val ? JSON.stringify(val) : null;
			},
			// turn the value into something the API can use
			marshal(json) {
				return json && JSON.parse(json);
			}
		},
		DateTime: {
			type: 'Date',
			// turn the api's response into that type
			unmarshal(val) {
				return val ? new Date(val) : null;
			},
			// turn the value into something the API can use
			marshal(date) {
				return date && date.getTime();
			}
		}
	}
};

export default config;
