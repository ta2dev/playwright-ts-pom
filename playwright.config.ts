import { PlaywrightTestConfig } from '@playwright/test'


const config: PlaywrightTestConfig = {
    timeout: 180 * 1000,
    workers: 1,
    fullyParallel: true,

    use: {
        headless: false,
        viewport: null,
        colorScheme: 'light',
        screenshot: 'on',
        video: 'retain-on-failure'
    },
    retries: 1,
    reporter: [
        ['list'],
        ['html', { open: 'never' }]
    ],
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' }
        }
    ]
}

export default config;