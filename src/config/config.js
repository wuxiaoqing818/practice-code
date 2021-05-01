let baseUrl;
let configUrl = "https://tb3.jkcrm.cn"
if (process.env.NODE_ENV == 'development') {
    baseUrl = 'https://tb3.jkcrm.cn';
} else if (process.env.NODE_ENV == 'debug') {
    baseUrl = '';
} else if (process.env.NODE_ENV == 'production') {
    baseUrl = 'https://tb3.jkcrm.cn';
}
let config={
    baseUrl,
    configUrl
};
export default config;