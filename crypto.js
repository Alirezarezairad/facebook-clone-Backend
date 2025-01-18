import crypto from 'crypto';

// Generiere eine Zufallszahl und konvertiere sie in Hex-Format
const randomHex = crypto.randomBytes(69).toString("hex");

console.log(randomHex);
