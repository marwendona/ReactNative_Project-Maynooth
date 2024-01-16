import { router } from 'expo-router';
import React from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation, NavigationProp } from '@react-navigation/native';


interface OnboardingProps {
  navigation: NavigationProp<any>; 
}


const Onboarding: React.FC<OnboardingProps> = () =>{
  const navigation = useNavigation();
  const onboardingData = [
    {
      image: require('../../assets/oboarding1.png'),
      text: 'Welcome!',
      description: 'We are the best choice to help you build your dream home',
    },
    {
      image: require('../../assets/onboarding2.png'),
      text: 'Anything You Need',
      description: 'Find all the furniture you need to make your home the best place to live',
    },
    {
      image: require('../../assets/onboarding3.png'),
      text: 'We Offer Quality',
      description: 'We collaborate with the best designers and builders to create the highest quality furniture',
    },
    {
      image: require('../../assets/onboarding4.png'),
      text: 'Get Inspired',
      description: 'Find thousands of inspirations only from the experts',
    },
  ];

  const handleButtonClickSignUp = () => {
    router.push({pathname: "auth/signUp"}) 
  };

  const handleButtonClickSignIn = () => {
    router.push({pathname: "auth/signIn"}) 
  };
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} loop={false} showsButtons={false} showsPagination={false}>
        {onboardingData.map((screen, index) => (
          <View key={index} style={styles.slide}>
            <ImageBackground source={screen.image} style={styles.backgroundImage}>
              <View style={styles.overlay}>
                <View style={styles.linearGradient} />
                  {/* Dots */}
                  <View style={styles.dotContainer}>
                  {onboardingData.map((_, dotIndex) => (
                    <View
                      key={dotIndex}
                      style={[styles.dot, dotIndex === index ? styles.activeDot : null]}
                    />
                  ))}
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>{screen.text}</Text>
                  <Text style={styles.text2}>{screen.description}</Text>
                </View>

                {/* Signup Button */}
                <TouchableOpacity style={[styles.button]} onPress={handleButtonClickSignUp}>
                  <Text style={styles.buttonText}>Sign me up!</Text>
                </TouchableOpacity>
                
                  <Text onPress={handleButtonClickSignIn} style={styles.askMe}>Ask me later</Text>
            
              </View>
            </ImageBackground>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  askMe: {
    color: 'white',
    marginTop: 24,
    marginBottom: 24,
    fontSize: 14,
    fontWeight: '700',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: 312,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },
  wrapper: {},
  slide: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%)`,
  },
  textContainer: {
    marginLeft:20,
    marginTop: 100,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 48,
    fontWeight: '900',
    marginBottom: 10,
  },
  text2: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  dotContainer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  dot: {
    width: 69,
    height: 6,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'white',
  },
});

export default Onboarding;
