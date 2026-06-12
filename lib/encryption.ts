import { randomBytes, createCipheriv, createDecipheriv, createHash, scryptSync } from 'crypto';

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 16;
const PREFIX = 'enc:';

function getKey(): Buffer {
    const secret = process.env.ENCRYPTION_KEY;
    if (!secret) {
        throw new Error('ENCRYPTION_KEY environment variable is required');
    }
    return scryptSync(secret, 'flexurl-encryption-salt', 32);
}

export function encrypt(text: string): string {
    const key = getKey();
    const iv = randomBytes(IV_LENGTH);
    const cipher = createCipheriv(ALGORITHM, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    const authTag = cipher.getAuthTag().toString('hex');
    return `${PREFIX}${iv.toString('hex')}:${authTag}:${encrypted}`;
}

export function decrypt(encryptedStr: string): string {
    if (!encryptedStr.startsWith(PREFIX)) {
        return encryptedStr;
    }
    const key = getKey();
    const payload = encryptedStr.slice(PREFIX.length);
    const parts = payload.split(':');
    const iv = Buffer.from(parts[0], 'hex');
    const authTag = Buffer.from(parts[1], 'hex');
    const ciphertext = parts.slice(2).join(':');
    const decipher = createDecipheriv(ALGORITHM, key, iv);
    decipher.setAuthTag(authTag);
    let decrypted = decipher.update(ciphertext, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

export function hashEmail(email: string): string {
    return createHash('sha256').update(email.trim().toLowerCase()).digest('hex');
}
