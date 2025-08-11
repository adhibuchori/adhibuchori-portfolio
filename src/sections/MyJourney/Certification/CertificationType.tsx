export type CertificationType = {
  name: string;
  issuer: string;
  logo: string;
  issueDate: string;
  expirationDate?: string;
  credentialId: string;
  url?: string;
  skills?: string[];
};
