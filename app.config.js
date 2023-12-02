export default () => {
  return {
    expo: {
      scheme: 'your-app-iit',
      name: 'project-app',
      slug: 'project-app',
      version: '1.0.0',
      orientation: 'portrait',
      icon: './assets/icon.png',
      userInterfaceStyle: 'light',
      splash: {
        image: './assets/splash.png',
        resizeMode: 'contain',
        backgroundColor: '#ffffff'
      },
      assetBundlePatterns: [
        '**/*'
      ],
      ios: {
        supportsTablet: true
      },
      android: {
        adaptiveIcon: {
          foregroundImage: './assets/adaptive-icon.png',
          backgroundColor: '#ffffff'
        }
      },
      web: {
        favicon: './assets/favicon.png',
        bundler: 'metro'
      },
      extra: {
        storybookEnabled: process.env.storybookEnabled
      },
      runtimeVersion: {
        policy: 'appVersion'
      },
      plugins: [
        'expo-router'
      ]
    }
  }
}
