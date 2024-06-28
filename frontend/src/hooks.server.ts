import * as Sentry from '@sentry/sveltekit';
import type { HandleServerError } from '@sveltejs/kit';
import { PUBLIC_DEPLOY_ENV } from '$env/static/public';

const env = PUBLIC_DEPLOY_ENV || 'dev';

Sentry.init({
	environment: env,
	dsn: 'https://aaec500c8d0db761a41b3a9fd0d765a1@o4507509662679040.ingest.us.sentry.io/4507509664317440',
	tracesSampleRate: 1.0,

	// This sets the sample rate to be 10%. You may want this to be 100% while
	// in development and sample at a lower rate in production
	replaysSessionSampleRate: env == 'dev' ? 1 : 0.1,

	// If the entire session is not sampled, use the below sample rate to sample
	// sessions when an error occurs.
	replaysOnErrorSampleRate: 1.0
});

export const handleError: HandleServerError = async ({ error, event, status, message }) => {
	const errorId = crypto.randomUUID();

	// example integration with https://sentry.io/
	Sentry.captureException(error, {
		extra: { event, errorId, status }
	});

	return {
		message,
		errorId
	};
};
