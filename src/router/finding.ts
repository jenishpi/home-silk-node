import express from 'express';

import { findingGroup } from '../controllers/finding-group';
import { findingRaw } from '../controllers/finding-raw';

export default (router: express.Router) => {
  router.get('/finding/group', findingGroup);
  router.get('/finding/raw', findingRaw);
};