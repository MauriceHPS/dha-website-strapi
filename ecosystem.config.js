module.exports = {
  apps: [{
    name: 'dha-cms',
    script: 'yarn',
    args: 'develop',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    cwd: '/home/vpd/projects/strapi/test-apps/dha-cms',
    env_file: '.env',
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log'
  }]
};
