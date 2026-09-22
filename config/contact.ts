// Add social links only once the studio's actual profile URLs are available.
export const contactConfig: {
  email: string;
  submissionEndpoint: string | null;
  socials: { label: string; url: string }[];
} = {
  email: 'hello@reyalabs.tech',
  submissionEndpoint: null,
  socials: [],
};
