/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-unresolved
import db from '../../../db.json';

export default function (req, res) {
  res.json(db);
}
