'use strict';

/**
 * tender-listing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tender-listing.tender-listing');
