export const apiVersion = '2025-02-24';

export const dataset = assertValue(
  'production',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
  'e2glo6ep',
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

console.log(
  'Sanity Project ID:',
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
);
console.log('Sanity Dataset:', 'production');
console.log('Sanity API Version:', '2025-02-24');

function assertValue<T>(
  v: T | undefined,
  errorMessage: string
): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v;
}
