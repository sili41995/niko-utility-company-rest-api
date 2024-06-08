import jwt from 'jsonwebtoken';

const generateToken = ({ id, secretKey, expiresIn }: { id: number; expiresIn: string; secretKey: string }): string => {
  const payload = { id };
  const token = jwt.sign(payload, secretKey, {
    expiresIn,
  });

  return token;
};

export default generateToken;
