const path = require('path');

module.exports = {
  webpack: {
    alias: {
      "assets": path.resolve(__dirname, 'src/assets/'),
      "components": path.resolve(__dirname, 'src/components/'),
      "hooks": path.resolve(__dirname, 'src/hooks/'),
      "interfaces": path.resolve(__dirname, 'src/interfaces/'),
      "pages": path.resolve(__dirname, 'src/pages/'),
      "services": path.resolve(__dirname, 'src/services/'),
      "utils": path.resolve(__dirname, 'src/utils/'),
    }
  }
};
