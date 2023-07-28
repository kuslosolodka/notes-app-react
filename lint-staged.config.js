export default {
    '*.{json,md,scss,html,js}': () => 'npm run lint:prettify',
    'src/**/*.{ts,tsx}': () => 'npm run lint:js',
    'src/**/*.{tsx,ts}': () => 'npm run lint:css',
}
