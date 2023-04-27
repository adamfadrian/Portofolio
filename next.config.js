/** @type {import('next').NextConfig} */

const { parsed: localEnv } = require('dotenv').config()
module.exports = {
  reactStrictMode: true,
    env: {
      ...localEnv
    }

}
