import path from 'path';

export default function(name) {
  return /(\.(js|coffee)$)/i.test(path.extname(name));
};