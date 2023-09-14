import express from 'express';
import finding from './finding';

const router = express.Router();

export default (): express.Router => {
  finding(router);

  return router;
};
