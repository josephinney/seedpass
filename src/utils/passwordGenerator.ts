export const generatePassword = (seed1: string, seed2: string, seed3: string): string => {
  // Simple implementation for demo - in production use a library like crypto-js
  const combinedSeeds = `${seed1}+${seed2}+${seed3}`;
  let hash = 0;
  for (let i = 0; i < combinedSeeds.length; i++) {
    const char = combinedSeeds.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  
  // Convert hash to password
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
  let password = '';
  const seed = Math.abs(hash);
  
  for (let i = 0; i < 16; i++) {
    const randomIndex = (seed + i * 123) % charset.length;
    password += charset[randomIndex];
  }
  
  return password;
};