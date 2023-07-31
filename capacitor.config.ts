import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.demo.todoList',
  appName: 'Ionic Demo',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      // launchAutoHide: true,
      // launchFadeOutDuration: 3000,
      backgroundColor: '#000',
      // androidSplashResourceName: 'splash',
      // androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      androidSpinnerStyle: 'small',
      iosSpinnerStyle: 'small',
      // spinnerColor: '#999999',
      splashFullScreen: true,
      splashImmersive: true,
      // layoutName: 'launch_screen',
      // useDialog: true,
    },
  },
};

export default config;
